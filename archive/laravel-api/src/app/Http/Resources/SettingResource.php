<?php

namespace App\Http\Resources;

class SettingResource 
{

    public static function one($setting)
    {
        $setting['supported_langs'] = json_decode($setting['supported_langs'], true);
        $setting['social_links'] = json_decode($setting['social_links'], true);
        return $setting;
    }

    public static function all($settings)
    {
        foreach ($settings as $setting) {
            $setting['supported_langs'] = json_decode($setting['supported_langs'], true);
            $setting['social_links'] = json_decode($setting['social_links'], true);
        }
        return $settings;
    }
}
