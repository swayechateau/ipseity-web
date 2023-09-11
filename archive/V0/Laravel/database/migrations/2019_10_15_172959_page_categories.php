<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class PageCategories extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('page_categories', function (Blueprint $table) {
            $table->unsignedInteger('page_id');
            $table->unsignedInteger('category_id');

            $table->foreign('page_id')
                  ->references('id')
                  ->on('pages')->onDelete('cascade');
            $table->foreign('category_id')
                  ->references('id')
                  ->on('categories');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('page_categories');
    }
}
