<?php

namespace App\Models\Type;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Type extends Model
{
    use HasFactory;

    protected $fillable = [
        'type_text',
    ];

    protected static function createMultiple($types): void
    {
        foreach ($types as $type) {
            self::create($type);
        }
    }

    protected static function create($type): void
    {
        self::firstOrCreate(['type_text' => $type['type_text']]);
        $t = self::firstOrCreate(['type_text' => $type['type_text']]);
        if ($type['log_type']) {
            TypeLog::firstOrCreate([
                'type_id' => $t->type_id,
            ]);
        }
        if ($type['application_type']) {
            TypeApplication::firstOrCreate([
                'type_id' => $t->type_id,
            ]);
        }
    }

    public function logTypes()
    {
        return $this->hasMany(TypeLog::class);
    }

    public function applicationTypes()
    {
        return $this->hasMany(TypeApplication::class);
    }

}
