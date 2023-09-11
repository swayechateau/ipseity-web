<?php
/**
 * Run the migrations.
 *
 * @author "Swaye Chateau <swaye@lechateaux.com>"
 */

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;


class CreatePageCategoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create(
            'page_categories', 
            function (Blueprint $table) {
                $table->unsignedBigInteger('page_id');
                $table->string('category_id');

                $table->foreign('page_id')
                    ->references('id')
                    ->on('pages')->onDelete('cascade');
                $table->foreign('category_id', 'page_category_id')
                    ->references('id')
                    ->on('categories');
            }
        );
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
