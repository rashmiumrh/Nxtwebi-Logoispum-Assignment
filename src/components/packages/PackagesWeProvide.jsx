import BudgetCard from './BudgetCard'
import { budgetPackages } from '../../data/budgets'

export default function PackagesWeProvide() {
  return (
    <section className="pb-[71px]">
      <div className="page-container">
        <h2 className="text-[30px] leading-[1.2] font-bold text-[#111111] xl:text-[34px] 2xl:text-[40px]">
          Packages we provide
        </h2>

        <div className="mt-[29px] grid gap-5 max-sm:gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {budgetPackages.map((item) => (
            <BudgetCard key={item.price} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
