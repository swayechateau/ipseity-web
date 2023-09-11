<?php

namespace App\Models\Post;

use App\Interfaces\Translator;
use App\Models\Category\Category;
use App\Models\Language\Language;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model implements Translator
{
    use HasFactory;

    protected $fillable = [
        'post_id',
        //'parent_id',
        'category_id',
        'author_id',
        'post_published',
        'post_views',
        'post_prominent',
        'post_comments_allowed',
        'post_index',
        'post_hero',
    ];

    /**
     * The attributes that are mass assignable.
     *
     * @param $id int
     *
     * @return void
     */
    protected static function getIndex($id): string
    {
        $post = Post::findOrFail($id);
        return $post->index;
    }

    /**
     * The attributes that are mass assignable.
     *
     * @param $posts string[]
     *
     * @return void
     */
    protected static function createMultiple($posts): void
    {
        foreach ($posts as $post) {
            Post::create($post);
        }
    }

    /**
     * The attributes that are mass assignable.
     *
     * @param $post string[]
     *
     * @return void
     */
    protected static function create($post): void
    {

        $translations = $post['translations'];
        $categories = array_key_exists('tags', $post) ? $post['tags'] : null;
        unset($post['translations']);
        unset($post['tags']);
        $post['category_id'] = Category::idFromIndex($post['category_id']);
        self::firstOrCreate($post);
        $createdPost = self::firstOrCreate($post);
        foreach ($translations as $code => $translation) {
            self::createTranslation($createdPost->post_id, $code, $translation);
        }
        if ($categories) {
            foreach ($categories as $category) {
                self::assignCategory($createdPost->post_id, $category);
            }
        }
    }

    /**
     * The attributes that are mass assignable.
     *
     * @param $postId     int
     * @param $categoryId string
     *
     * @return void
     */
    protected static function assignCategory($postId, $category): void
    {
        $category = strtolower($category);
        Category::firstOrCreate(['category_index' => $category]);
        PostCategory::firstOrCreate(
            [
                "post_id" => $postId,
                "category_id" => Category::firstOrCreate(
                    ['category_index' => $category]
                )->category_id
            ]
        );
    }

    /**
     * The attributes that are mass assignable.
     *
     * @param $id           integer
     * @param $languageCode string
     * @param $translation  array
     *
     * @return void
     */
    protected static function createTranslation($id, $languageCode, $translation)
    {
        $translation['post_id'] = $id;
        $translation['language_id'] = Language::idFromCode($languageCode);
        $translation['post_content'] = json_encode($translation['post_content'], true);
        PostTranslation::firstOrcreate($translation);
    }

    /**
     * Translate one
     *
     * @param $id string
     *
     * @return void
     */
    public static function translateOne($id)
    {
        $post = self::where('post_id', $id)->orWhere('post_index', $id)->first();
        $post->category = $post->category_id;
        unset($post->category_id);
        $post->tags = $post->tags();
        $post->translations = $post->translations();
        return $post;
    }

    /**
     * Translate all.
     *
     * @return void
     */
    public static function translateAll()
    {
        $results = [];
        $models = self::orderBy('created_at', 'desc')->get();
        foreach ($models as $model) {
            $results[$model->post_index] = self::translateModel($model);
        }

        return $results;
    }

    public static function translateModel($model)
    {
        $langs = Language::all();
        $result = [
            'index' => $model->post_index,
            'published' => $model->post_published,
            'prominent' => $model->post_prominent,
            'category' => $model->category_id,
            'name' => $model->post_name,
            'hero' => $model->post_hero,
            'posted_at' => $model->posted_at,
            "translations" => []
        ];
        /*
        if (!empty($model->parent_id)) {
            $result['parent_index'] = self::getIndex(
                $model->parent_id
            );
        }
        */
        foreach ($langs as $lang) {
            $translated = PostTranslation::where('language_id', $lang->language_id)
                ->where('post_id', $model->post_id)
                ->first();
            unset($translated->id);
            unset($translated->language_id);
            unset($translated->post_id);
            unset($translated->created_at);
            unset($translated->deleted_at);
            if (!empty($translated) && !empty($translated->post_content)) {
                $readtime = new ReadTime();
                $readtime->setContent($translated->post_content);
                $translated->readtime = $readtime->minutes();
                $translated->post_content = json_decode($translated->post_content, true);
            }

            $result["translations"][$lang->language_code] = $translated;
        }
        return $result;
    }

    /**
     * The attributes that are mass assignable.
     *
     * @return Category
     */
    public function categories()
    {
        return $this->hasMany(Category::class);
    }

    /**
     * Undocumented function
     *
     * @return void
     */
    public function translations()
    {
        $results = [];
        $langs = Language::all();
        $results = [];
        foreach ($langs as $lang) {
            $translated = PostTranslation::where('language_id', $lang->id)
                ->where('post_id', $this->id)
                ->first();
            unset($translated->id);
            unset($translated->language_id);
            unset($translated->post_id);
            unset($translated->created_at);
            unset($translated->deleted_at);
            if (!empty($translated) && !empty($translated->content)) {
                $translated->content = json_decode($translated->content, true);
                $readtime = new ReadTime();
                $readtime->setContent($translated->content['body']);
                $translated->readtime = $readtime->minutes();
            }

            $results[$lang->code] = $translated;
        }

        return $results;
    }

    public function tags()
    {
        $tags = [];
        foreach (PostCategory::where('post_id', $this->id)
            ->select('category_id')->get() as $data) {
            array_push($tags, $data['category_id']);
        }
        return $tags;
    }
}
