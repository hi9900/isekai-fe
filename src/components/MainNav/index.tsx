'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './MainNav.module.css'
import { NavItems, NavType } from './state'

export default function MainNav() {
  const pathname = usePathname()

  return (
    <nav className="sticky flex w-full h-[46px] left-0 top-0 bg-[color:var(--m-colors-white)] z-[99]">
      <ul className="flex flex-row items-center justify-between w-full h-full overflow-y-hidden whitespace-nowrap scrollbar-hide">
        {NavItems.map((tab: NavType) => (
          <li
            key={tab.id}
            className="flex items-center h-full pr-3 grow first:pl-3"
          >
            <Link
              className="relative inline-flex items-center justify-center h-full no-underline cursor-pointer text-inherit ps-1 pe-1"
              href={tab.url === '' ? '/' : tab.url}
            >
              {tab.title === 'SSG.TV' ? (
                <span
                  className={`w-[60px] h-[46px] leading-[18px] ${tab.url === pathname ? styles.pageSpan : ''}`}
                >
                  <Image
                    alt="쓱TV"
                    src="https://sui.ssgcdn.com/cmpt/banner/202402/2024022816022058499040766014_217.png"
                    width={100}
                    height={100}
                  />
                </span>
              ) : (
                <span
                  className={`h-full text-[15px] leading-[18px] px-0 py-3.5 ${tab.url === pathname ? styles.pageSpan : ''}`}
                >
                  {tab.title}
                </span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
