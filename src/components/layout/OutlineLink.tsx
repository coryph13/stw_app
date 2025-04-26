import { Link } from '@/i18n/routing';

export default function OutlineLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <Link
      href={`${href}`}
      className="rounded-md border border-foreground px-4 py-2 font-medium text-foreground transition hover:border-accent hover:bg-muted hover:text-accent focus:outline-none"
    >
      {children}
    </Link>
  );
}
