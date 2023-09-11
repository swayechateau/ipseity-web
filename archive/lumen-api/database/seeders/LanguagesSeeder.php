<?php

namespace Database\Seeders;

use App\Models\Site\Language;
use Illuminate\Database\Seeder;

class LanguagesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $created = \Carbon\Carbon::now();
        
        $languages = array(
            array('id' => 1,'name' => 'english','native_name' => 'english','region' => 'united kingdom','code' => 'en-gb','created_at' => $created, 'updated_at' => $created),
            array('id' => 2,'name' => 'french','native_name' => 'français','region' => 'france','code' => 'fr','created_at' => $created, 'updated_at' => $created),
            array('id' => 3,'name' => 'japanese','native_name' => '日本語','region' => 'japan','code' => 'ja','created_at' => $created, 'updated_at' => $created),
        );
        Language::insert($languages);
        
    }
}
