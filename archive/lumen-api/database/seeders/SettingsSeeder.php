<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class SettingsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $settings = [
            'site_name' => 'Swaye Chateau',
            'url' => 'https://swayechateau.com',
            'email' => 'me@swayechateau.com',
            'location' => 'England, United Kingdom',
            'default_lang' => 'en-gb',
            'supported_langs' => json_encode(["en-gb", "fr", "ja"]),
            'social_links' => json_encode([
                [
                    "href" => "https://github.com/swayechateau", 
                    "icon" => "fab fa-github"
                ],
                [
                    "href" => "https://mas.to/@mercylessreap", 
                    "icon" => "fab fa-mastodon"
                ], 
                [
                    "href" => "https://twitter.com/SwayeChateau", 
                    "icon" => "mdi-twitter"
                ], 
                [
                    "href" => "https://www.instagram.com/swayechateau", 
                    "icon" => "mdi-instagram"
                ], 
                [
                    "href" => "https://www.facebook.com/swaye.chateau", 
                    "icon" => "mdi-facebook"
                ], 
                [
                    "href" => "https://www.reddit.com/user/swayec", 
                    "icon" => "mdi-reddit"
                ], 
                [
                    "href" => "https://www.pinterest.co.uk/swayec/", 
                    "icon" => "mdi-pinterest"
                ], 
                [
                    "href" => "https://mercylessreap.com", 
                    "icon" => "fas fa-gamepad"
                ]
            ]),
            'founded' => 2019,
        ];
        app('db')->table('settings')->updateOrInsert(['id' => 1],$settings);
    }
}
