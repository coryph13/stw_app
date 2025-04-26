import { Link } from '@/i18n/routing';

export default function FilledLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <Link
      href={`${href}`}
      className="rounded-md border border-accent bg-accent px-4 py-2 font-medium text-background transition hover:bg-muted hover:text-accent focus:outline-none"
    >
      {children}
    </Link>
  );
}
