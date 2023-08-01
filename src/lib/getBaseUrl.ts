import { cache } from 'react';

export const getBaseUrl = cache(() =>
  process.env.MSAFAR_URL
    ? `https://msafar.ir`
    : `http://localhost:${process.env.PORT ?? 3000}`
);
