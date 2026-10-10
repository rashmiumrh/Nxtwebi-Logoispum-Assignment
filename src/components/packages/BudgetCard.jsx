export default function BudgetCard({ price, image, imagePosition, textColor, borderColor }) {
  return (
    <a
      href="#"
      className="@container group relative block aspect-[365/200] overflow-hidden rounded-[25px] shadow-[0_2px_4px_rgba(0,0,0,0.25)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_8px_18px_rgba(0,0,0,0.2)]"
    >
      <img
        src={image}
        alt=""
        className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
        style={{ objectPosition: imagePosition }}
      />
      <span
        className="pointer-events-none absolute inset-0 rounded-[25px] border"
        style={{ borderColor }}
      />
      <p
        className="absolute inset-x-0 bottom-[1.37cqw] text-center text-[6.575cqw] leading-[1.2]"
        style={{ color: textColor }}
      >
        Under
        <br />
        {price}
      </p>
    </a>
  )
}
