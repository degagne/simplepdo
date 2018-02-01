<?php
namespace SimplePDO;

/**
 * Merge arrays based on numeric key.
 *
 * @return array
 */
function array_merge_recursive_numeric()
{
    $output = array();
    foreach(func_get_args() as $array) {
        foreach($array as $key => $value) {
            $output[$key] = isset($output[$key]) ?
                array_merge($output[$key], $value) : $value;
        }
    }
    return $output;
}
