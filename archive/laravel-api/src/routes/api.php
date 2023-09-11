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

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get(
    '/',
    function () {
        return 'welcome to the api';
    }
);

Route::group(
    ['prefix' => '/v1'],
    function () {
        Route::get(
            '/',
            function () {
                return 'welcome to the rest api';
            }
        );
        Route::get('/search', 'Search\\SearchController@index');
        Route::post('/search', 'Search\\SearchController@index');
        Route::apiResources(
            [
                'languages' => 'v1\\Language\\LanguageController',
                'categories' => 'v1\\Category\\CategoryController',
                'commonwords' => 'v1\\CommonWord\\CommonWordController',
                'posts' => 'v1\\Post\\PostController',
                'projects' => 'v1\\Project\\ProjectController',
                //'resumes' => 'v1\\Resume\\ResumeController',
                //'settings' => 'Site\\SettingController',
                //'pages' => 'Page\\PageController',

            ]
        );

        Route::apiResource('logs', 'Log\\LogController')->except(
            [
                'store', 'update'
            ]
        );
    }
);


Route::group(
    ['prefix' => '/v2'],
    function () {
        Route::get(
            '/',
            function () {
                // Show GraphQL API page - Schema
                return 'welcome to the graphQL api';
            }
        );
        /*
        Route::get(
            '/graphql',
            function () {
                return 'welcome to the graphQL api';
            }
        );
        */
    }
);
