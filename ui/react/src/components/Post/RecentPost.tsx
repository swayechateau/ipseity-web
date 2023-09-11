import { ITranslatedPost } from '../../interfaces'

export interface IPostCard {
    post: ITranslatedPost
}
function RecentPost({ post }: IPostCard) {
    console.log(post)
    return (<div className="w-full h-40 text-left bg-cover rounded hover:shadow-lg md:h-36" style={{
        backgroundImage: `url(${post.hero})`
    }}>
        <a href={`${post.slug}`}>
            <div className="rounded flex items-center w-full h-full bg-[rgba(0,0,0,0.6)]">
                <div className="px-4 py-2">
                    <div className="mb-2 text-sm text-green-400 capitalize">
                        photography
                    </div>
                    <div className="mb-2">
                        <div className="text-2xl font-semibold leading-tight text-gray-100 hover:text-green-100">
                            {post.title}
                        </div>
                    </div>
                    <div className="flex text-sm text-gray-200">
                        <div className="pr-3 moment" data-time="2021-12-19 14:58:54">a month ago</div>
                        <div className="capitalize">
                            published by Swaye Chateau
                        </div>
                    </div>
                </div>
            </div>
        </a>
    </div>)
}

export default RecentPost