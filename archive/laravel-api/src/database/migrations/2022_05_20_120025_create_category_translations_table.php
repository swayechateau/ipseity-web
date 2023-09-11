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
        Schema::create('category_translations', function (Blueprint $table) {
            $table->unsignedBigInteger('category_id');
            $table->unsignedBigInteger('language_id');
            $table->string('category_text');
            $table->text('category_description')->nullable();
            $table->softDeletes();
            $table->timestamps();

            $table->unique(['language_id', 'category_id'], 'language');
            $table->foreign('category_id', 'category_id')
                ->references('category_id')
                ->on('categories')->onDelete('cascade');

            $table->foreign('language_id', 'language_id')
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
        Schema::dropIfExists('catergory_translations');
    }
};
