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
        Schema::create('type_logs', function (Blueprint $table) {
            $table->unsignedBigInteger('type_id')->unique();
            $table->timestamps();

            $table->foreign('type_id')
                  ->references('type_id')
                  ->on('types');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('type_logs');
    }
};
