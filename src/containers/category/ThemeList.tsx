import Image from 'next/image'
import Link from 'next/link'
import { THEME_ITEMS } from './themeStates'

export default function ThemeList() {
  return (
    <div className="relative mb-[20px]">
      <h2 className="pb-[5px] pt-[20px] pl-[15px] text-[14px] font-bold text-[color:var(--m-colors-black)]">
        테마추천
      </h2>
      <div className="relative pb-[15px] ml-[15px]">
        <ul className="flex flex-wrap">
          {THEME_ITEMS.map((item) => (
            <li key={item.id} className="inline-block w-6/12 mt-2.5">
              <Link
                href={item.redirect_url}
                className="mr-[15px] block"
                scroll={false}
              >
                <div className="relative pb-[60%] rounded-lg">
                  <Image
                    alt={item.title}
                    src={item.image}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
                  />
                </div>
                <div className="block pt-[8px] pb-[3px] text-[13px] font-bold whitespace-nowrap overflow-hidden text-ellipsis">
                  {item.title}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
