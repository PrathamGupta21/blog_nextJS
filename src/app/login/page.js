'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const LogIn = () => {
  const router = useRouter();
  const navigate = (route) => {
    router.push('/login/' + route);
  };
  return (
    <div>
      <h1 className='heading'>Login Page</h1>
      <Link href='/'>Go to Home Page</Link>
    </div>
  );
};

export default LogIn;
