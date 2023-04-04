import React from "react";
import { Link } from "@inertiajs/inertia-react";

// Material style Home Dashboard
// move to Post Component use Inertia Link
function Home() {
    return (
        <div>
            <div className="flex justify-center">
                <div className="flex-col">
                    <div className="m-8">
                        <h1 className="text-4xl text-gray-800 font-bold">Home</h1>
                    </div>
                    <div className='text-center text-xl font-bold'>
                        <Link href={'/post'}>List</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
