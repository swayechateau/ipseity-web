<?php
/**
 * PHP version 8
 *
 * LICENSE: This source file is subject to version 3.01 of the PHP license
 * that is available through the world-wide-web at the following URI:
 * http://www.php.net/license/3_01.txt.  If you did not receive a copy of
 * the PHP License and are unable to obtain it through the web, please
 * send a note to license@php.net so we can mail you a copy immediately.
 *
 * @category  CategoryName
 * @package   PackageName
 * @author    Swaye Chateau <swaye@kitechsoftware.com>
 * @copyright 1997-2005 The PHP Group
 * @license   http://www.php.net/license/3_01.txt  PHP License 3.01
 * @version   SVN: $Id$
 * @link      http://pear.php.net/package/PackageName
 */
namespace App\Models\Category;

use App\Interfaces\Translator;
use App\Models\Language\Language;
use Illuminate\Database\Eloquent\Model;

/**
 * Category Model
 *
 * @category CategoryName
 * @package  PackageName
 * @author   Swaye Chateau <swaye@kitechsoftware.com>
 * @license  http://www.php.net/license/3_01.txt  PHP License 3.01
 * @link     http://pear.php.net/package/PackageName
 */
class Category extends Model implements Translator
{
    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'category_index',
    ];

    protected static function idFromIndex($index) : int
    {
        $cat = self::where('category_index', $index)->first();
        return $cat->category_id;
    }
    /**
     * The attributes that are mass assignable.
     *
     * @param $categories string[]
     *
     * @return void
     */
    protected static function createMultiple($categories) : void
    {
        foreach ($categories as $category) {
            self::create($category);
        }
    }

    protected static function create($category) : void
    {
        // need to test
        foreach ($category as $key => $value) {
            $w = Category::firstOrCreate(['category_index' => $key]);
            $w = Category::firstOrCreate(['category_index' => $key]);
            foreach ($value as $code => $category) {
                self::createTranslation($w->category_id, $code, $category);
            }
        }
    }

    protected static function createTranslation($id, $code, $category) : void
    {
        if ($category['category_text'] != '') {
            CategoryTranslation::firstOrCreate(
                [
                    'category_id' => $id,
                    'language_id' => Language::idFromCode($code),
                    'category_text' => $category['category_text'],
                    'category_description' => $category['category_description']
                ]
            );
        }

    }

    /**
     * The attributes that are mass assignable.
     *
     * @param $categories string[]
     *
     * @return void
     */
    /**
    protected static function create($category, $translations) : void
    {
        Category::firstOrCreate(['id' => $category]);
        foreach ($translations as $code => $category) {
            CategoryTranslation::firstOrCreate(
                [
                    'category_id' => $category,
                    'language_id' => Language::idFromCode($code),
                    'text' => $category['text'],
                    'description' => $category['description']
                ]
            );
        }
    }
     */

    public static function translateOne($id)
    {
        $results = [];
        $langs = Language::all();

        $word = Category::where(['category_id',$id])->orWhere(['category_index',$id])->first();
        $results[$word->category_index] = ["translations" => []];
        foreach ($langs as $lang) {
            $translated = CategoryTranslation::where('language_id', $lang->language_id)
                ->where('category_id', $word->category_id)
                ->select('category_text', 'category_description')->first();
            $results[$word->category_index]["translations"][$lang->language_code] = $translated;

        }

        return $results;
    }

    public static function translateAll()
    {
        $results = [];
        $langs = Language::all();

        $words = Category::all();
        foreach ($words as $word) {
            $results[$word->category_index] = ["translations" => []];
            foreach ($langs as $lang) {
                $translated = CategoryTranslation::where('language_id', $lang->language_id)
                    ->where('category_id', $word->category_id)
                    ->select('category_text', 'category_description')->first();
                $results[$word->category_index]["translations"][$lang->language_code] = $translated;
            }
        }

        return $results;
    }
}
