<?php

namespace App\Models\Resume;

use App\Interfaces\Translator;
use App\Models\Site\Language;
use Illuminate\Database\Eloquent\Model;

class Resume extends Model implements Translator
{
  protected $fillable = [
    "name",
    "website",
    "social_links",
    "formats",
    "industry",
  ];
}
