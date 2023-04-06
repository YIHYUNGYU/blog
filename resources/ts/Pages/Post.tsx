import React from 'react';
import DefaultLayout from '@/Pages/Layout/DefaultLayout';
import { Link } from '@inertiajs/inertia-react';

interface Post {
  id: number;
  title: string;
  content: string;
}

interface PostListProps {
  posts: Post[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <div className="flex justify-center">
      <div className="flex-col max-w-xl">
        <div className="m-8">
          <h1 className="text-4xl text-gray-800 font-bold mb-4">Post List</h1>
        </div>
        <div>
          <ul className="divide-y divide-gray-200">
            {posts.map((post) => (
              <li key={post.id} className="text-center py-2">
                <Link
                  href={`/post/${post.id}`}
                  className="text-blue-600 hover:text-blue-800"
                >
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-center text-xl font-bold m-4">
          <Link href={'/'} className="text-blue-600 hover:text-blue-800">
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
PostList.layout = (page: React.ReactNode) => <DefaultLayout children={page} />;

export default PostList;
