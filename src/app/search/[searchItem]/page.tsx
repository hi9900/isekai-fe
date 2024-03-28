import AppBar from '@/components/AppBar'
import Footer from '@/components/Footer'
import TabBar from '@/components/TabBar'
import FloatingBtn from '@/components/FloatingBtn'
import NoSearchItem from '@/containers/search/[searchItem]/NoSearchItem'
import SearchResultItem from '@/containers/search/[searchItem]/SearchResultItem'

export default function Page({ params }: { params: { searchItem: string } }) {
  const decodeParams = decodeURI(params.searchItem)
  // setSearchValue(decodeParams)

  // TODO: 검색 결과 받아오기
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data: string | any[] = []
  // const data = [
  //   {
  //     id: 1,
  //     pk: 0,
  //   },
  // ]

  return (
    <>
      <AppBar after={false} value={decodeParams} />
      {data.length ? (
        <SearchResultItem data={data} />
      ) : (
        <NoSearchItem data={decodeParams} />
      )}

      <Footer />
      <TabBar />
      <FloatingBtn />
    </>
  )
}