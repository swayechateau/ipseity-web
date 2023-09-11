import { useEffect, useState } from 'react'
import { ITranslatedPost } from '../../interfaces';
import RecentPost from './RecentPost'
interface IPosts {
    posts: ITranslatedPost[],
    amount: number
}
function RecentPosts({ posts, amount = 4 }:IPosts) {
    console.log(posts)
    const rPosts:ITranslatedPost[] = [];
    const [recentPosts, setRecentPosts] = useState(rPosts)

    useEffect(() => {
        function getRecent() {
            let rPosts:ITranslatedPost[] = [];
            let i = 0;
            posts.map(post => {
                if(i >= amount) return 
                rPosts.push(post)
                i++
            })
            setRecentPosts(rPosts)
        }

        getRecent();

    }, [posts, amount])
    return (
        <div className="p-8">
            <h2 className="p-4 font-bold text-center capitalize lg:p-8">Recent Blog Posts</h2>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                {recentPosts.map(post => (
                    <div key={post.index}>
                       <RecentPost post={post} /> 
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RecentPosts