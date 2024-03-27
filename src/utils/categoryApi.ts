import { CategoryLMType } from '@/types/categoryType'

/** 대-중 카테고리 조회 */
export async function getCategoryLM(): Promise<CategoryLMType[] | []> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API}/categories`)
    if (!response.ok) {
      throw Error(response.statusText)
    }
    return await response.json()
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('getCategoryLM', err)
    return []
  }
}

/** 중 카테고리 조회 */
export async function getCategoryM(
  largeName: string,
): Promise<CategoryLMType[] | []> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/categories/medium/${largeName}`,
    )
    if (!response.ok) {
      throw Error(response.statusText)
    }
    return await response.json()
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('getCategoryM', err)
    return []
  }
}
