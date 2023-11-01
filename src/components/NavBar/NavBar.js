import Link from 'next/link';
import { Stack } from '@mui/material';

const NavBar = () => {
  return (
    <>
      <Stack direction="row" spacing={1}>
      <Link href="/">
          Home
        </Link>
        <Link href="/search">
          Search
        </Link>
        <Link href="/about">
          About
        </Link>
      </Stack>
    </>
  );
};

export default NavBar;

