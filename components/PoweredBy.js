import { siteConfig } from '@/lib/config'

/**
 * 驱动版权
 * @returns
 */
export default function PoweredBy(props) {
  return (
    <div className={`inline text-sm font-serif ${props.className || ''}`}>
      <span className='mr-1'>Powered by</span>
      <a
        href='https://github.com/tangly1024/NotionNext'
        className='underline justify-start'
        rel='nofollow noopener noreferrer'
        target='_blank'>
        NotionNext {siteConfig('VERSION')}
      </a>
      .
    </div>
  )
}
