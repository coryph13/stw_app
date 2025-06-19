// src/app/[locale]/verify-code/page.tsx
import VerifyCodeForm from '@/components/auth/VerifyCodeForm';

export default function VerifyCodePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background py-12 px-4">
      <div className="w-full max-w-md">
        <VerifyCodeForm />
      </div>
    </div>
  );
}