import { Typography } from '@material-ui/core';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { Store } from '../utils/Store';

export default function Shipping() {
  const router = useRouter();
  const { state } = useContext(Store);
  const { userInfo } = state;
  if (!userInfo) {
    router.push('/login?redirect=/shipping');
  }
  return (
    <div>
      <Typography>Shipping</Typography>
    </div>
  );
}
