import chevronIcon from '../../assets/icons/chevron-right.svg'

export default function FooterLinks({ title, links }) {
  return (
    <div className="pt-[18px]">
      <h3 className="text-xl leading-none font-medium text-[#111111] xl:text-[22px] 2xl:text-2xl">
        {title}
      </h3>

      <ul className="mt-[26px] flex flex-col gap-5 max-sm:mt-5 max-sm:gap-3">
        {links.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="group flex items-center gap-2.5 max-sm:justify-center text-sm leading-[22px] text-[#111111] transition-colors hover:text-brand-ink xl:text-[15px] 2xl:text-base"
            >
              <img
                src={chevronIcon}
                alt=""
                className="h-2.5 w-1.5 transition-transform duration-300 group-hover:translate-x-1"
              />
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
