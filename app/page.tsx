import HeroCarousel from '@/src/components/home/HeroCarousel';
import NubiSection from '@/src/components/home/NubiSection';
import CategoriesSection from '@/src/components/home/CategoriesSection';
import CTASection from '@/src/components/home/CTASection';

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <NubiSection />
      <CategoriesSection />
      <CTASection />
    </>
  );
}
