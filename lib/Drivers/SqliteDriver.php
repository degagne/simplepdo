<?php
namespace SimplePDO\Drivers;

use SimplePDO\Configuration;
use SimplePDO\Drivers\DriverInterface;

class SqliteDriver implements DriverInterface
{

    /**
     * {@inheritdoc}
     */
    final public static function dsn(Configuration $configuration)
    {
        $driver = $configuration->get('GENERAL', 'DRIVER');
        $dbname = $configuration->get('SQLITE', 'DBNAME');
        return ($driver == 'SQLITE') ? "sqlite:{$dbname}" : "sqlite2:{$dbname}";
    }
}
