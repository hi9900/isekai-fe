'use client'

import Link from 'next/link'
import { TabListType } from '@/types/QueryTabList'
import useQuery from '@/hooks/useQuery'
import styles from './TabList.module.css'

export default function TabList({
  tabList,
  pathName,
  query,
}: {
  tabList: TabListType[]
  pathName: string
  query: string
}) {
  const queryResult = useQuery(query)
  const activeTab = queryResult === null ? 'all' : queryResult

  return (
    <div className="py-2.5">
      <ul className="flex items-center justify-between overflow-x-auto flex-nowrap">
        {tabList.map((tab) => (
          <li
            key={tab.id}
            className={`${styles.tabItem} ${activeTab === tab.query && styles.activeTab}`}
          >
            <Link
              href={{
                pathname: `/${pathName}`,
                query: { [query]: tab.query },
              }}
              replace
              className="max-w-[40px] text-[13px] tracking-[-0.3px] leading-[1.2] overflow-hidden text-center break-keep m-auto"
            >
              {tab.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
