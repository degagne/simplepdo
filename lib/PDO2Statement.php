<?php
namespace SimplePDO;

class SimplePDOStatement
{
    /**
     * Queries.
     *
     * @var array
     */
    private $queries = [];
    
    /**
     * Parameter bindings..
     *
     * @var array
     */
    private $bindings = [];
    
    /**
     * Index..
     *
     * @var int
     */
    private $index = 0;
    
    /**
     * Returns an array containing all of the result set rows.
     *
     * @return array
     */
    final public function fetchAll()
	{
		return $this->stmt->fetchAll();
	}
    
    /**
     * Fetches the next row from a result set.
     *
     * @param  int    $fetch_style controls the contents of the returned array
     * @return mixed
     */
    final public function fetch()
	{
		return $this->stmt->fetch();
	}

    /**
     * Returns a single column from the next row of a result set.
     *
     * @param  int    $column 0-indexed number of the column you wish to retrieve from the row
     * @return mixed
     */
    final public function fetchColumn($column = 0)
	{
		return $this->stmt->fetchColumn($column);
	}
    
    /**
     * Fetch extended error information associated 
     * with the last operation on the statement handle. 
     *
     * @return mixed
     */
    final public function errorInfo()
	{
		return $this->stmt->errorInfo();
	}

    /**
     * Store all query strings for session.
     *
     * @return object
     */
    final public function queryStrings($statement)
    {
        $this->queries[] = ['sql' => $statement];
        if (count($this->queries) == 1)
        {
            $this->index = 0;
        }
        else
        {
            $this->index++;
        }
    }

    /**
     * Store all query parameters for session.
     *
     * @return object
     */
    final public function queryParams($parameter, $variable, $data_type)
    {
        $this->bindings[$this->index]["params"][] = ["param_name" => $parameter, "param_value" => $variable, "param_type" => $data_type];
    }

    /**
     * Fetch query strings/params for session.
     *
     * @return string
     */
    final public function fetchQueryStrings()
    {
        return json_encode(\SimplePDO\array_merge_recursive_numeric($this->queries, $this->bindings));
    }

}
