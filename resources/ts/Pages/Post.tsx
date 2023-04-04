import React from 'react';
import { Link } from '@inertiajs/inertia-react';

interface Post {
    id: number;
    title: string;
    body: string;
}

interface PostListProps {
    posts: Post[];
}

function Post({ posts }: PostListProps) {
    return (
        <div className="flex justify-center">
            <div className="flex-col">
                <div className="m-8">
                    <h1 className="text-4xl text-gray-800 font-bold">Post List</h1>
                </div>
                <div>
                    <ul>
                        {posts.map((post) => (
                            <li className="text-center">
                                <Link href={`/post/${post.id}`}>{post.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='text-center text-xl font-bold m-4'>
                    <Link href={'/'}>Home</Link>
                </div>
            </div>
        </div>
    );
}

export default Post;
