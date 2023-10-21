import Link from 'next/link';

const NavBar = () => {
  return (
    <header>
      <nav>
        <Link href="/">
          Home
        </Link>
        <Link href="/search">
          Search
        </Link>
        <Link href="/about">
          About
        </Link>
      </nav>
    </header>
  );
};

export default NavBar;

