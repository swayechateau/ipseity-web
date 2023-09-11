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
        Schema::create('logs', function (Blueprint $table) {
            $table->id('log_id');
            $table->unsignedBigInteger('type_id');
            $table->json('log_data');
            $table->boolean('log_emailed')->default(false);
            $table->string('log_emailed_to')->nullable();
            $table->softDeletes();
            $table->timestamps();

            $table->foreign('type_id')
                  ->references('type_id')
                  ->on('types')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('logs');
    }
};
