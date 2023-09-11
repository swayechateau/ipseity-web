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
        Schema::create('posts', function (Blueprint $table) {
            $table->id('post_id');
            //$table->unsignedBigInteger('parent_id')->nullable();
            $table->unsignedBigInteger('category_id')->nullable();
            $table->unsignedBigInteger('type_id')->default(1);
            $table->unsignedBigInteger('author_id');
            $table->boolean('post_published')->default(false);
            $table->integer('post_views')->default(0);
            $table->boolean('post_prominent')->default(false);
            $table->boolean('post_comments_allowed')->default(false);
            $table->string('post_index')->unique();
            $table->string('post_hero')->nullable();
            $table->timestamp('posted_at')->nullable();
            $table->softDeletes();
            $table->timestamps();

            $table->foreign('category_id')
                  ->references('category_id')
                  ->on('categories');

            $table->foreign('author_id')
                    ->references('author_id')
                    ->on('authors');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('posts');
    }
};
