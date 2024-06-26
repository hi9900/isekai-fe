import { ReviewContentType } from '@/types/ReviewType'
import ReviewPhoto from './ReviewPhoto'

export default function ReviewAllList({
  reviewsData = [],
}: {
  reviewsData?: ReviewContentType[]
}) {
  return (
    <>
      {/* 리뷰 필터링 */}
      {/* <div className="h-[52px] border-t-neutral-100 px-5 py-0 border-t border-solid">
        <div className="h-full flex items-center justify-between">
          <div>전체</div>
        </div>
      </div> */}
      <ul>
        {reviewsData.map((review: ReviewContentType) => (
          <li key={review.reviewId} className="px-4 py-5">
            <div className="flex-1">
              <div className="flex items-center">
                <div className="relative align-middle text-[color:var(--m-colors-gray900)] text-xs leading-3 tracking-[-0.3px] flex items-center pr-2">
                  <span>
                    <svg
                      viewBox="0 0 11 16"
                      focusable="false"
                      className="w-[18px] h-[18px]"
                      name="StarFill"
                    >
                      <path
                        fill="currentColor"
                        d="m2.089 13 .906-4.073L0 6.205l3.94-.35L5.5 2l1.56 3.856 3.94.349-2.995 2.722L8.911 13 5.5 10.838 2.089 13Z"
                      />
                    </svg>
                  </span>
                  <span className="font-bold">{review.score}</span>
                </div>

                <span className="relative text-[color:var(--m-colors-gray900)] text-xs font-bold leading-[1.2] align-middle mt-px before:content-[''] before:inline-block before:w-px before:h-2.5 before:bg-[color:var(--m-colors-gray300)] before:ml-0.5 before:mr-[5px] before:mt-[3px] before:mb-0">
                  일반
                </span>

                <div className="relative leading-[normal]">
                  <span className="relative inline-block text-[11px] text-[#969696] pl-1.5 py-0 before:content-[''] before:inline-block before:w-px before:h-2.5 before:bg-[color:var(--m-colors-gray300)] before:ml-0.5 before:mr-[5px] before:mt-[3px] before:mb-0">
                    {review.createdAt.slice(0, 10)}
                  </span>
                  <span className="relative inline-block text-[11px] text-[#969696] pl-1.5 py-0 before:content-[''] before:inline-block before:w-px before:h-2.5 before:bg-[color:var(--m-colors-gray300)] before:ml-0.5 before:mr-[5px] before:mt-[3px] before:mb-0">
                    {review.accountId}
                  </span>
                </div>
              </div>

              {/* <dl className="text-[color:var(--m-colors-gray600)] text-[13px] tracking-[-0.3px] px-0 py-[5px]">
                <dt className="float-left min-w-[50px] font-bold pl-0 pr-2.5 pt-[5px] pb-0">
                  구매옵션
                </dt>
                <dd className="overflow-hidden pt-[5px]"></dd>
              </dl> */}
              {review.reviewImage && <ReviewPhoto reviews={[review]} />}

              <div className="a">
                <p className="overflow-hidden break-all text-sm text-[color:var(--m-colors-gray900)] tracking-[-0.3px] font-normal mt-[5px]">
                  {review.reviewContent}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}
