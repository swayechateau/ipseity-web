<?php

$router->group(['prefix' => 'v1'], function () use ($router) {
    $router->get('token-test', 'AppController@testToken');
    $router->get('query', 'V1\QueryController@search');
    $router->group(['prefix' => 'languages'], function () use ($router) {
       $router->get('/', 'V1\LanguagesController@index');
       $router->post('/', 'V1\LanguagesController@store'); 
       $router->get('/{id}', 'V1\LanguagesController@show'); 
       $router->put('/{id}', 'V1\LanguagesController@update'); 
       $router->delete('/{id}', 'V1\LanguagesController@destroy'); 
    });
    $router->group(['prefix' => 'settings'], function () use ($router) {
        $router->get('/', 'V1\SettingsController@index');
        $router->put('/', 'V1\SettingsController@update'); 
    });
    $router->group(['prefix' => 'sitewords'], function () use ($router) {
        $router->get('/', 'V1\SiteWordsController@index');
        $router->get('{id}', 'V1\SiteWordsController@show'); 
    });
    $router->group(['prefix' => 'programming-languages'], function () use ($router) {
        $router->get('/', 'V1\ProgrammingLanguagesController@index');
        $router->get('{id}', 'V1\ProgrammingLanguagesController@show');

        // $router->get('{id}/frameworks', 'V1\ProgrammingLanguagesController@frameworks');
    });
    $router->group(['prefix' => 'types'], function () use ($router) {
        $router->get('/', 'V1\TypesController@index');
        $router->get('{id}', 'V1\TypesController@show');

        $router->post('/tags', 'V1\TypesController@translateTags');
    });

    $router->group(['prefix' => 'projects'], function () use ($router) {
        $router->get('/', 'V1\ProjectsController@index');
        $router->get('{id}', 'V1\ProjectsController@show'); 
    });

    $router->group(['prefix' => 'pages'], function () use ($router) {
        $router->get('/', 'V1\PagesController@index');
        $router->get('{id}', 'V1\PagesController@show'); 
    });

    $router->group(['prefix' => 'posts'], function () use ($router) {
        $router->get('/', 'V1\PostsController@index');
        $router->get('{id}', 'V1\PostsController@show'); 
    });
});