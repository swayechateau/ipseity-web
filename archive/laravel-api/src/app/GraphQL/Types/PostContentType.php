<?php

// app/graphql/types/PostType 

namespace App\GraphQL\Types;

use App\Models\Post\Post;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Facades\GraphQL;
use Rebing\GraphQL\Support\Type as GraphQLType;

class PostType extends GraphQLType
{
    protected $attributes = [
        'name' => 'Post',
        'description' => 'Collection of posts',
        'model' => Post::class
    ];

    public function fields(): array
    {
        return [
            'id' => [
                'type' => Type::nonNull(Type::int()),
                'description' => 'ID of post'
            ],
            'published' => [
                'type' => Type::nonNull(Type::boolval()),
                'description' => 'If Post is Published'
            ],
            'featured' => [
                'type' => Type::nonNull(Type::boolval()),
                'description' => 'If Post is featured'
            ],
            'prominent' => [
                'type' => Type::nonNull(Type::boolval()),
                'description' => 'If Post is prominent'
            ],
            'index' => [
                'type' => Type::nonNull(Type::string()),
                'description' => 'Index of the post'
            ],
            'title' => [
                'type' => Type::nonNull(Type::string()),
                'description' => 'Title of the quest'
            ],
            'hero' => [
                'type' => Type::nonNull(Type::string()),
                'description' => 'Hero of the post'
            ],
            'slug' => [
                'type' => Type::nonNull(Type::string()),
                'description' => 'Slug of the post'
            ],
            'category' => [
                'type' => GraphQL::type('Category'),
                'description' => 'The category of the post'
            ],
            'parent' => [
                'type' => GraphQL::type('Post'),
                'description' => 'Parent post'
            ],
            //$table->timestamp('posted_at')->nullable();
        ];
    }
}