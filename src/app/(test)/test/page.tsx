import { SkeletonMap } from '@/components/common/skeleton';
import axios from '@/services/axios';

interface Post {
  userId: number | string;
  id: number | string;
  title: string;
  body: string;
}

export default async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 10000));

  return (
    <div>
      <SkeletonMap />
    </div>
  );
}
