import { Goals, Hero, Info, Tasks } from '@/blocks';
import { Footer } from '@/components';

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Info />
        <Goals />
        <Tasks />
      </main>
      <Footer />
    </>
  );
}
