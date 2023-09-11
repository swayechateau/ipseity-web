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
        Schema::create('post_translations', function (Blueprint $table) {
            $table->unsignedBigInteger('post_id');
            $table->unsignedBigInteger('language_id');
            $table->string('post_image')->nullable();
            $table->string('post_name')->nullable();
            $table->string('post_title');
            $table->string('post_subtitle')->nullable();
            $table->string('post_description')->nullable();
            $table->json('post_content')->nullable();
            $table->softDeletes();
            $table->timestamps();

            $table->unique(['language_id', 'post_id'], 'language');
            $table->foreign('post_id')
                  ->references('post_id')
                  ->on('posts')->onDelete('cascade');
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
        Schema::dropIfExists('post_translations');
    }
};
