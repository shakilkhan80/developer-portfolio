import { Button } from '@mui/material';
import Image from 'next/image';

// app/not-found.js
export default function NotFound() {
    return (
        <div className="w-full grid grid-cols-2 items-center gap-4 bg-white py-5 px-3">
            <div>
                <Image
                    src="/notfound.jpg"
                    alt="step-1"
                    width={500}
                    height={500}
                    className=" w-full h-full object-cover"
                />
            </div>
            <div className="">
                <h1 className="md:text-3xl lg:text-6xl font-semibold">Oops!</h1>
                <h3 className="lg:text-3xl font-medium mt-4 mb-12">
                    We Couldn&apos;t find that page.
                </h3>
                <h3 className="lg:text-xl font-medium">Maybe you can find what you need here.</h3>
                <div className="flex items-center gap-3 mb-6">
                    <Button>Back to Home</Button>
                    <Button>About</Button>
                    <Button>Contact</Button>
                </div>
            </div>
        </div>
    );
}
