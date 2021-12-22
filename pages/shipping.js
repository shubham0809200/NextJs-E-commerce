import { Typography } from '@material-ui/core';
import { useRouter } from 'next/router';
import React from 'react';

export default function Shipping() {
  const router = useRouter();
  router.push('/login');
  return (
    <div>
      <Typography>Shipping</Typography>
    </div>
  );
}
