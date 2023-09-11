<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class ProgrammingLanguagesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        /* programming_languages */
        $prog_langs = array(
            array('id' => 1, 'language' => 'javascript', 'is_case_sensitive' => 0, 'created_at' => '2019-10-29 02:37:11', 'updated_at' => '2019-10-29 02:37:13'),
            array('id' => 2, 'programming_language' => 'php', 'is_case_sensitive' => 0, 'created_at' => '2019-10-29 02:37:46', 'updated_at' => '2019-10-29 02:37:49'),
            array('id' => 3, 'programming_language' => 'html', 'is_case_sensitive' => 0, 'created_at' => '2019-10-29 02:37:47', 'updated_at' => '2019-10-29 02:37:51'),
            array('id' => 4, 'programming_language' => 'css', 'is_case_sensitive' => 0, 'created_at' => '2019-11-09 02:03:04', 'updated_at' => '2019-11-09 02:03:04'),
        );

        app('db')->table('programming_languages')->insert($prog_langs);
    }
}
