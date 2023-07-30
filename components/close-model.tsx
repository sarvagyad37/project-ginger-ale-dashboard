'use client'

import { useRouter } from 'next/navigation'
import { FC } from 'react'
import { Button } from '@/components/ui/button'
import { Icons } from './icons'

interface CloseModalProps {}

const CloseModal: FC<CloseModalProps> = ({}) => {
  const router = useRouter()

  return (
    <Button className='h-6 w-6 p-0 rounded-md' onClick={() => router.back()}>
      <Icons.close aria-label='close modal' className='h-4 w-4' />
    </Button>
  )
}

export default CloseModal