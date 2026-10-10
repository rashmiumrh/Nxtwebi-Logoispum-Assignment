export default function FeatureCard({ title, text, icon }) {
  return (
    <div className="flex h-full gap-3 rounded-[15px] bg-white p-4 shadow-[0_0_8px_rgba(0,0,0,0.15)] xl:gap-4 xl:p-5 2xl:h-[125px] 2xl:gap-[18px] 2xl:p-6">
      <span className="grid size-12 shrink-0 place-items-center xl:size-[54px] 2xl:size-[60px] rounded-[5px] bg-[#FFECB4]">
        <img src={icon} alt="" className="size-6 object-contain" />
      </span>
      <div className="text-sm leading-[1.5] tracking-[0.02em] text-black xl:text-[15px] 2xl:text-base 2xl:leading-[1.61]">
        <h3 className="font-bold">{title}</h3>
        <p className="mt-0.5 2xl:mt-1 2xl:max-w-[311px]">{text}</p>
      </div>
    </div>
  )
}
