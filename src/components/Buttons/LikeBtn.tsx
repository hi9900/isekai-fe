'use client'

import { useState } from 'react'

/** itemId: 상품 iD
 * isLiked: 현재 상태
 * likeDivision: 찜 분류
    0 : 단일상품
    1 : 묶음상품
    2 : 카테고리M
    3 : 카테고리S
    4 : 판매자
 */
export default function LikeBtn({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  itemId,
  isLiked,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  likeDivision,
}: {
  itemId: number
  isLiked: boolean
  likeDivision: number
}) {
  const [like, setLike] = useState(isLiked)

  // TODO: 좋아요 / 장바구니 로직
  // FIXME: 회원만 찜하기 가능
  const handleLike = async () => {
    setLike(!like)
    // console.log(productId, '좋아요')
  }

  return (
    <div className="flex">
      <button
        onClick={handleLike}
        type="button"
        className="flex items-center justify-center align-middle w-7 h-7"
        aria-label={like ? '좋아요 상품 취소하기' : '좋아요 상품 등록하기'}
      >
        {like ? (
          <svg
            className="w-5 h-5 inline-block leading-[1em] align-middle text-[color:var(--m-colors-primary)] animate-[0.35s_linear_0.01s_1_normal_none_running_animation-unLike]"
            viewBox="0 0 24 24"
            focusable="false"
            name="LikeFillIcon"
          >
            <path
              d="M12 21.288L4.06802 12.72C2.94002 11.496 2.40002 10.224 2.40002 8.84398C2.40002 5.95198 4.69202 3.59998 7.50002 3.59998C9.44402 3.59998 11.136 4.72798 12 6.38398C12.864 4.72798 14.556 3.59998 16.5 3.59998C19.308 3.59998 21.6 5.95198 21.6 8.84398C21.6 10.224 21.06 11.484 19.944 12.708L12 21.288Z"
              fill="currentColor"
            />
          </svg>
        ) : (
          <svg
            className="w-5 h-5 inline-block leading-[1em] align-middle animate-[0.25s_linear_0.01s_1_normal_none_running_animation-like]"
            viewBox="0 0 24 24"
            focusable="false"
            name="LikeIcon"
          >
            <path
              d="M12 21.288L4.06802 12.72C2.94002 11.496 2.40002 10.224 2.40002 8.84398C2.40002 5.95198 4.69202 3.59998 7.50002 3.59998C9.44402 3.59998 11.136 4.72798 12 6.38398C12.864 4.72798 14.556 3.59998 16.5 3.59998C19.308 3.59998 21.6 5.95198 21.6 8.84398C21.6 10.224 21.06 11.484 19.944 12.708L12 21.288ZM7.50002 4.79998C5.35202 4.79998 3.60002 6.61198 3.60002 8.84398C3.60002 9.92398 4.03202 10.896 4.94402 11.904L12 19.512L19.056 11.904C19.968 10.896 20.4 9.92398 20.4 8.84398C20.4 6.61198 18.648 4.79998 16.5 4.79998C14.352 4.79998 12.6 6.61198 12.6 8.84398H11.4C11.4 6.61198 9.64802 4.79998 7.50002 4.79998Z"
              fill="currentColor"
            />
          </svg>
        )}
      </button>
    </div>
  )
}