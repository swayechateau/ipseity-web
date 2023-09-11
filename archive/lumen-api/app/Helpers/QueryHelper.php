<?php

namespace App\Helpers;

class QueryHelper
{
    public static function All($query)
    {
        return array_merge(QueryHelper::Pages($query), QueryHelper::Projects($query));
    }

    public static function Pages($query, $posts = null)
    {
        $results = [];

        $page_ids = app('db')->table('page_contents')
            ->where('name', 'like', $query)
            ->orWhere('description', 'like', '%' . $query . '%')
            ->orWhere('content', 'like', '%' . $query . '%')
            ->select('page_id')
            ->distinct()
            ->get();

        foreach ($page_ids as $id) {
            $page = app('db')->table('pages')->select(['id', 'hero', 'slug', 'post'])->find($id->page_id);
            if ($page) {
                $page->type = 1;
                if($page->post) {
                    $page->type = 2;
                }

                foreach (app('db')->table('languages')->get() as $lang) {
                    $page->translations[$lang->code] = app('db')->table('page_contents')->where('language_id', $lang->id)->where('page_id', $lang->id)->select(['name', 'description'])->get();
                }
                $results[] = $page;
            }
        }

        return $results;
    }


    public static function projects($query)
    {
        $results = [];

        $project_ids = app('db')->table('project_contents')
            ->where('name', 'like', $query)
            ->orWhere('description', 'like', '%' . $query . '%')
            ->orWhere('content', 'like', '%' . $query . '%')
            ->select('project_id')
            ->distinct()
            ->get();

        foreach ($project_ids as $id) {
            $project = app('db')->table('projects')->where('show', 0)->where('id', $id->project_id)->select(['id', 'hero', 'slug'])->first();
            if ($project) {
                $project->type = 3;
                foreach (app('db')->table('languages')->get() as $lang) {
                    $project->translations[$lang->code] = app('db')->table('project_contents')->where('language_id', $lang->id)->where('project_id', $lang->id)->select(['name', 'description'])->get();
                }
                $results[] = $project;
            }
        }

        return $results;
    }
}
