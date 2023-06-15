'use client';
import Link from 'next/link';
import './login.css';
import { usePathname } from 'next/navigation';

export default function Layout({ children }) {
  const pathName = usePathname();

  return (
    <div>
      {pathName === '/login/loginteacher' ? null : (
        <ul className='login-menu'>
          <li>
            <h4>Login NavBar</h4>
          </li>
          <li>
            <Link href='/login'>Login Main</Link>
          </li>
          <li>
            <Link href='/login/loginstudent'>Login Student</Link>
          </li>
          <li>
            <Link href='/login/loginteacher'>Login Teacher</Link>
          </li>
        </ul>
      )}
      {children}
    </div>
  );
}
