<?php
namespace App\Models\Auth;

use App\Models\Auth\AuthLocation;

use Illuminate\Database\Eloquent\Model;
class OauthAccessToken extends Model
{
    protected $fillable = [
        'name', 'scopes',
        'client_id', 'user_id',
        'revoked', 'expires_at'
    ];
    public function token()
    {
      return $this->hasOne(AuthLocation::class);
    }
}
