<?php
namespace SimplePDO\Drivers;

use SimplePDO\Configuration;
use SimplePDO\Drivers\DriverInterface;

class MySQLDriver implements DriverInterface
{

    /**
     * {@inheritdoc}
     */
    final public static function dsn(Configuration $configuration)
    {
        $dbname = $configuration->get('MYSQL', 'DBNAME');
        $host = $configuration->get('MYSQL', 'HOST');
        $port = $configuration->get('MYSQL', 'PORT');
        $charset = $configuration->get('MYSQL', 'CHARSET');
        $socket = $configuration->get('MYSQL', 'SOCKET');
        
        if (!empty($socket))
        {
            return "mysql:dbname={$dbname};unix_socket{$socket};charset={$charset}";
        }
        return "mysql:dbname={$dbname};host={$host};port={$port};charset={$charset}";
    }

}
