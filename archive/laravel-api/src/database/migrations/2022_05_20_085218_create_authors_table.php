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
        Schema::create('authors', function (Blueprint $table) {
            $table->id('author_id');
            // $table->unsignedBigInteger('user_id')->nullable();
            $table->string('author_name');
            $table->string('author_picture')->default('https://file.swayechateau.com/view/globaldE5pIsbK2ZN8XutuncgN12');
            $table->string('author_cv')->nullable();
            $table->softDeletes();
            $table->timestamps();

            /*
            $table->foreign('user_id')
                  ->references('user_id')
                  ->on('users');
            */
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('authors');
    }
};
