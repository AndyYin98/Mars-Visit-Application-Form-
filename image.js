// pages/index.js
// image optimization to enhance user's experience 

import Image from 'next/image';

function HomePage() {
    return (
        <div>
            <h1>Welcome to the Mars Visit Application</h1>
            <Image
                src="/me.png" 
                alt="Picture of the author"
                width={500}    // Width in pixels
                height={500}   // Height in pixels
            />
        </div>
    );
}

export default HomePage;
