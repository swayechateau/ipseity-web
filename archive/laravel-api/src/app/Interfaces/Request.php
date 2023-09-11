<?php
/**
 * This is a sample function to illustrate additional PHP formatter
 * options.
 * 
 * @package App\Interfaces
 * 
 * @author Name <email@email.com>
 * 
 */

namespace App\Interfaces;

/**
 * Interface ModelExtention
 * 
 * @package App\Interfaces
 */
interface Request
{
    /**
     * The attributes that are mass assignable.
     *
     * @param $modelArray string[]
     * 
     * @return void
     */
    public static function sanitise($modelArray);
}
