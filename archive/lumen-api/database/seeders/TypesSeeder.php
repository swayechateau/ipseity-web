<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class TypesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        /* types */
        $types = array(
            array('id' => 1, 'type' => 'travel', 'is_category' => 1, 'programming_language_id' => null, 'is_tag' => 1, 'is_case_sensitive' => 0, 'created_at' => '2019-10-29 02:37:11', 'updated_at' => '2019-10-29 02:37:13'),
            array('id' => 2, 'type' => 'leisure', 'is_category' => 1, 'programming_language_id' => null, 'is_tag' => 1, 'is_case_sensitive' => 0, 'created_at' => '2019-10-29 02:37:46', 'updated_at' => '2019-10-29 02:37:49'),
            array('id' => 3, 'type' => 'awesome', 'is_category' => 1, 'programming_language_id' => null, 'is_tag' => 1, 'is_case_sensitive' => 0, 'created_at' => '2019-10-29 02:37:47', 'updated_at' => '2019-10-29 02:37:51'),
            array('id' => 4, 'type' => 'sample', 'is_category' => 1, 'programming_language_id' => null, 'is_tag' => 1, 'is_case_sensitive' => 0, 'created_at' => '2019-11-09 02:03:04', 'updated_at' => '2019-11-09 02:03:04'),

            array('id' => 5, 'type' => 'test', 'is_category' => 1, 'programming_language_id' => null, 'is_tag' => 1, 'is_case_sensitive' => 0, 'created_at' => '2019-11-09 02:03:04', 'updated_at' => '2019-11-09 02:03:04'),
            array('id' => 6, 'type' => 'development', 'is_category' => 1, 'programming_language_id' => null, 'is_tag' => 1, 'is_case_sensitive' => 0, 'created_at' => '2019-11-09 02:03:04', 'updated_at' => '2019-11-09 02:03:04'),
            array('id' => 7, 'type' => 'api', 'is_category' => 1, 'programming_language_id' => null, 'is_tag' => 1, 'is_case_sensitive' => 1, 'created_at' => '2019-11-09 02:03:04', 'updated_at' => '2019-11-09 02:03:04'),
            array('id' => 8, 'type' => 'vue-js', 'is_category' => 0, 'programming_language_id' => 1, 'is_tag' => 1, 'is_case_sensitive' => 1, 'created_at' => '2019-11-09 02:03:04', 'updated_at' => '2019-11-09 02:03:04'),
            array('id' => 9, 'type' => 'laravel', 'is_category' => 0, 'programming_language_id' => 2, 'is_tag' => 1, 'is_case_sensitive' => 1, 'created_at' => '2019-11-09 02:03:04', 'updated_at' => '2019-11-09 02:03:04'),
            array('id' => 10, 'type' => 'laravel-lumen', 'is_category' => 0, 'programming_language_id' => 2, 'is_tag' => 1, 'is_case_sensitive' => 1, 'created_at' => '2019-11-09 02:03:04', 'updated_at' => '2019-11-09 02:03:04'),

            array('id' => 11, 'type' => 'react-js', 'is_category' => 0, 'programming_language_id' => 1, 'is_tag' => 1, 'is_case_sensitive' => 1, 'created_at' => '2019-11-09 02:03:04', 'updated_at' => '2019-11-09 02:03:04'),
            array('id' => 12, 'type' => 'react-native-js', 'is_category' => 0, 'programming_language_id' => 1, 'is_tag' => 1, 'is_case_sensitive' => 1, 'created_at' => '2019-11-09 02:03:04', 'updated_at' => '2019-11-09 02:03:04'),
            array('id' => 13, 'type' => 'website', 'is_category' => 1, 'programming_language_id' => null, 'is_tag' => 1, 'is_case_sensitive' => 1, 'created_at' => '2019-11-09 02:03:04', 'updated_at' => '2019-11-09 02:03:04'),

        );

        /* types_translations */
        $types_translations = array(
            // travel
            array('type_id' => 1, 'language_id' => 1, 'type_translation' => 'Travel', 'type_description' => null),
            array('type_id' => 1, 'language_id' => 2, 'type_translation' => 'Voyage', 'type_description' => null),
            array('type_id' => 1, 'language_id' => 3, 'type_translation' => '旅行', 'type_description' => null),
            // leisure
            array('type_id' => 2, 'language_id' => 1, 'type_translation' => 'Leisure', 'type_description' => null),
            array('type_id' => 2, 'language_id' => 2, 'type_translation' => 'Loisir', 'type_description' => null),
            array('type_id' => 2, 'language_id' => 3, 'type_translation' => '余暇', 'type_description' => null),
            // Awesome
            array('type_id' => 3, 'language_id' => 1, 'type_translation' => 'Awesome', 'type_description' => null),
            array('type_id' => 3, 'language_id' => 2, 'type_translation' => 'Impressionnant', 'type_description' => null),
            array('type_id' => 3, 'language_id' => 3, 'type_translation' => '驚くばかり', 'type_description' => null),
            // Test
            array('type_id' => 5, 'language_id' => 1, 'type_translation' => 'test', 'type_description' => null),
            array('type_id' => 5, 'language_id' => 2, 'type_translation' => 'tester', 'type_description' => null),
            array('type_id' => 5, 'language_id' => 3, 'type_translation' => '試し', 'type_description' => null),
            // Development
            array('type_id' => 6, 'language_id' => 1, 'type_translation' => 'development', 'type_description' => null),
            array('type_id' => 6, 'language_id' => 2, 'type_translation' => 'développement', 'type_description' => null),
            array('type_id' => 6, 'language_id' => 3, 'type_translation' => '開発', 'type_description' => null),
            // API
            array('type_id' => 7, 'language_id' => 1, 'type_translation' => 'API', 'type_description' => null),
            array('type_id' => 7, 'language_id' => 2, 'type_translation' => 'API', 'type_description' => null),
            array('type_id' => 7, 'language_id' => 3, 'type_translation' => 'API', 'type_description' => null),
            // Vue JS
            array('type_id' => 8, 'language_id' => 1, 'type_translation' => 'Vue.js', 'type_description' => null),
            array('type_id' => 8, 'language_id' => 2, 'type_translation' => 'Vue.js', 'type_description' => null),
            array('type_id' => 8, 'language_id' => 3, 'type_translation' => 'Vue.js', 'type_description' => null),
            // Laravel
            array('type_id' => 9, 'language_id' => 1, 'type_translation' => 'Laravel', 'type_description' => null),
            array('type_id' => 9, 'language_id' => 2, 'type_translation' => 'Laravel', 'type_description' => null),
            array('type_id' => 9, 'language_id' => 3, 'type_translation' => 'Laravel', 'type_description' => null),
            // Laravel
            array('type_id' => 10, 'language_id' => 1, 'type_translation' => 'Laravel Lumen', 'type_description' => null),
            array('type_id' => 10, 'language_id' => 2, 'type_translation' => 'Laravel Lumen', 'type_description' => null),
            array('type_id' => 10, 'language_id' => 3, 'type_translation' => 'Laravel Lumen', 'type_description' => null),
            // Laravel
            array('type_id' => 11, 'language_id' => 1, 'type_translation' => 'React', 'type_description' => null),
            array('type_id' => 11, 'language_id' => 2, 'type_translation' => 'React', 'type_description' => null),
            array('type_id' => 11, 'language_id' => 3, 'type_translation' => 'React', 'type_description' => null),
            // Laravel
            array('type_id' => 12, 'language_id' => 1, 'type_translation' => 'React Native', 'type_description' => null),
            array('type_id' => 12, 'language_id' => 2, 'type_translation' => 'React Native', 'type_description' => null),
            array('type_id' => 12, 'language_id' => 3, 'type_translation' => 'React Native', 'type_description' => null),
            // Laravel
            array('type_id' => 13, 'language_id' => 1, 'type_translation' => 'Website', 'type_description' => null),
            array('type_id' => 13, 'language_id' => 2, 'type_translation' => 'Website', 'type_description' => null),
            array('type_id' => 13, 'language_id' => 3, 'type_translation' => 'Website', 'type_description' => null),

        );

        app('db')->table('types')->insert($types);
        app('db')->table('type_translations')->insert($types_translations);
    }
}
