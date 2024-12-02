import { Suspense } from 'react';
import LoadingPage from '@/shared/ui/loading';

export default function VehiclesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Suspense fallback={<LoadingPage />}>{children}</Suspense>
    </div>
  );
}
