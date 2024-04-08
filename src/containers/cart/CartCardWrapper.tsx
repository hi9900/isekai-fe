import { CartDeliveryType } from '@/types/cartType'
import CartItemCard from './CartItemCard'
import DeliveryTypeSelect from './DeliveryTypeSelect'

export default function CartCardWrapper({
  type,
  title,
  data,
}: {
  type: string
  title: string
  data: CartDeliveryType[]
}) {
  return (
    <div className="relative bg-[color:var(--m-colors-white)] tracking-[-0.3px] leading-[1.3] mt-0 mb-[15px] pt-0 scroll-mt-[45px]">
      <DeliveryTypeSelect type={type} title={title} />

      <div>
        {data.map((item: CartDeliveryType) => (
          <div
            key={item.id}
            className="flex items-start justify-between px-4 py-5 border-t-[color:var(--m-colors-gray200)] border-t border-solid"
          >
            <CartItemCard data={item} />
          </div>
        ))}
      </div>
    </div>
  )
}