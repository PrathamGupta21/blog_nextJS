import Link from 'next/link';
import '../login/login.css';

export default function Layout({ children }) {
  return (
    <div>
      <ul className='login-menu'>
        <li>
          <h4>About NavBar</h4>
        </li>
        <li>
          <Link href='/about'>About Main</Link>
        </li>
        <li>
          <Link href='/about/aboutstudent'>About Student</Link>
        </li>
        <li>
          <Link href='/about/aboutcollege'>About College</Link>
        </li>
      </ul>
      {children}
    </div>
  );
}
