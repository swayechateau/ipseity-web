<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProjectContentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('project_contents', function (Blueprint $table) {
            $table->unsignedBigInteger('project_id');
            $table->unsignedBigInteger('language_id');
            $table->string('name');
            $table->string('description')->nullable();
            $table->json('content')->nullable();
            $table->timestamp('created_at')->default(app('db')->raw('CURRENT_TIMESTAMP'));
            $table->timestamp('updated_at')->default(app('db')->raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
            
            $table->unique(['project_id', 'language_id'],'project');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('project_contents');
    }
}
