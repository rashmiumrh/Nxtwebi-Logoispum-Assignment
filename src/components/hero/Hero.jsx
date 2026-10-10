import heroImage from '../../assets/hero.jpg'
import SearchCard from './SearchCard'

export default function Hero() {
  return (
    <section>
      <div className="relative h-[460px] overflow-hidden bg-navy md:h-[505px]">
        <div className="absolute inset-y-0 left-1/2 w-full min-w-[1920px] -translate-x-1/2">
          <img
            src={heroImage}
            alt="Mountain lake surrounded by pine forest"
            className="size-full animate-hero-zoom object-cover object-[center_17%]"
          />
        </div>

        <div className="page-container relative flex flex-col items-center pt-20 text-center text-white md:pt-[155px]">
          <h1
            className="animate-fade-up text-[34px] font-bold leading-[1.2] sm:text-5xl lg:text-[42px] xl:text-[52px] 2xl:text-[64px]"
            style={{ animationDelay: '150ms' }}
          >
            Travel Beyond Ordinary. Travel Benchmark
          </h1>
          <p
            className="mt-5 max-w-3xl animate-fade-up text-base font-medium tracking-[0.02em] sm:text-xl md:mt-[31px] lg:max-w-none lg:text-lg lg:leading-[1.2] xl:text-xl 2xl:text-2xl"
            style={{ animationDelay: '300ms' }}
          >
            Explore the world's most breathtaking destinations with our curated travel packages
          </p>
        </div>
      </div>

      <div className="page-container relative z-10 -mt-[150px] md:-mt-[133px]">
        <SearchCard />
      </div>
    </section>
  )
}
