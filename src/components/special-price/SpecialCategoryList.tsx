import { CategoryType } from '@/types/productType'
import { useState } from 'react'
import styles from './special.module.css'

export default function SpecialCategoryList({
  data,
  isMore = true,
}: {
  data: CategoryType[]
  isMore: boolean
}) {
  const [selectCategory, setSelectCategory] = useState(0)

  const handleClick = (id: number) => {
    setSelectCategory(id)

    setTimeout(() => {
      const selectedButton = document.querySelector(
        `.${styles.selected}`,
      ) as HTMLElement

      if (selectedButton) {
        const scrollContainer = selectedButton.closest(
          '.overflow-x-auto',
        ) as HTMLElement

        // 선택된 버튼과 스크롤 컨테이너의 가운데를 맞춤
        const scrollX =
          selectedButton.offsetLeft -
          scrollContainer.offsetWidth / 2 +
          selectedButton.offsetWidth / 2
        scrollContainer.scrollTo({ left: scrollX, behavior: 'smooth' })
      }
    }, 0)
  }

  return (
    <div className="flex items-center justify-start relative bg-[color:var(--m-colors-white)] pr-[54px]">
      <div
        className="h-14 overflow-hidden overflow-x-auto whitespace-nowrap border-[color:var(--m-colors-gray150)]"
        aria-label="카테고리 탭"
      >
        <div
          id="tablist"
          className="flex items-center flex-nowrap h-full py-2.5"
        >
          {data.map((item) => (
            <button
              type="button"
              className={`${styles.item} ${selectCategory === item.id && styles.selected}`}
              key={item.id}
              onClick={() => handleClick(item.id)}
            >
              {item.title}
            </button>
          ))}
        </div>
      </div>
      {/* 전체 카테고리 보기 */}
      {isMore && (
        <div
          className={`absolute pr-2 right-0 inset-y-2.5 ${styles['more-btn']}`}
        >
          <button
            className="flex items-center justify-center relative leading-[1.2] font-normal text-[color:var(--m-colors-gray300)] border border-solid border-current"
            type="button"
            aria-label="바텀 시트 열기"
          >
            <svg
              viewBox="0 0 24 24"
              focusable="false"
              name="ChevronDownSmallIcon"
              aria-hidden="true"
              className="text-[color:var(--m-colors-black)] w-7 h-7 inline-block leading-[1em] align-middle"
            >
              <path
                d="M7.33197 10.308L8.18397 9.45599L12 13.272L15.816 9.45599L16.668 10.308L12 14.964L7.33197 10.308Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  )
}