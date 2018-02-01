<?php
namespace SimplePDO\Drivers;

use SimplePDO\Configuration;

interface DriverInterface
{   
    /**
     * Returns the MySql data source name (dsn).
     *
     * @param  object PDO2\Configuration object
     * @return string
     */
    public static function dsn(Configuration $configuration);
}
