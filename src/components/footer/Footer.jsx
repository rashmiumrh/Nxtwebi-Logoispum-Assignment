import logo from '../../assets/logo.png'
import footerBg from '../../assets/footer-bg.jpg'
import FooterLinks from './FooterLinks'
import { contactItems, packageLinks, quickLinks, socialLinks } from '../../data/footer'

export default function Footer() {
  return (
    <footer className="bg-[#FAFAFA]">
      <div className="page-container grid gap-10 border-t max-sm:gap-9 max-sm:text-center border-[#DCDFE2] pt-[41px] pb-[49px] sm:grid-cols-2 lg:grid-cols-[460fr_255fr_280fr_425fr] lg:gap-0 2xl:pl-[100px]">
        <div>
          <a
            href="/"
            className="flex h-[75px] w-[149px] items-center justify-center max-sm:mx-auto"
          >
            <img src={logo} alt="logoipsum" className="h-[29px] w-auto" />
          </a>
          <p className="mt-[7px] max-w-[330px] pr-4 max-sm:mx-auto max-sm:pr-0 text-sm lg:max-w-[260px] xl:max-w-[300px] 2xl:max-w-[330px] 2xl:pr-0 leading-[29px] text-[#666666] xl:text-[15px] 2xl:text-base">
            Explore the world's most breathtaking destinations with our curated travel packages
          </p>
          <ul className="mt-[65px] flex gap-[9px] max-sm:mt-6 max-sm:justify-center">
            {socialLinks.map((social) => (
              <li key={social.name}>
                <a
                  href="#"
                  aria-label={social.name}
                  className="grid size-8 place-items-center rounded-full bg-brand transition hover:-translate-y-0.5 hover:bg-brand-hover"
                >
                  <img src={social.icon} alt="" className="h-4 w-auto" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <FooterLinks title="Quick Links" links={quickLinks} />
        <FooterLinks title="Packages" links={packageLinks} />

        <div className="pt-[18px]">
          <h3 className="text-xl leading-none font-medium text-[#111111] xl:text-[22px] 2xl:text-2xl">
            Get In Touch
          </h3>
          <ul className="mt-[30px] flex flex-col gap-7 max-sm:mt-5 max-sm:gap-4">
            {contactItems.map((item) => (
              <li
                key={item.text}
                className="flex items-start gap-3 max-sm:flex-col max-sm:items-center max-sm:gap-1"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-brand">
                  <img src={item.icon} alt="" className="size-[18px]" />
                </span>
                <a
                  href={item.href}
                  className="mt-[6px] text-sm leading-[28px] text-[#111111] xl:whitespace-pre-line transition-colors hover:text-brand-ink xl:text-[15px] 2xl:text-base"
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative h-[50px] overflow-hidden">
        <img
          src={footerBg}
          alt=""
          className="absolute inset-0 size-full object-cover object-[center_46.98%]"
        />
        <div className="absolute inset-0 bg-[#111111]/60" />
        <div className="page-container relative flex h-full items-center max-sm:justify-center max-sm:text-center">
          <p className="text-[15px] leading-[22px] font-medium text-white xl:text-base 2xl:text-lg">
            Company Copyright 2025. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
