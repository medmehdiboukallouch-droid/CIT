import { useState } from 'react'
import { asset } from '../utils/asset'

/** Board portrait, with an initials fallback if the file is missing. */
export default function MemberPhoto({ member, size = 'md', accentClasses }) {
  const [broken, setBroken] = useState(false)

  const dims = {
    sm: 'h-32 w-32 sm:h-36 sm:w-36',
    md: 'h-36 w-36 sm:h-40 sm:w-40',
    lg: 'h-48 w-48 sm:h-56 sm:w-56',
  }[size]

  const initials = `${member.firstName?.[0] ?? ''}${member.lastName?.[0] ?? ''}`.toUpperCase()

  return (
    <div
      className={[
        'relative overflow-hidden rounded-full border bg-panel-2',
        dims,
        accentClasses?.border ?? 'border-line-2',
      ].join(' ')}
    >
      {broken ? (
        <div className="flex h-full w-full items-center justify-center text-2xl font-bold text-ink-faint">
          {initials}
        </div>
      ) : (
        <img
          src={asset(member.photo)}
          alt={`${member.firstName} ${member.lastName}`}
          loading="lazy"
          onError={() => setBroken(true)}
          className="h-full w-full object-cover object-top grayscale-[35%] transition-all duration-500 hover:grayscale-0"
        />
      )}
    </div>
  )
}
