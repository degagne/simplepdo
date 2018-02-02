<?php
namespace SimplePDO;

use SimplePDO\Configuration;
use SimplePDO\SimplePDOStatement;
use SimplePDO\Drivers\SqliteDriver;
use SimplePDO\Drivers\MySQLDriver;

class SimplePDO extends SimplePDOStatement
{
    
    /**
     * PDO connection object.
     *
     * @var object
     */
    private $dbconnect;
    
    /**
     * PDOStatement object.
     *
     * @var object
     */
    public $stmt;

    /**
     * Constructor.
     *
     * @param  object PDO2\Configuration object
     * @return void
     */
    public function __construct(Configuration $configuration)
    {
        switch ($configuration->get('GENERAL', 'DRIVER'))
        {
            case 'SQLITE':
            case 'SQLITE2':
                $dsn = SqliteDriver::dsn($configuration);
                $username = null;
                $password = null;
                break;
            case 'MYSQL':
                $dsn = MySQLDriver::dsn($configuration);
                $username = $configuration->get('MYSQL', 'USER');
                $password = $configuration->get('MYSQL', 'PASSWORD');
                break;
            default:
                throw new \RuntimeException(__METHOD__ . ": PDO driver '{$configuration->get('GENERAL', 'DRIVER')}' is not supported");
        }

        $this->dbconnect = new \PDO(
            $dsn,
            $username,
            $password,
            [
                \PDO::ATTR_PERSISTENT			=> false,
                \PDO::ATTR_ERRMODE				=> \PDO::ERRMODE_EXCEPTION,
                \PDO::ATTR_DEFAULT_FETCH_MODE	=> \PDO::FETCH_ASSOC
            ]
        );
    }

    /**
     * Destructor.
     *
     * @return void
     */
    public function __destruct()
    {
        $this->stmt = null;
        $this->dbconnect = null;
    }

    /**
     * Disconnect from database.
     *
     * @return void
     */
    final public function disconnect()
	{
		$this->__destruct();
	}

    /**
     * Initiates a transaction .
     *
     * @return object
     */
    final public function beginTransaction()
    {
        $this->dbconnect->beginTransaction();
        return $this;
    }

    /**
     * Commits a transaction.
     *
     * @return object
     */
    final public function commit()
    {
        $this->dbconnect->commit();
        return $this;
    }

    /**
     *  Rolls back a transaction.
     *
     * @return object
     */
    final public function rollBack()
    {
        $this->dbconnect->rollBack();
        return $this;
    }

    /**
     * Prepares a statement for execution and 
     * returns a statement object.
     *
     * @param  string $statement valid SQL statement 
     * @return object
     */
    final public function prepare($statement)
    {
        $this->stmt = $this->dbconnect->prepare($statement);
        $this->queryStrings($statement);
        return $this;
    }
    
    /**
     * Binds a parameter to the specified variable name.
     *
     * @param  mixed  $parameter parameter identifier
     * @param  mixed  $variable  name of the variable to bind to the SQL statement parameter
     * @param  int    $data_type explicit data type for the parameter
     * @return object
     */
    final public function bindParam($parameter, $variable, $data_type = \PDO::PARAM_STR)
	{
		$this->stmt->bindParam($parameter, $variable, $data_type);
        $this->queryParams($parameter, $variable, $data_type);
		return $this;
	}

    /**
     * Executes a prepared statement
     *
     * @return object
     */
	final public function execute()
	{
		$this->stmt->execute();
		return $this;
	}
    
    /**
     * Set the default fetch mode for this statement.
     *
     * @return object
     */
    final public function setFetchMode()
    {
        if (func_num_args()== 2)
        {
            $this->stmt->setFetchMode(func_get_arg(0), func_get_arg(1));
            return $this;
        }

        $this->stmt->setFetchMode(func_get_arg(0));
        return $this;
    }

}
