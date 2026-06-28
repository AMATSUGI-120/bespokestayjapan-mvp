import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import HeroSection from '@/components/HeroSection';
import ConditionBrowser from '@/components/ConditionBrowser';
import { FeaturedStays, type FeaturedHotelData } from '@/components/FeaturedStays';
import GuideTeaserSection from '@/components/GuideTeaserSection';
import CustomShortlistCTA from '@/components/CustomShortlistCTA';
import VerificationExplainer from '@/components/VerificationExplainer';

interface HomeClientProps {
  initialFeaturedHotels: FeaturedHotelData[];
}

export default function HomeClient({
  initialFeaturedHotels,
}: HomeClientProps) {
  return (
    <>
      <SiteNav />

      <main>
        <HeroSection />

        <div id="conditions">
          <ConditionBrowser />
        </div>

        <GuideTeaserSection />

        <div id="featured-stays">
          <FeaturedStays hotels={initialFeaturedHotels.length > 0 ? initialFeaturedHotels : undefined} />
        </div>

        <CustomShortlistCTA id="ask" />
        <VerificationExplainer id="how-it-works" />
      </main>

      <SiteFooter />
    </>
  );
}
