//prefetching method to enhance navigation speed
import Link from 'next/link';

function HomePage() {
    return (
        <div>
            <Link href="/about" prefetch>  //prefetch function to improve navigation speed 
                <a>About Us</a>
            </Link>
        </div>
    );
}

export default HomePage;
