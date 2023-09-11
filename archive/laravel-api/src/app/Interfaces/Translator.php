<?php
/**
 * This is a sample function to illustrate additional PHP formatter
 * options.
 * 
 * @package App\Interfaces
 * 
 * @author Name <email@email.com>
 */

namespace App\Interfaces;

/**
 * Interface ModelExtention
 * 
 * @package App\Interfaces
 */
interface Translator
{
    public static function translateOne($id);
    public static function translateAll();
}
