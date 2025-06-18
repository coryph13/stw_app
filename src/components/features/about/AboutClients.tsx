// components/features/about/AboutClients.tsx
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const clients = [
  { id: 1, name: 'Client 1', logo: '/images/clients/client1.png' },
  { id: 2, name: 'Client 2', logo: '/images/clients/client2.png' },
  { id: 3, name: 'Client 3', logo: '/images/clients/client3.png' },
  { id: 4, name: 'Client 4', logo: '/images/clients/client4.png' },
  { id: 5, name: 'Client 5', logo: '/images/clients/client5.png' },
  { id: 6, name: 'Client 6', logo: '/images/clients/client6.png' },
  { id: 7, name: 'Client 7', logo: '/images/clients/client7.png' },
  { id: 8, name: 'Client 8', logo: '/images/clients/client8.png' },
];

export function AboutClients() {
  const t = useTranslations('about.clients');

  return (
    <section className="bg-muted py-16 md:py-20 lg:py-24">
      <div className="container">
        <h2 className="mb-12 text-center font-heading text-2xl font-bold text-foreground md:text-heading-2">
          {t('title')}
        </h2>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
          {clients.map((client) => (
            <div
              key={client.id}
              className="group flex items-center justify-center rounded-lg bg-background p-6 transition-all hover:shadow-lg"
            >
              <div className="relative h-16 w-full grayscale transition-all group-hover:grayscale-0">
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-text-muted">{t('description')}</p>
        </div>
      </div>
    </section>
  );
}