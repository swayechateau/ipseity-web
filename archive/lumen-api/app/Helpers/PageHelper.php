<?php
namespace App\Helpers;

use App\Models\Site\Language;

class PageHelper
{

    // page translations
    public static function getPage($id, $post = false)
    {
        $key = 'index';
        if (is_numeric($id)) {
            $key = 'id';
        }

        if ($post == null) {
            return app('db')->table('pages')->where($key, $id)->first();
        }

        return app('db')->table('pages')->where($key, $id)->where('post', $post)->first();
    }

    public static function fetchPage($id, bool $post = false)
    {
        try {
            $page = PageHelper::getPage($id, $post);
            return PageHelper::translatePage($page->id);
        } catch (\Exception $e) {
            abort(404);
        }

    }

    public static function fetchPages(bool $post = false)
    {
        $pages = array();
        foreach (app('db')->table('pages')->where('post', $post)->get()->sortByDesc('posted_at') as $page) {
            $pages[$page->index] = PageHelper::translatePage($page->id);
        }
        return $pages;
    }

    public static function translatePage($id)
    {
        $langs = Language::all();
        $page = PageHelper::getPage($id, null);

        $translations = array();
        foreach ($langs as $lang) {
            $content = app('db')->table('page_contents')->where('language_id', $lang->id)->where('page_id', $page->id)->first();

            if ($content) {
                $translations[$lang->code] = [
                    'lang' => $lang->name,
                    'name' => $content->name,
                    'title' => $content->title,
                    'sub_title' => $content->sub_title,
                    'description' => $content->description,
                    'type' => app('db')->table('type_translations')->where('type_id', $page->type_id)->where('language_id', $lang->id)->value('type_translation'),
                    'content' => json_decode($content->content),
                    'meta' => json_decode($content->meta),
                    'content_updated_at' => $content->updated_at,
                    'content_created_at' => $content->created_at,
                ];
            }
        }
        $page->translations = $translations;
        $page->tags = json_decode($page->tags);
        if ($page->post) {
            $page->type = 2;
        } else {
            $page->type = 1;
        }
        return $page;
    }

    public static function createPage(array $data, bool $post = false)
    {
        $data['post'] = $post;
        $type = $post ? 'post' : 'page';
        $code = 500;
        $message = [
            'error' => [
                'code' => 500,
                'message' => 'error missing index and slug!',
            ],
        ];

        if (array_key_exists('index', $data) && array_key_exists('slug', $data)) {
            if ($post) {
                $data['slug'] = str_contains($data['slug'], '/blog/posts/') ? $data['slug'] : '/blog/posts/' . $data['slug'];
            } else {
                $data['slug'] = $data['slug'][0] === '/' ? $data['slug'] : "/" . $data['slug'];
            }
            $data['slug'] = str_replace(' ', '-', $data['slug']);
            if (app('db')->table('pages')->where('index', $data['index'])->where('post', $post)->first() || Page::where('slug', $data['slug'])->first()) {
                $message = [
                    'error' => [
                        'code' => 500,
                        'message' => $type . ' already exists!',
                    ],
                ];
            }
            $page = Page::create($data);
            $settings = Setting::find(1);
            $language = Language::where('abr_2', $settings->default_lang);
            PageContent::create(['language_id' => $language->id, 'page_id' => $page->id, 'name' => $page->index]);
            $code = 201;
            $message = Translator::getPage($page->id, $post);
        }
        return response()->json($message, $code);

    }

    public static function updatePage(int $id, array $data, bool $post = false)
    {
        $data['post'] = $post;
        $type = $post ? 'post' : 'page';
        $code = 500;
        $message = [
            'error' => [
                'code' => 500,
                'message' => 'error missing index and slug!',
            ],
        ];

        if (array_key_exists('index', $data) && array_key_exists('slug', $data)) {
            if ($post) {
                $data['slug'] = str_contains($data['slug'], '/blog/posts/') ? $data['slug'] : '/blog/posts/' . $data['slug'];
            } else {
                $data['slug'] = $data['slug'][0] === '/' ? $data['slug'] : "/" . $data['slug'];
            }
            $data['slug'] = str_replace(' ', '-', $data['slug']);
            if (app('db')->table('pages')->where('index', $data['index'])->where('post', $post)->first() || Page::where('slug', $data['slug'])->first()) {
                $message = [
                    'error' => [
                        'code' => 500,
                        'message' => $type . ' already exists!',
                    ],
                ];
            }
            $page = Page::create($data);
            $settings = Setting::find(1);
            $language = Language::where('abr_2', $settings->default_lang);
            PageContent::create(['language_id' => $language->id, 'page_id' => $page->id, 'name' => $page->index]);
            $code = 201;
            $message = Translator::getPage($page->id, $post);
        }
        return response()->json($message, $code);

    }
}
