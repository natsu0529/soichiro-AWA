import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Profile } from '@/components/sections/Profile';
import { FightRecord } from '@/components/sections/FightRecord';
import { SocialMedia } from '@/components/sections/SocialMedia';
import { ContactForm } from '@/components/sections/ContactForm';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-dark-900">
        <Hero />
        <Profile />
        <FightRecord />
        <SocialMedia />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
