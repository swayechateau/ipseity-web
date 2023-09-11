<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('common_word_translations', function (Blueprint $table) {
            $table->unsignedBigInteger('common_word_id');
            $table->unsignedBigInteger('language_id');
            $table->string('common_word_text');
            $table->softDeletes();
            $table->timestamps();

            $table->unique(['language_id', 'common_word_id'], 'language');
            $table->foreign('common_word_id')
            ->references('common_word_id')
            ->on('common_words')->onDelete('cascade');

            $table->foreign('language_id')
            ->references('language_id')
            ->on('languages');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('common_word_translations');
    }
};
