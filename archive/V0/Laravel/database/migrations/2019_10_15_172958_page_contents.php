<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class PageContents extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('page_contents', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('page_id');
            $table->unsignedInteger('language_id');
            $table->string('category')->nullable();
            $table->string('name');
            $table->string('title')->nullable();
            $table->string('sub_title')->nullable();
            $table->string('description')->nullable();
            $table->json('content')->nullable();
            $table->boolean('aside')->default(false);
            $table->json('meta')->nullable();
            $table->json('tags')->nullable();
            $table->timestamps();

            $table->unique(['language_id', 'page_id'], 'language');
            $table->foreign('page_id')
                  ->references('id')
                  ->on('pages')->onDelete('cascade');
            $table->foreign('language_id')
                  ->references('id')
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
        Schema::dropIfExists('page_contents');
    }
}
