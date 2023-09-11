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
        Schema::create('author_translations', function (Blueprint $table) {
            $table->unsignedBigInteger('author_id');
            $table->unsignedBigInteger('language_id');
            $table->string('author_firstname');
            $table->string('author_middlename')->nullable();
            $table->string('author_lastname');
            $table->string('author_professional_title')->nullable();
            $table->string('author_location')->nullable();
            $table->json('author_bio')->nullable();
            $table->string('author_catchphase')->nullable();
            $table->string('author_image1')->nullable();
            $table->string('author_image2')->nullable();
            $table->softDeletes();
            $table->timestamps();

            $table->unique(['language_id', 'author_id'], 'language');
            $table->foreign('author_id')
                  ->references('author_id')
                  ->on('authors')->onDelete('cascade');
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
        Schema::dropIfExists('author_translations');
    }
};
