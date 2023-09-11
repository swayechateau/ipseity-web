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
interface TranslationInterface
{
    /**
     * The attributes that are mass assignable.
     *
     * @param $id           string
     * @param $languageCode string
     * 
     * @return void
     */
    public static function one($id, $languageCode);

    /**
     * The attributes that are mass assignable.
     * 
     * @return void
     */
    public static function all();
}
