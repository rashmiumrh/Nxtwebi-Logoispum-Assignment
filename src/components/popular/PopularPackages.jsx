import { useRef, useState } from 'react'
import PopularPackageCard from './PopularPackageCard'
import { popularPackages } from '../../data/popularPackages'
import arrowLeftIcon from '../../assets/icons/arrow-left.svg'
import arrowRightIcon from '../../assets/icons/arrow-right.svg'
import viewAllText from '../../assets/icons/view-all.svg'

const tabs = [
  { key: 'domestic', label: 'Domestic' },
  { key: 'international', label: 'International' },
]

export default function PopularPackages() {
  const [activeTab, setActiveTab] = useState('domestic')
  const [scrolled, setScrolled] = useState(false)
  const rowRef = useRef(null)

  function next() {
    const row = rowRef.current
    const atEnd = row.scrollLeft + row.clientWidth >= row.scrollWidth - 5
    row.scrollTo({ left: atEnd ? 0 : row.scrollLeft + 335, behavior: 'smooth' })
  }

  function prev() {
    rowRef.current.scrollBy({ left: -335, behavior: 'smooth' })
  }

  function changeTab(key) {
    setActiveTab(key)
    rowRef.current.scrollTo({ left: 0 })
  }

  return (
    <section className="mt-10 bg-[#0F2A43] pt-[41px] pb-5 lg:h-[729px]">
      <div className="page-container">
        <h2 className="text-center text-[30px] leading-[48px] font-bold text-white xl:text-[34px] 2xl:text-[40px]">
          Popular Packages
        </h2>

        <div className="mt-[26px] flex justify-center gap-5">
          {tabs.map((tab) => {
            const active = tab.key === activeTab
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => changeTab(tab.key)}
                className={`h-[50px] w-[160px] rounded-[10px] text-lg transition-colors sm:w-[200px] 2xl:text-xl ${
                  active
                    ? 'border border-brand bg-brand font-bold text-[#111111]'
                    : 'border-[0.5px] border-white text-white hover:bg-white/10'
                }`}
              >
                {tab.label}
              </button>
            )
          })}
        </div>

        <div className="relative mt-[55px]">
          <div
            ref={rowRef}
            onScroll={(e) => setScrolled(e.currentTarget.scrollLeft > 5)}
            className="flex gap-6 overflow-x-auto max-sm:gap-4 [scrollbar-width:none]"
          >
            {popularPackages[activeTab].map((item) => (
              <PopularPackageCard key={item.title} {...item} />
            ))}
          </div>

          {scrolled && (
            <>
              <div className="pointer-events-none absolute top-0 left-0 h-[393px] w-[120px] bg-linear-to-l from-transparent to-white/60" />
              <button
                type="button"
                aria-label="Previous packages"
                onClick={prev}
                className="absolute top-[173px] -left-[23px] max-sm:left-1 size-[46.29px] rounded-full bg-white shadow-[0_3.09px_1.54px_rgba(0,0,0,0.1)] transition hover:bg-brand"
              >
                <img src={arrowLeftIcon} alt="" className="size-full" />
              </button>
            </>
          )}

          <div className="pointer-events-none absolute top-0 right-0 h-[393px] w-[120px] bg-linear-to-r from-transparent to-white/60" />

          <button
            type="button"
            aria-label="Next packages"
            onClick={next}
            className="absolute top-[173px] -right-[23px] max-sm:right-1 size-[46.29px] rounded-full bg-white shadow-[0_3.09px_1.54px_rgba(0,0,0,0.1)] transition hover:bg-brand"
          >
            <img src={arrowRightIcon} alt="" className="size-full" />
          </button>
        </div>

        <a
          href="#"
          className="mx-auto mt-[53px] flex h-11 w-[200px] items-center justify-center rounded-[5px] border border-white transition-colors hover:bg-white/10"
          aria-label="View All"
        >
          <img src={viewAllText} alt="" className="h-[18px] w-[111px]" />
        </a>
      </div>
    </section>
  )
}
