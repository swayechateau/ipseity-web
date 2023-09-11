<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSiteWordTranslationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('site_word_translations', function (Blueprint $table) {
            $table->string('site_word_id');
            $table->unsignedBigInteger('language_id');
            $table->string('site_word_translation');
            $table->unique(['site_word_id', 'language_id'], 'site_word');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('site_word_translations');
    }
}
