'use client';

export default function IconBtn({
  children,
  handler,
}: {
  children: React.ReactNode;
  handler: {
    (): void;
  };
}) {
  return <button onClick={handler}>{children}</button>;
}
