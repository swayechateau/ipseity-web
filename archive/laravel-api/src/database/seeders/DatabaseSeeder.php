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
namespace Database\Seeders;

use Database\Seeders\Seeds\CategorySeeder;
use Database\Seeders\Seeds\LanguageSeeder;
use Database\Seeders\Seeds\TypeSeeder;
use Database\Seeders\Seeds\PageSeeder;
use Database\Seeders\Seeds\PostSeeder;
use Database\Seeders\Seeds\ProjectSeeder;
use Database\Seeders\Seeds\SettingSeeder;
use Database\Seeders\Seeds\CommonWordSeeder;
use Database\Seeders\Seeds\AuthorSeeder;
use Illuminate\Database\Seeder;

/**
 * Category Model
 *
 * @category CategoryName
 * @package  PackageName
 * @author   Swaye Chateau <swaye@kitechsoftware.com>
 * @license  http://www.php.net/license/3_01.txt  PHP License 3.01
 * @link     http://pear.php.net/package/PackageName
 */
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(
            [
                LanguageSeeder::class,
                TypeSeeder::class,
                CommonWordSeeder::class,
                CategorySeeder::class,
                AuthorSeeder::class,
                PostSeeder::class,
                ProjectSeeder::class,
                //SettingSeeder::class,
                //PageSeeder::class,
            ]
        );
    }
}
