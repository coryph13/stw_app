// src/app/[locale]/contacts/page.tsx
import ContactsHero from '@/components/features/contacts/ContactsHero';
import MainOfficeSection from '@/components/features/contacts/MainOfficeSection';
import ManagersSection from '@/components/features/contacts/ManagersSection';
import DistributorsSection from '@/components/features/contacts/DistributorsSection';
import ContactForm from '@/components/features/contacts/ContactForm';
import MapSection from '@/components/features/contacts/MapSection';
import WorkingHours from '@/components/features/contacts/WorkingHours';
import SocialLinks from '@/components/features/contacts/SocialLinks';

export default function ContactsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero секция */}
      <ContactsHero />
      
      {/* Главный офис */}
      <MainOfficeSection />
      
      {/* Менеджеры по регионам */}
      <ManagersSection />
      
      {/* Дистрибьюторы */}
      <DistributorsSection />
      
      {/* График работы */}
      <WorkingHours />
      
      {/* Форма обратной связи */}
      <ContactForm />
      
      {/* Карта */}
      <MapSection />
      
      {/* Социальные сети */}
      <SocialLinks />
    </div>
  );
}