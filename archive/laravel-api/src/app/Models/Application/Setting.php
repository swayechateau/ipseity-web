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
namespace App\Models\Site;

use Illuminate\Database\Eloquent\Model;

/**
 * Settings Model
 *
 * @category CategoryName
 * @package  PackageName
 * @author   Swaye Chateau <swaye@kitechsoftware.com>
 * @license  http://www.php.net/license/3_01.txt  PHP License 3.01
 * @link     http://pear.php.net/package/PackageName
 */
class Setting extends Model
{
    protected $fillable = [
        'app_id',
        'site_name',
        'url',
        'email',
        'location',
        'default_lang',
        'supported_langs',
        'social_links',
        'founded',
    ];

    
    protected static function create($model) 
    {
        $model['supported_langs'] = json_encode($model['supported_langs']);
        $model['social_links'] = json_encode($model['social_links']);
        if (Setting::where('app_id', $model['app_id'])->first()) {
            return false;
        }
        Setting::firstOrCreate($model);
    }
}
