<?php
namespace SimplePDO;

class Configuration
{
    /**
     * Configuration file.
     *
     * @var array
     */
    private $parsed_ini_file;

    /**
     * Constructor.
     *
     * @param  string $inifile configuration file (ini)
     * @return void
     */
    public function __construct($inifile)
    {
        if (!is_readable($inifile))
        {
            throw new \RuntimeException(__METHOD__ . ": unable to parse {$inifile}; file doesn't exists or readable");
        }
        
        if (($this->parsed_ini_file = parse_ini_file($inifile, true)) === false)
        {
            throw new \RuntimeException(__METHOD__ . ": failed to parse {$inifile}.");
        }
    }
    
    /**
     * Retrieve property from configuration file.
     *
     * @param  string $section  section header
     * @param  string $property property (key)
     * @return string
     */
    final public function get($section, $property)
    {
        if (!isset($this->parsed_ini_file[$section][$property]))
        {
            throw new \RuntimeException(__METHOD__ . ": failed to retrieve the '{$property}' property within the '{$section}' section.");
        }
        return $this->parsed_ini_file[$section][$property];
    }
}
