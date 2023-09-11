<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pages', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('parent_id')->nullable();
            $table->boolean('published')->default(false);
            $table->string('index')->unique();
            $table->string('hero')->nullable();
            $table->string('slug')->unique();
            $table->timestamp('posted_at')->nullable();
            $table->softDeletes();
            $table->timestamps();

            $table->foreign('parent_id')
                  ->references('id')
                  ->on('pages')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pages');
    }
}
