<?php

namespace Database\Seeders;

use App\Models\Project\Project;
use App\Models\Project\ProjectContent;
use Illuminate\Database\Seeder;

class ProjectsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

/* `portfolio-313233372f`.`projects` */
        $projects = array(
            array('id' => 1, 'index' => 'portfolio', 'slug' => '/projects?p=portfolio', 'hero' => 'https://swayechateau.com/media/image/projects/Portfolio-HomePage.jpg', 'git_url' => null, 'demo_url' => 'https://swayechateau.com', 'open_source' => 0, 'tags' => '["laravel","vue","website"]', 'show'=> 1),
            array('id' => 2, 'index' => 'mercyless-reap', 'slug' => '/projects?p=mercyless-reap', 'hero' => 'https://cdn.vuetifyjs.com/images/cards/desert.jpg', 'git_url' => 'https://github.com/Ki-Tech/vs-social', 'demo_url' => 'https://mercylessreap.com', 'open_source' => 0, 'tags' => null, 'show'=> 1),
            array('id' => 3, 'index' => 'lechateaux', 'slug' => '/projects?p=lechateaux', 'hero' => 'https://cdn.vuetifyjs.com/images/cards/desert.jpg', 'git_url' => 'https://github.com/Ki-Tech/vs-social', 'demo_url' => 'https://lechateaux.com', 'open_source' => 0, 'tags' => null,'show'=> 1),
            array('id' => 4, 'index' => 'vs-social', 'slug' => '/projects?p=vs-social', 'hero' => 'https://cdn.vuetifyjs.com/images/cards/desert.jpg', 'git_url' => 'https://github.com/Ki-Tech/vs-social', 'demo_url' => null, 'open_source' => 0, 'tags' => null,'show'=> 1),
            array('id' => 5, 'index' => 'movie-list', 'slug' => '/projects?p=movie-list', 'hero' => 'https://swayechateau.com/media/image/projects/movie-list-search.jpg', 'git_url' => 'https://github.com/swayechateau/react-movie-list', 'demo_url' => 'https://ml.swayechateau.com', 'open_source' => 1, 'tags' => '["react-js", "website"]','show'=> 1),
            array('id' => 6, 'index' => 'lgbt-best', 'slug' => '/projects?p=lgbt-best', 'hero' => 'https://swayechateau.com/media/image/projects/lgbt.best-portal.png', 'git_url' => null, 'demo_url' => 'https://lgbt.best', 'open_source' => 0, 'tags' => '["laravel", "react-native-js", "vue-js", "react-js"]', 'show'=> 1),
            array('id' => 7, 'index' => 'file-server', 'slug' => '/projects?p=file-server', 'hero' => 'https://file.swayechateau.com/view/globaliyndTnSCK14onpASVq7n5?share_code=s5LUL0lAdDLS', 'git_url' => 'https://github.com/swayechateau/fileserver', 'demo_url' => 'https://file.swayechateau.com', 'open_source' => 1, 'tags' => '["laravel-lumen", "php"]','show'=> 1),
            array('id' => 8, 'index' => 'web-meta-grabber', 'slug' => '/projects?p=web-meta-grabber', 'hero' => 'https://file.swayechateau.com/view/globalMaJKf2UDzFdqba7hG96U6?share_code=s6LHjQlIsFHc', 'git_url' => 'https://github.com/swayechateau/web-meta-grabber', 'demo_url' => 'https://meta.swayechateau.com', 'open_source' => 1, 'tags' => '["laravel-lumen", "php"]', 'show'=> 1),
        );

        /* `portfolio-313233372f`.`project_contents` */
        $project_contents = array(
            array('project_id' => 1, 'language_id' => 1, 'name' => 'Porfolio', 'description' => 'You are currently looking at it :p', 'content' => '{"body":"You are currently looking at this project, made using Vue.js for the frontend, Laravel (PHP) for the backend and postgres for the database."}'),
            array('project_id' => 1, 'language_id' => 2, 'name' => 'Portefeuille', 'description' => 'Vous le regardez!', 'content' => null),
            array('project_id' => 1, 'language_id' => 3, 'name' => 'ポートフォリオ', 'description' => 'あなたはそれを見ています！', 'content' => null),

            array('project_id' => 2, 'language_id' => 1, 'name' => 'VS Social', 'description' => null, 'content' => null),
            array('project_id' => 2, 'language_id' => 2, 'name' => 'VS Sociale', 'description' => null, 'content' => null),
            array('project_id' => 2, 'language_id' => 3, 'name' => 'VS ソーシャル', 'description' => null, 'content' => null),

            array('project_id' => 3, 'language_id' => 1, 'name' => 'VS Social', 'description' => null, 'content' => null),
            array('project_id' => 3, 'language_id' => 2, 'name' => 'VS Sociale', 'description' => null, 'content' => null),
            array('project_id' => 3, 'language_id' => 3, 'name' => 'VS ソーシャル', 'description' => null, 'content' => null),

            array('project_id' => 4, 'language_id' => 1, 'name' => 'VS Social', 'description' => null, 'content' => null),
            array('project_id' => 4, 'language_id' => 2, 'name' => 'VS Sociale', 'description' => null, 'content' => null),
            array('project_id' => 4, 'language_id' => 3, 'name' => 'VS ソーシャル', 'description' => null, 'content' => null),

            array('project_id' => 5, 'language_id' => 1, 'name' => 'Movie List', 'description' => 'A simple react frontend for the OMDb API', 'content' => '{"body":"Built with React and vanilla css, I chose to complete this project after failing an interview. I saw it as a good oportunity to go over the basics and brush up on popular frameworks."}'),
            array('project_id' => 5, 'language_id' => 2, 'name' => 'Liste de Film', 'description' => null, 'content' => null),
            array('project_id' => 5, 'language_id' => 3, 'name' => '映画リスト', 'description' => null, 'content' => null),

            array('project_id' => 6, 'language_id' => 1, 'name' => 'Lgbt.best', 'description' => 'Business directory for Lgbt friendly organisations', 'content' => '{"body":"Lgbt.best require a bespoke headless cms, which was built in laravel. A client website and mobile app are still in development."}'),
            array('project_id' => 7, 'language_id' => 1, 'name' => 'File Server', 'description' => null, 'content' => null),
            array('project_id' => 8, 'language_id' => 1, 'name' => 'Web Meta Grabber', 'description' => null, 'content' => null),
        );

        app('db')->table('projects')->insert($projects);
        app('db')->table('project_contents')->insert($project_contents);
        
    }
}
