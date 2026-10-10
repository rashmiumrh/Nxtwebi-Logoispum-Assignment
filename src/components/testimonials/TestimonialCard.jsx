import quoteActiveIcon from '../../assets/testimonials/quote-active.svg'
import quoteIcon from '../../assets/testimonials/quote.svg'

function Star() {
  return (
    <svg viewBox="0 0 24 22" className="h-[13.58px] w-[15.27px]" aria-hidden="true">
      <path
        d="M12 2.2l2.6 5.6 6 .7-4.4 4.2 1.2 6L12 15.7l-5.4 3 1.2-6-4.4-4.2 6-.7z"
        fill="#FFC108"
        stroke="#FFC108"
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function TestimonialCard({ name, avatar, rating, quote, active }) {
  return (
    <div className="relative size-full rounded-[23.27px] border border-[#F8F5EA] bg-[#F8F5EA] px-[38px] pt-[39px] max-sm:px-5 max-sm:pt-6 max-lg:pb-14">
      <div className="flex items-start justify-between gap-4 max-sm:flex-wrap max-sm:gap-2">
        <div className="flex items-start gap-[18px]">
          <img
            src={avatar}
            alt={name}
            className="size-[72px] rounded-full object-cover max-sm:size-14"
          />
          <div className="pt-[2.82px]">
            <p className="text-[23.27px] leading-[32.98px] font-medium text-[#111111]">{name}</p>
            <p className="text-[15.52px] leading-[25.21px] text-[#6E7070]">Traveller</p>
          </div>
        </div>
        <div className="mt-[5.58px] flex gap-[4.58px]" aria-label={`${rating} out of 5 stars`}>
          {Array.from({ length: rating }, (_, i) => (
            <Star key={i} />
          ))}
        </div>
      </div>

      <p
        className={`-mr-[10px] text-[19.39px] leading-[33.94px] break-words text-[#111111] max-sm:mr-0 max-sm:text-base max-sm:leading-7 transition-[margin] duration-500 ${active ? 'mt-[19px]' : 'mt-[41px]'}`}
      >
        “{quote}”
      </p>

      <span className="absolute -bottom-[29px] left-[calc(50%-50px)] size-[75.64px]">
        {active ? (
          <img src={quoteActiveIcon} alt="" className="size-full" />
        ) : (
          <span className="grid size-full place-items-center rounded-full bg-white shadow-[0_2px_6px_rgba(0,0,0,0.1)]">
            <img src={quoteIcon} alt="" className="size-8" />
          </span>
        )}
      </span>
    </div>
  )
}
