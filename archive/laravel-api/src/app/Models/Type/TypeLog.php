<?php

namespace App\Models\Type;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TypeLog extends Model
{
    use HasFactory;
    protected $fillable = [
        'type_id',
    ];
}
