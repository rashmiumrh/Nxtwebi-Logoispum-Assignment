export default function PackageCard({ title, duration, price, oldPrice, image, badge, badgeText }) {
  return (
    <article className="group relative h-[370px] w-[280px] shrink-0 overflow-hidden rounded-[10px] bg-white shadow-[0_4px_14px_rgba(0,0,0,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_10px_24px_rgba(0,0,0,0.1)] sm:w-[300px] xl:w-[340px] 2xl:w-[365px]">
      <div className="h-[218px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {badge === 'limited' && (
        <span className="absolute top-[17px] -left-[31px] w-[110px] -rotate-45 bg-[#881617] py-[3px] text-center text-[16px] text-white">
          Limited
        </span>
      )}
      {badge === 'offer' && (
        <span className="absolute top-[11px] left-0 grid h-[25px] w-[88px] place-items-center rounded-r-[3px] bg-brand text-base text-[#111111]">
          {badgeText}
        </span>
      )}

      <div className="px-[18px] pt-[17px]">
        <h3 className="truncate text-base leading-[1.2] font-semibold text-[#111111] xl:text-lg 2xl:text-xl">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-[1.2] text-[#6C757D] xl:text-base 2xl:text-lg">
          {duration}
        </p>
        <p className="mt-6 flex items-baseline gap-2.5 leading-[1.2]">
          <span className="text-xl font-medium text-[#111111] xl:text-[22px] 2xl:text-2xl">
            {price}
          </span>
          <span className="text-xs text-[#6C757D] line-through xl:text-sm 2xl:text-[15px]">
            {oldPrice}
          </span>
        </p>
      </div>
    </article>
  )
}
