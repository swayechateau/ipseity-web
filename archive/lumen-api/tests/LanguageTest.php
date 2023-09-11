<?php

class LanguageTest extends TestCase
{
    public $token = 'testing';

    // /v1/languages [GET]
    public function testShouldReturnAllLanguages()
    {
        $this->get("v1/languages")
            ->seeStatusCode(200)
            ->seeJsonStructure([
                '*' => [
                    'id',
                    'name',
                    'native_name',
                    'region',
                    'code',
                    'created_at',
                    'updated_at',
                ],
            ]);
    }

    /**
     * /v1/languages/id [GET]
     */
    public function testShouldReturnLanguage()
    {
        $this->get("v1/languages/2")
            ->seeStatusCode(200)
            ->seeJson([
                'name' => 'french',
                'native_name' => 'français',
                'region' => 'france',
                'code' => 'fr',
            ]);
    }

    // Restricted routes
    /**
     * /languages [POST]
     */
    public function testShouldCreateLanguage()
    {
        $parameters = [
            "name" => "demo",
            "region" => "demo",
            "code" => "dd",
            "native_name" => "demo",
        ];

        $this->post("v1/languages", $parameters, ['api_token' => $this->token])
            ->seeStatusCode(201)
            ->seeJson([
                "name" => "demo",
                "region" => "demo",
                "code" => "dd",
                "native_name" => "demo"
            ]);
    }

    /**
    * updating laguages work, lumen phpunit tests not recoginising route
    * tests need to migrate and seed db after each run
    */

    /**
     * /languages/id [PUT]
     */
    public function testShouldUpdateLanguage()
    {
        $parameters = [
            'name' => 'Albanian',
            'native_name' => 'Albanian',
            'region' => 'twat',
            'code' => 'sq',
        ];

        $this->put("v1/languages/1", $parameters, ['api_token' => $this->token]);
        $this->seeStatusCode(201);
        $this->seeJsonStructure([
            'name',
            'native_name',
            'region',
            'code',
            'created_at',
            'updated_at',
        ]);
    }

    /**
     * /languages/id [DELETE]
     */
    public function testShouldDeleteLanguage()
    {
        $this->delete("v1/languages/1", [], ['api_token' => $this->token]);
        $this->seeStatusCode(410);
        $this->seeJsonStructure([
            'code',
            'message',
        ]);
    }
}
