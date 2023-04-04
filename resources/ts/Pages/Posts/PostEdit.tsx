import React from 'react';
import {useForm} from "@inertiajs/inertia-react";

interface Post {
    post: {
        id: number;
        title: string;
        content: string;
    }
}

function Post({ post }: Post) {
    const { data, setData, patch, processing } = useForm({
        title: post.title,
        content: post.content,
    });

    function submitForm(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        patch('/post/' + post.id);
    }

    return (
        <div className="flex justify-center">
            <div className="flex-col">
                <div className="m-8">
                    <h3 className="text-center text-4xl font-bold">Edit Post</h3>
                </div>
                <div className="justify-center">
                    <form onSubmit={submitForm}>
                        <div className="flex flex-col">
                            <label htmlFor="title" className="text-xl font-bold text-gray-800">Title</label>
                            <input type="text"
                                   name="title"
                                   id="title"
                                   value={data.title}
                                   className="border-2 border-gray-300 p-2 rounded-lg"
                                   onChange={e => setData('title', e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="content" className="text-xl font-bold text-gray-800">Content</label>
                            <textarea name="content"
                                      id="content"
                                      value={data.content}
                                      className="border-2 border-gray-300 p-2 rounded-lg"
                                        onChange={e => setData('content', e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col">
                            <button type="submit"
                                    className="mt-2 bg-blue-500 text-white p-2 rounded-lg"
                                    disabled={processing}
                            >Update</button>
                        </div>
                    </form>
                </div>
                <div className="m-8">
                    <div className="flex flex-wrap justify-center">
                        <div className="p-4">
                            <a href={`/post/${post.id}`} className="text-xl font-bold text-gray-800 hover:text-gray-700">
                                Back
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;
