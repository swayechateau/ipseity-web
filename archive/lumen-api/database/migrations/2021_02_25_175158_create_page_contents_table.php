<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class createPageContentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('page_contents', function (Blueprint $table) {
            $table->unsignedBigInteger('page_id');
            $table->unsignedBigInteger('language_id');
            $table->string('name');
            $table->json('meta')->nullable();
            $table->string('title')->nullable();
            $table->string('sub_title')->nullable();
            $table->string('description')->nullable();
            $table->json('content')->nullable();
            $table->timestamp('created_at')->default(app('db')->raw('CURRENT_TIMESTAMP'));
            $table->timestamp('updated_at')->default(app('db')->raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));

            $table->unique(['language_id', 'page_id'], 'page');
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
