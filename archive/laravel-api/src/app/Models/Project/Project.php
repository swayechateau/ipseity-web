<?php

namespace App\Models\Project;

use App\Interfaces\Translator;
use App\Models\Category\Category;
use App\Models\Language\Language;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model implements Translator
{
    use HasFactory;
    protected $admin = false;
    protected $fillable = [
        "category_id",
        "post_id",
        "project_published",
        "project_open_source",
        "project_index",
        "project_hero",
        "project_git_url",
        "project_demo_url",
        // "case_study_url",
        "posted_at"
    ];


    protected static function unpublished()
    {
        return self::where('project_published', false)->get();
    }


    protected static function published()
    {
        return self::where('project_published', true)->get();
    }

    protected static function translate(Collection $models, Language $langs = null)
    {
        $results = [];
        if (empty($lang)) {
            $langs = Language::all();
        }
        foreach ($models as $model) {
            $tags = [];
            foreach (ProjectCategory::where('project_id', $model->project_id)
                ->select('category_id')->get() as $data) {
                array_push($tags, $data['category_id']);
            }

            $results[$model->index] = [
                "index" => $model->project_index,
                "post_id" => $model->post_id,
                "published" => $model->project_published,
                "open_source" => $model->project_open_source,
                "hero" => $model->project_hero,
                "git_url" => $model->project_git_url,
                "demo_url" => $model->project_demo_url,
                // "case_study_url" => $model->case_study_url,
                "posted_at" => $model->posted_at,
                "translations" => [],
                "tags" => $tags
            ];
            foreach ($langs as $lang) {
                $translated = ProjectTranslation::where('language_id', $lang->language_id)
                    ->where('project_id', $model->project_id)
                    ->first();
                unset($translated->language_id);
                unset($translated->project_id);
                unset($translated->created_at);
                unset($translated->deleted_at);
                if (!empty($translated) && !empty($translated->project_content)) {
                    $translated->project_content = json_decode($translated->project_content, true);
                }
                $results[$model->project_index]["translations"][$lang->language_code] = $translated;
            }
        }
        return $results;
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
            self::create($post);
        }
    }

    /**
     * The attributes that are mass assignable.
     *
     * @param $project string[]
     *
     * @return void
     */
    protected static function create($project): void
    {

        $translations = $project['translations'];
        $categories = array_key_exists('tags', $project) ? $project['tags'] : null;
        unset($project['translations']);
        unset($project['tags']);
        self::firstOrCreate($project);
        $createdProject = self::firstOrCreate($project);
        foreach ($translations as $code => $translation) {
            self::createTranslation(
                $createdProject->project_id,
                $code,
                $translation
            );
        }

        if ($categories) {
            foreach ($categories as $category) {
                self::assignCategory(
                    $createdProject->project_id, $category
                );
            }
        }
    }

    /**
     * The attributes that are mass assignable.
     *
     * @param $projectId  int
     * @param $categoryId string
     *
     * @return void
     */
    protected static function assignCategory($projectId, $category): void
    {
        $category = strtolower($category);
        Category::firstOrCreate(['category_index' => $category]);
        ProjectCategory::firstOrCreate(
            [
                "project_id" => $projectId,
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
    protected static function createTranslation($id, $code, $translation)
    {
        $translation['project_id'] = $id;
        $translation['language_id'] = Language::idFromCode($code);
        if (array_key_exists('project_content', $translation)) {
            $translation['project_content'] = json_encode($translation['project_content'], true);
        }

        ProjectTranslation::firstOrcreate($translation);
    }

    /**
     * Translate one
     *
     * @param $model array
     *
     * @return void
     */
    public static function translateOne($model)
    {
        $results = [];
        $langs = Language::all();

        $results[$model->index] = [
            "published" => $model->published,
            "open_source" => $model->open_source,
            "hero" => $model->hero,
            "slug" => $model->slug,
            "git_url" => $model->git_url,
            "demo_url" => $model->demo_url,
            "posted_at" => $model->posted_at,
            "translations" => []
        ];
        foreach ($langs as $lang) {
            $translated = ProjectTranslation::where('language_id', $lang->id)
                ->where('project_id', $model->id)
                ->first();
            unset($translated->id);
            unset($translated->language_id);
            unset($translated->project_id);
            unset($translated->created_at);
            unset($translated->deleted_at);
            if (!empty($translated) && !empty($translated->content)) {
                $translated->content = json_decode($translated->content, true);
            }
            $results[$model->index]["translations"][$lang->code] = $translated;
        }

        return $results;
    }

    /**
     * Translate all.
     *
     * @return void
     */
    public static function translateAll()
    {
        $results = [];
        $langs = Language::all();
        $models = self::all();
        foreach ($models as $model) {
            // array_push($results, Project::translateAll($model));
            $tags = [];
            foreach (ProjectCategory::where('project_id', $model->project_id)
                ->select('category_id')->get() as $data) {
                array_push($tags, $data['category_index']);
            }

            $results[$model->project_index] = [
                "published" => $model->project_published,
                "open_source" => $model->project_open_source,
                "hero" => $model->project_hero,
                "git_url" => $model->project_git_url,
                "demo_url" => $model->project_demo_url,
                "posted_at" => $model->posted_at,
                "translations" => [],
                "tags" => $tags
            ];
            foreach ($langs as $lang) {
                $translated = ProjectTranslation::where('language_id', $lang->language_id)
                    ->where('project_id', $model->project_id)
                    ->first();
                unset($translated->language_id);
                unset($translated->project_id);
                unset($translated->created_at);
                unset($translated->deleted_at);
                if (!empty($translated) && !empty($translated->project_content)) {
                    $translated->project_content = json_decode($translated->project_content, true);
                }
                $results[$model->project_index]["translations"][$lang->language_code] = $translated;
            }
        }
        return $results;
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
}
