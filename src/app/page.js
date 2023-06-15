'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const navigate = (route) => {
    router.push(route);
  };
  return (
    <main>
      <h1>Dynamic Routing</h1>
      <Link href='./login'>Go to Login Page</Link>
      <br />
      <Link href='./about'>Go to About Page</Link>
      <br />
      <button onClick={() => navigate('/students')}>
        Go to Students List Page
      </button>
    </main>
  );
}
