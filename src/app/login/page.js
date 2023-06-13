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
      <h1>Login Page</h1>
      <Link href='/'>Go to Home Page</Link>
      <br />
      <button onClick={() => navigate('loginstudent')}>
        Go to Login Student Page
      </button>
      <br />
      <button onClick={() => navigate('loginteacher')}>
        Go to Login Teacher Page
      </button>
    </div>
  );
};

export default LogIn;
