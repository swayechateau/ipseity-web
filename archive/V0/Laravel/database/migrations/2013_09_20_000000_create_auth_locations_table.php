<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAuthLocationsTable extends Migration
{
    public function up()
    {
        Schema::create('auth_locations', function (Blueprint $table) {
            $table->increments('id');
            $table->string('token')->unique();
            $table->string('ip');
            $table->string('user_agent');
            $table->timestamp('last_on');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('auth_locations');
    }
}
