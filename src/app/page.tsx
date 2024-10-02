"use client";
import { Button, Typography, Container } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';

const Home: React.FC = () => {
  return (
    <Container>
      <Link href="/" passHref>
        <Image src="/logo.png" alt="Logo" width={50} height={50} style={{ position: 'absolute', top: '10px', left: '10px' }} />
      </Link>
      <Typography variant="h4" component="h1" gutterBottom>
        Material UI Button Example
      </Typography>
      <Button variant="contained" color="primary" onClick={() => alert('Button clicked!')}>
        Click Me
      </Button>
    </Container>
  );
};

export default Home;