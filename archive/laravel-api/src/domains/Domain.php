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
namespace Domains;

/**
 * SiteWord Seeder
 * 
 * @category CategoryName
 * @package  PackageName
 * @author   Swaye Chateau <swaye@kitechsoftware.com>
 * @license  http://www.php.net/license/3_01.txt  PHP License 3.01
 * @link     http://pear.php.net/package/PackageName
 */
class Domain
{
    /**
     * Domain Loader
     *
     * @param $domainName string
     * 
     * @return array string[]
     */
    public static function load($domainName) : array
    {
        $domain = Domain::findDomain($domainName);
        $array = json_decode($domain, true);
        return $array;
    }

    /**
     * Domain Finder
     *
     * @param $domainName string
     * 
     * @return string
     */
    protected static function findDomain($domainName) : string
    {
        $dirname = dirname(__FILE__);
        return file_get_contents("$dirname/$domainName.json");
        // check if all lowercase
        // check if all uppercase
        // check if _
        // check if -
    }
}