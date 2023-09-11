<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(LanguagesSeeder::class);
        $this->call(SettingsSeeder::class);
        $this->call(SiteWordsSeeder::class);
        $this->call(ProgrammingLanguagesSeeder::class);
        $this->call(TypesSeeder::class);
        $this->call(PagesSeeder::class);
        $this->call(ProjectsSeeder::class);
    }
}
