import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import HolidayPackages from "./components/packages/HolidayPackages";
import PackagesWeProvide from "./components/packages/PackagesWeProvide";
import WhyChooseUs from "./components/why-choose/WhyChooseUs";
import AwardsAchievements from "./components/awards/AwardsAchievements";
import TrendingTours from "./components/trending/TrendingTours";
import TourTypes from "./components/tour-types/TourTypes";
import PopularPackages from "./components/popular/PopularPackages";
import Testimonials from "./components/testimonials/Testimonials";
import CtaBanner from "./components/cta/CtaBanner";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HolidayPackages />
        <PackagesWeProvide />
        <WhyChooseUs />
        <AwardsAchievements />
        <TrendingTours />
        <TourTypes />
        <PopularPackages />
        <Testimonials />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
