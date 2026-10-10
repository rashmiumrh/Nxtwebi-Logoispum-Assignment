import FeatureCard from './FeatureCard'
import globeImage from '../../assets/awards/globe.png'
import { awards, supportFeatures } from '../../data/awards'

export default function AwardsAchievements() {
  const leftFeatures = supportFeatures.slice(0, 2)
  const rightFeatures = supportFeatures.slice(2)

  return (
    <section className="relative z-10 -mt-[74px] pb-20">
      <div className="page-container">
        <div className="rounded-[30px] bg-white px-6 pt-12 pb-12 lg:pb-[43px] shadow-[0_0_15px_rgba(0,0,0,0.1)] lg:min-h-[750px] lg:px-10 xl:px-14 2xl:px-[72px]">
          <h2 className="text-center text-[28px] leading-[1.2] font-bold text-[#111111] 2xl:text-[32px]">
            Awards &amp; Achievements
          </h2>

          <ul className="mt-12 grid grid-cols-2 gap-y-8 max-sm:mt-8 max-sm:gap-y-5 sm:grid-cols-4 lg:-mx-4 lg:grid-cols-7 2xl:-mx-[59px]">
            {awards.map((award, index) => (
              <li key={index} className="flex flex-col items-center px-2 text-center max-sm:last:odd:col-span-2">
                <img
                  src={award.image}
                  alt={award.title}
                  className="h-[110px] w-auto transition-transform duration-300 hover:-translate-y-1 2xl:h-[130px]"
                />
                <p className="mt-6 max-w-[190px] text-sm leading-[1.61] tracking-[0.02em] text-[#111111] 2xl:text-base">
                  {award.title}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-[81px] grid items-stretch gap-6 max-sm:mt-10 max-sm:gap-4 lg:grid-cols-[1fr_auto_1fr] lg:gap-6 xl:gap-10 2xl:grid-cols-[441px_286px_441px] 2xl:justify-between 2xl:gap-0">
            <div className="grid auto-rows-fr gap-6 max-sm:gap-4">
              {leftFeatures.map((feature) => (
                <FeatureCard key={feature.title} {...feature} />
              ))}
            </div>

            <img
              src={globeImage}
              alt="Travel globe with landmarks, camera, suitcase and passport"
              className="mx-auto size-[200px] self-center rounded-full object-cover xl:size-[250px] 2xl:size-[286px]"
            />

            <div className="grid auto-rows-fr gap-6 max-sm:gap-4">
              {rightFeatures.map((feature) => (
                <FeatureCard key={feature.title} {...feature} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
