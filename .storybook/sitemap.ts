// import { MetadataRoute } from 'next'

// type Sitemap = Array<{
//     url: string
//     lastModified?: string | Date
// }>

// export default function sitemap(): MetadataRoute.Sitemap {
//   return [
//     {
//       url: 'https://acme.com',
//       lastModified: new Date(),
//     },
//     {
//       url: 'https://acme.com/about',
//       lastModified: new Date(),
//     },
//     {
//       url: 'https://acme.com/blog',
//       lastModified: new Date(),
//     },
//   ]
// }

// import { getCollections, getPages, getProducts } from 'lib/shopify';
// import { MetadataRoute } from 'next';

// const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
//   ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
//   : 'http://localhost:3000';

// export default async function sitemap(): Promise<Promise<Promise<MetadataRoute.Sitemap>>> {
//   const routesMap = [''].map((route) => ({
//     url: `${baseUrl}${route}`,
//     lastModified: new Date().toISOString()
//   }));

//   const collectionsPromise = getCollections().then((collections) =>
//     collections.map((collection) => ({
//       url: `${baseUrl}${collection.path}`,
//       lastModified: collection.updatedAt
//     }))
//   );

//   const productsPromise = getProducts({}).then((products) =>
//     products.map((product) => ({
//       url: `${baseUrl}/product/${product.handle}`,
//       lastModified: product.updatedAt
//     }))
//   );

//   const pagesPromise = getPages().then((pages) =>
//     pages.map((page) => ({
//       url: `${baseUrl}/${page.handle}`,
//       lastModified: page.updatedAt
//     }))
//   );

//   const fetchedRoutes = (
//     await Promise.all([collectionsPromise, productsPromise, pagesPromise])
//   ).flat();

//   return [...routesMap, ...fetchedRoutes];
// }
