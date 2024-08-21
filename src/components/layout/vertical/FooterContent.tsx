'use client'

// Next Imports
import Link from 'next/link'

// Third-party Imports
import classnames from 'classnames'

// Hook Imports
import useVerticalNav from '@menu/hooks/useVerticalNav'

// Util Imports
import { verticalLayoutClasses } from '@layouts/utils/layoutClasses'

const FooterContent = () => {
  // Hooks
  const { isBreakpointReached } = useVerticalNav()

  return (
    <div
      className={classnames(verticalLayoutClasses.footerContent, 'flex items-center justify-between flex-wrap gap-4')}
    >
      <p>
        <span>{`© ${new Date().getFullYear()}, Made with `}</span>
        <span>{`❤️`}</span>
        <span>{` by `}</span>
        <Link href='#' target='_blank' className='text-primary'>
          Shanverse.
        </Link>
      </p>
      {!isBreakpointReached && (
        <div className='flex items-center gap-4'>
          <Link href='#' target='_blank' className='text-primary'>
            License
          </Link>
          <Link href='#' target='_blank' className='text-primary'>
            Documentation
          </Link>
          <Link
            href='#'
            target='_blank'
            className='text-primary'
          >
            Support
          </Link>
        </div>
      )}
    </div>
  )
}

export default FooterContent
