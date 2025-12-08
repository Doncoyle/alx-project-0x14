import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to /movies when the component mounts
    router.push('/movies');
  }, [router]);

  return null; // This page will redirect immediately
}
