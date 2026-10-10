import pattern from '../../assets/why-choose-pattern.svg'
import snowImage from '../../assets/why-choose/snow.jpg'
import sunsetImage from '../../assets/why-choose/sunset.jpg'
import boatImage from '../../assets/why-choose/boat.jpg'
import { stats } from '../../data/whyChooseUs'
import { affiliations } from '../../data/affiliations'

export default function WhyChooseUs() {
  return (
    <section className="relative min-h-[1114px] bg-[#F8F5EA] pb-16 max-xl:pb-28">
      <div
        className="absolute inset-x-0 top-0 h-[799px] bg-repeat"
        style={{
          backgroundImage: `url(${pattern})`,
          backgroundSize: '862.04px 409.59px',
          backgroundPosition: '300px 200px',
        }}
      />

      <div className="page-container relative flex flex-col items-center gap-12 max-xl:items-start max-xl:gap-0 max-xl:pt-[59px] xl:flex-row xl:items-start xl:justify-between xl:gap-10">
        <div className="w-full pt-[59px] max-xl:contents xl:max-w-[878px]">
          <h2 className="text-[30px] leading-[1.2] font-bold text-brand-ink xl:text-[34px] 2xl:text-[40px]">
            Why choose us
          </h2>

          <div className="mt-[30px] text-base leading-[1.61] tracking-[0.02em] text-[#111111] xl:text-[17px] 2xl:text-xl">
            <p>
              As our very name suggests – means “Standards”. Our team is dedicated to ensure all
              customers receive the best of customer service. We provide customer support at all
              stages of our customer’s journey – before, during and after.
            </p>
            <p className="mt-[1.61em]">
              We cater to all segments of travel like Group Tours, Corporate travel, Luxury Travel,
              Leisure Travel, Inbound holidays, Customized Holidays, MICE and also specialty tours
              like Couple’s Only Holidays, Women’s Special, Senior Citizen Packages and many more.
              We offer travel packages around the globe, which are tailor made as per customer
              preferences.
            </p>
          </div>

          <hr className="mt-[43px] w-full max-w-[810px] border-[#DDD5BF]" />

          <ul className="mt-[50px] grid h-[200px] max-w-[701px] grid-cols-2 content-start gap-y-[30px] max-sm:gap-x-3 pt-[2px] font-stats 2xl:grid-cols-[428.5px_1fr]">
            {stats.map((stat) => (
              <li key={stat.label} className="flex items-center gap-[26px] max-sm:gap-3">
                <span
                  className="grid size-[75px] shrink-0 place-items-center rounded-[16px] max-sm:size-[60px] max-sm:rounded-[13px] shadow-[0_5px_4px_rgba(0,0,0,0.12)]"
                  style={{ backgroundColor: stat.tileColor }}
                >
                  <img
                    src={stat.icon}
                    alt=""
                    style={{ width: stat.iconSize, height: stat.iconSize }}
                  />
                </span>
                <div className="text-[#051036]">
                  <p className="text-2xl leading-[1.2] font-medium max-sm:text-xl 2xl:text-[29px]">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-lg leading-[1.2] max-sm:mt-1 max-sm:text-base">
                    {stat.label}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <h2 className="mt-[90px] text-[30px] leading-[1.2] font-bold text-[#111111] max-xl:order-1 max-sm:mt-12 xl:text-[34px] 2xl:text-[40px]">
            Our Affiliations
          </h2>
        </div>

        <div className="relative h-[738px] w-[568px] shrink-0 max-xl:mt-12 max-xl:self-center max-sm:[zoom:0.6] max-[359px]:[zoom:0.48] xl:mt-[53px]">
          <p className="absolute top-[424px] left-0 flex h-[315px] w-[68px] items-center justify-center text-[51.19px] leading-[67.91px] font-bold whitespace-nowrap text-[#111111] opacity-10 [writing-mode:vertical-rl] rotate-180">
            Our Company
          </p>

          <div className="absolute top-[24px] left-[72px] h-[714px] w-[495px] overflow-hidden rounded-t-[247.5px_220px] border-2 border-b-0 border-brand">
            <img
              src={boatImage}
              alt="Traveller on a boat between limestone cliffs"
              className="absolute top-[-2%] left-1/2 h-[108.3%] w-auto max-w-none -translate-x-1/2"
            />
          </div>

          <img
            src={snowImage}
            alt="Group hiking down a snowy mountain"
            className="absolute top-[46px] left-[33px] size-[141.04px] rounded-full object-cover object-[center_85%] shadow-[0_56.42px_87.76px_rgba(1,22,24,0.24)]"
          />
          <div className="absolute top-0 left-[337px] size-[230.89px] overflow-hidden rounded-full">
            <img
              src={sunsetImage}
              alt="Couple at sunset under palm trees"
              className="absolute top-[-163px] left-[-184px] h-[423px] w-auto max-w-none"
            />
          </div>
        </div>
      </div>

      <div className="relative mt-12 overflow-hidden pl-5 lg:pl-[10.4%] 2xl:pl-[200px]">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-5 bg-[#F8F5EA]/58 lg:w-[max(10.4%,calc((100%-1520px)/2))]" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-5 bg-[#F8F5EA]/58 lg:w-[max(10.4%,calc((100%-1520px)/2))]" />
        <ul className="flex h-[60px] w-max animate-marquee items-center hover:[animation-play-state:paused] motion-reduce:animate-none">
          {[...affiliations, ...affiliations].map((item, index) => (
            <li
              key={index}
              className="shrink-0 pr-[100px]"
              aria-hidden={index >= affiliations.length}
            >
              <img
                src={item.logo}
                alt={item.name}
                className="h-auto max-h-[60px]"
                style={{ width: item.width }}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
