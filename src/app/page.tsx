import { env } from '@/config/environment';
import React from 'react';

export default function Home(): React.JSX.Element {
  return <p>{env.NEXT_PUBLIC_APP_NAME}</p>;
}
