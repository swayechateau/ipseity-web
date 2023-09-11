<?php

namespace App\Models\Auth;

use App\Models\Auth\oauthAccessToken;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class AuthLocation extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'ip', 'user_agent',
        'token', 'last_on',
    ];
    protected $casts = [
        'last_on' => 'datetime',
    ];

    public function token()
    {
      return $this->belongsTo(OauthAccessToken::class);
    }
}
