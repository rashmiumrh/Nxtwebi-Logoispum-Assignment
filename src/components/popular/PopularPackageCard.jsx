import arrowSmall from '../../assets/icons/arrow-small.svg'

export default function PopularPackageCard({ title, location, price, nights, image }) {
  return (
    <article className="relative h-[393px] w-[311px] shrink-0 overflow-hidden rounded-[10px] bg-white">
      <img src={image} alt={title} className="h-[258px] w-full object-cover" />

      <div className="px-[18px] pt-[10px]">
        <h3 className="truncate text-lg leading-[25.51px] font-medium text-[#111111]">{title}</h3>
        <p className="truncate text-base leading-[26px] text-[#6E7070]">{location}</p>
        <p className="mt-0.5 text-2xl leading-[36px] font-medium tracking-[0.48px] text-[#111111]">
          {price}
        </p>
        <p className="-mt-[3px] text-base leading-[26px] text-[#111111]">{nights} Nights</p>
      </div>

      <a
        href="#"
        className="group absolute top-[331px] left-[147px] flex h-12 w-[150.83px] items-center justify-center gap-[9px] rounded-[48px] border border-[#E1E4E5] text-base font-medium text-brand-ink transition-colors hover:border-brand hover:bg-brand/10"
      >
        View More
        <img
          src={arrowSmall}
          alt=""
          className="size-6 transition-transform duration-300 group-hover:translate-x-1"
        />
      </a>
    </article>
  )
}
