'use client';

import Loader from "@/components/layout/Loader";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <Loader />
    </div>
  );
}
