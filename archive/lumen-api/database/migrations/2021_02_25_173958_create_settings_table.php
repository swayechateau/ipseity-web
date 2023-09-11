<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSettingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('settings', function (Blueprint $table) {
            $table->id();
            $table->string('site_name')->unique();
            $table->string('url')->unique();
            $table->string('email');
            $table->string('location');
            $table->string('default_lang')->default('eng');
            $table->json('supported_langs')->nullable(); // array
            $table->json('social_links')->nullable(); //icon, name, url
            $table->integer('founded')->nullable();
            
            $table->timestamp('created_at')->default(app('db')->raw('CURRENT_TIMESTAMP'));
            $table->timestamp('updated_at')->default(app('db')->raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('settings');
    }
}
