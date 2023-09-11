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
        Schema::create('projects', function (Blueprint $table) {
            $table->id('project_id');
            $table->unsignedBigInteger('category_id')->nullable();
            $table->unsignedBigInteger('post_id')->nullable();
            $table->boolean('project_published')->default(false);
            $table->boolean('project_open_source')->default(false);
            $table->string('project_index')->unique();
            $table->string('project_hero')->nullable();
            $table->string('project_git_url')->unique()->nullable();
            $table->string('project_demo_url')->unique()->nullable();
            $table->timestamp('posted_at')->nullable();
            $table->softDeletes();
            $table->timestamps();

            $table->foreign('post_id')
                  ->references('post_id')
                  ->on('posts');

            $table->foreign('category_id')
                  ->references('category_id')
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
        Schema::dropIfExists('projects');
    }
};
