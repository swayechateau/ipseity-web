<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class SiteWordsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $site_words = array(
            array('id' => 'categories'),
            array('id' => 'comments'),
            array('id' => 'commentsDisabled'),
            array('id' => 'contact'),
            array('id' => 'created'),
            array('id' => 'dashboard'),
            array('id' => 'disabled'),
            array('id' => 'enterEmail'),
            array('id' => 'enterPassword'),
            array('id' => 'files'),
            array('id' => 'goToTop'),
            array('id' => 'next'),
            array('id' => 'noResultsFound'),
            array('id' => 'of'),
            array('id' => 'page'),
            array('id' => 'pages'),
            array('id' => 'post'),
            array('id' => 'posts'),
            array('id' => 'previous'),
            array('id' => 'project'),
            array('id' => 'projects'),
            array('id' => 'readMore'),
            array('id' => 'recent'),
            array('id' => 'recentPosts'),
            array('id' => 'results'),
            array('id' => 'resultsFor'),
            array('id' => 'search'),
            array('id' => 'searchArticles'),
            array('id' => 'searchBlog'),
            array('id' => 'searchSite'),
            array('id' => 'settings'),
            array('id' => 'subscribe'),
            array('id' => 'tags'),
            array('id' => 'translations'),
            array('id' => 'updated'),
            array('id' => 'users'),
            array('id' => 'viewAllPosts'),
            array('id' => 'viewCode'),
            array('id' => 'viewDemo'),
        );

        $site_word_translations = array(
            // read more
            array('site_word_id' => 'readMore', 'language_id' => 1, 'site_word_translation' => 'Read More'),
            array('site_word_id' => 'readMore', 'language_id' => 2, 'site_word_translation' => 'LIRE LA SUITE'),
            array('site_word_id' => 'readMore', 'language_id' => 3, 'site_word_translation' => '続きを読む'),
            // comments
            array('site_word_id' => 'comments', 'language_id' => 1, 'site_word_translation' => 'Comments'),
            array('site_word_id' => 'comments', 'language_id' => 2, 'site_word_translation' => 'Commentaires'),
            array('site_word_id' => 'comments', 'language_id' => 3, 'site_word_translation' => '注釈'),
            // created
            array('site_word_id' => 'created', 'language_id' => 1, 'site_word_translation' => 'Created'),
            array('site_word_id' => 'created', 'language_id' => 2, 'site_word_translation' => 'établi'),
            array('site_word_id' => 'created', 'language_id' => 3, 'site_word_translation' => '作成した'),
            // updated
            array('site_word_id' => 'updated', 'language_id' => 1, 'site_word_translation' => 'Updated'),
            array('site_word_id' => 'updated', 'language_id' => 2, 'site_word_translation' => 'mis à jour'),
            array('site_word_id' => 'updated', 'language_id' => 3, 'site_word_translation' => '更新しました'),
            // page
            array('site_word_id' => 'page', 'language_id' => 1, 'site_word_translation' => 'Page'),
            array('site_word_id' => 'page', 'language_id' => 2, 'site_word_translation' => 'Page'),
            array('site_word_id' => 'page', 'language_id' => 3, 'site_word_translation' => 'ページ'),
            // pages
            array('site_word_id' => 'pages', 'language_id' => 1, 'site_word_translation' => 'Pages'),
            // post
            array('site_word_id' => 'post', 'language_id' => 1, 'site_word_translation' => 'Post'),
            // posts
            array('site_word_id' => 'posts', 'language_id' => 1, 'site_word_translation' => 'Posts'),
            // project
            array('site_word_id' => 'project', 'language_id' => 1, 'site_word_translation' => 'Project'),
            // projects
            array('site_word_id' => 'projects', 'language_id' => 1, 'site_word_translation' => 'Projects'),
            // of
            array('site_word_id' => 'of', 'language_id' => 1, 'site_word_translation' => 'of'),
            array('site_word_id' => 'of', 'language_id' => 2, 'site_word_translation' => 'de'),
            array('site_word_id' => 'of', 'language_id' => 3, 'site_word_translation' => 'の'),
            // recent posts
            array('site_word_id' => 'recentPosts', 'language_id' => 1, 'site_word_translation' => 'recent posts'),
            array('site_word_id' => 'recentPosts', 'language_id' => 2, 'site_word_translation' => 'articles récents'),
            array('site_word_id' => 'recentPosts', 'language_id' => 3, 'site_word_translation' => '最近の投稿'),
            // search blog
            array('site_word_id' => 'searchBlog', 'language_id' => 1, 'site_word_translation' => 'search blog'),
            array('site_word_id' => 'searchBlog', 'language_id' => 2, 'site_word_translation' => 'blog de recherche'),
            array('site_word_id' => 'searchBlog', 'language_id' => 3, 'site_word_translation' => '検索ブログ'),
            // comments disabled
            array('site_word_id' => 'commentsDisabled', 'language_id' => 1, 'site_word_translation' => 'comments disabled'),
            array('site_word_id' => 'commentsDisabled', 'language_id' => 2, 'site_word_translation' => 'commentaires désactivés'),
            array('site_word_id' => 'commentsDisabled', 'language_id' => 3, 'site_word_translation' => 'コメントは無効です'),
            // results for
            array('site_word_id' => 'resultsFor', 'language_id' => 1, 'site_word_translation' => 'results for'),
            array('site_word_id' => 'resultsFor', 'language_id' => 2, 'site_word_translation' => 'Résultats pour'),
            array('site_word_id' => 'resultsFor', 'language_id' => 3, 'site_word_translation' => 'の結果'),
            // no results found
            array('site_word_id' => 'noResultsFound', 'language_id' => 1, 'site_word_translation' => 'No Results Found!'),
            array('site_word_id' => 'noResultsFound', 'language_id' => 2, 'site_word_translation' => 'Aucun résultat trouvé!'),
            array('site_word_id' => 'noResultsFound', 'language_id' => 3, 'site_word_translation' => '結果が見つかりません！'),
            // subscribe
            array('site_word_id' => 'subscribe', 'language_id' => 2, 'site_word_translation' => 'Subscribe'),
            // categories
            array('site_word_id' => 'categories ', 'language_id' => 1, 'site_word_translation' => 'Categories'),
            array('site_word_id' => 'categories ', 'language_id' => 2, 'site_word_translation' => 'Catégories'),
            array('site_word_id' => 'categories ', 'language_id' => 3, 'site_word_translation' => 'カテゴリー'),
            // go to top
            array('site_word_id' => 'goToTop', 'language_id' => 1, 'site_word_translation' => 'Go To Top'),
            array('site_word_id' => 'goToTop', 'language_id' => 2, 'site_word_translation' => 'Aller en Haut'),
            array('site_word_id' => 'goToTop', 'language_id' => 3, 'site_word_translation' => 'トップに戻る'),
            // view all posts
            array('site_word_id' => 'viewAllPosts', 'language_id' => 1, 'site_word_translation' => 'View All Posts'),
            array('site_word_id' => 'viewAllPosts', 'language_id' => 2, 'site_word_translation' => 'Voir tous les articles'),
            array('site_word_id' => 'viewAllPosts', 'language_id' => 3, 'site_word_translation' => 'すべての投稿を表示'),
            // dashboard
            array('site_word_id' => 'dashboard', 'language_id' => 1, 'site_word_translation' => 'Dashboard'),
            // users
            array('site_word_id' => 'users', 'language_id' => 1, 'site_word_translation' => 'Users'),
            // files
            array('site_word_id' => 'files', 'language_id' => 1, 'site_word_translation' => 'Files'),
            // settings
            array('site_word_id' => 'settings', 'language_id' => 1, 'site_word_translation' => 'Settings'),
            // translations
            array('site_word_id' => 'translations', 'language_id' => 1, 'site_word_translation' => 'Translations'),
        );

        app('db')->table('site_words')->insert($site_words);
        app('db')->table('site_word_translations')->insert($site_word_translations);

    }
}
