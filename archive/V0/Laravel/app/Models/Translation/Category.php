<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $fillable = [
        'name', 'blog','description',
    ];

    public function pages()
    {
        return $this->hasMany('App\Pages');
    }
}
