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
        Schema::create('featured_posts', function (Blueprint $table) {
            $table->unsignedBigInteger('post_id')->unique();
            $table->integer('post_order')->unique()->default(1);

            $table->foreign('post_id')
                  ->references('post_id')
                  ->on('posts');

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
        Schema::dropIfExists('featured_posts');
    }
};
