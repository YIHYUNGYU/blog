import React from 'react';

interface Post {
    post: {
        id: number;
        title: string;
        content: string;
    }
}

function PostShow({ post }: Post) {
    return (
        <div className="flex justify-center">
            <div className="flex-col">
                <div className="m-8">
                    <h3 className="text-center text-4xl font-bold">{post.title}</h3>
                </div>
                <div className="justify-center">
                    <p className="text-center text-2xl">{post.content}</p>
                </div>
                <div className="m-8">
                    <div className="flex flex-wrap justify-center">
                        <div className="p-4">
                            <a href={`/post/${post.id}/edit`} className="text-xl font-bold text-gray-800 hover:text-gray-700">
                                Edit
                            </a>
                        </div>
                        <div className="p-4">
                            <a href="#" className="text-xl font-bold text-gray-800 hover:text-gray-700">
                                Delete
                            </a>
                        </div>
                        <div className="p-4">
                            <a href="/post" className="text-xl font-bold text-gray-800 hover:text-gray-700">
                                Back
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostShow;
