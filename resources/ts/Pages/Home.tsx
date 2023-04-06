import React from 'react';
import DefaultLayout from '@/Pages/Layout/DefaultLayout';
import { Link } from '@inertiajs/inertia-react';

function Home() {
  return (
    <div>
      <div className="flex justify-center">
        <div className="flex-col">
          <div className="m-8">
            <h1 className="text-4xl text-gray-800 font-bold">Home</h1>
          </div>
          <div className="text-center text-xl font-bold">
            <Link href={'/post'}>List</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

Home.layout = (page: React.ReactNode) => <DefaultLayout children={page} />;

export default Home;
