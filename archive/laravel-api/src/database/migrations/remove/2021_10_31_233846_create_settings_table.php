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
            $table->string('app_id')->unique();
            $table->string('site_name')->unique();
            $table->string('url')->unique();
            $table->string('email');
            $table->string('location');
            $table->string('default_lang')->default('en');
            $table->json('supported_langs')->nullable(); // array
            $table->json('social_links')->nullable(); // icon, name, url
            $table->integer('founded')->nullable();
            $table->timestamps();
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
