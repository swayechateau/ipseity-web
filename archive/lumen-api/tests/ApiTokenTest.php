<?php

class ApiTokenTest extends TestCase
{
    public $token = 'testing';

    // v1/token-test [GET]
    public function testShouldReturnUnAuthorised()
    {
        $this->get("/v1/token-test?api_token=")
            ->seeStatusCode(401)
            ->seeJsonEquals([
                'error' => [
                    'code' => 401,
                    'message' => "Don't get cheeky! - You are not authorised beyond this point!!",
                ],
            ]);
    }

    // v1/token-test [GET]
    public function testShouldReturnTokenValid()
    {
        $this->get("/v1/token-test?api_token=$this->token")
            ->seeStatusCode(200)
            ->seeJsonEquals([
                'is_valid' => true,
                'message' => 'Token is valid!! Happy Times!',
            ]);
    }
}
