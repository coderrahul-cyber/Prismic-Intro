import React from 'react'
import { FizziLogo } from '@/components/FizzLogo';

type Props = {}

const Headers = (props: Props) => {
  return (
    <header className='flex justify-center py-4 -mb-28 '>
        <FizziLogo className='h-20 z-10 cursor-pointer text-sky-800' />
    </header>
  )
}

export default Headers;