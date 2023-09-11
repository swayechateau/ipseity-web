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
            $table->boolean('published')->default(0);
            $table->boolean('post')->default(1);
            $table->boolean('featured')->default(0);
            $table->boolean('prominent')->default(0);
            $table->boolean('aside')->default(0);
            $table->boolean('allow_comments')->default(0);
            $table->unsignedBigInteger('type_id')->nullable();
            $table->string('index');
            $table->string('hero')->nullable();
            $table->string('slug')->unique();
            $table->json('tags')->nullable();
            $table->timestamp('posted_at')->nullable();
            
            $table->timestamp('created_at')->default(app('db')->raw('CURRENT_TIMESTAMP'));
            $table->timestamp('updated_at')->default(app('db')->raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));

            $table->unique(['index', 'post'], 'index');
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
