// types/global.d.ts

export {};

declare global {
  interface IPost {
    id: number;
    title: string;
    body: string;
  }
}
