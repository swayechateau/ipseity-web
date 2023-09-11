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
        Schema::create('comments', function (Blueprint $table) {
            $table->id('comment_id');
            $table->unsignedBigInteger('post_id');
            $table->unsignedBigInteger('reply_id')->nullable();
            $table->unsignedBigInteger('author_id')->nullable();
            $table->string('comment_author_name')->nullable();
            $table->boolean('comment_approved')->default(false);
            $table->text('comment_content');

            $table->foreign('post_id')->references('post_id')->on('posts');
            $table->foreign('author_id')->references('author_id')->on('authors');
            $table->foreign('reply_id')->references('comment_id')->on('comments');

            $table->softDeletes();
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
        Schema::dropIfExists('comments');
    }
};
