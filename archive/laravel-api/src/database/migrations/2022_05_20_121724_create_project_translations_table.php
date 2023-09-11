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
        Schema::create('project_translations', function (Blueprint $table) {
            $table->unsignedBigInteger('project_id');
            $table->unsignedBigInteger('language_id');
            $table->string('project_name');
            $table->string('project_title')->nullable();
            $table->string('project_description')->nullable();
            $table->json('project_content')->nullable();
            $table->softDeletes();
            $table->timestamps();

            $table->unique(['language_id', 'project_id'], 'language');
            $table->foreign('project_id')
                  ->references('project_id')
                  ->on('projects')->onDelete('cascade');
            $table->foreign('language_id')
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
        Schema::dropIfExists('project_translations');
    }
};
