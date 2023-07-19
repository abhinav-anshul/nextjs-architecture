'use client';

import Boundary from '@/components/UI/boundary';
// import Button from '#/ui/button';
import React from 'react';

export default function Error({ error, reset }: any) {
  React.useEffect(() => {
    console.log('logging error:', error);
  }, [error]);

  return (
    <Boundary labels={['./error.tsx']} color="pink">
      <div className="space-y-4">
        <h2 className="text-lg font-bold">Error</h2>
        <p className="text-sm">{error?.message}</p>
        <div>
          <button onClick={() => reset()}>Try Again</button>
        </div>
      </div>
    </Boundary>
  );
}