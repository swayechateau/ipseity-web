<?php

namespace App\Models\Resume;

use App\Interfaces\Translator;
use Illuminate\Database\Eloquent\Model;

class ResumeContent extends Model implements Translator
{
  protected $fillable = [
    "profession",
    "name",
    "content"
  ];
}
