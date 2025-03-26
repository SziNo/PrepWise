'use client'

import { deleteInterviewById } from '@/lib/actions/general.action'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'

const ClientDeleteButton = ({ id }: { id: string }) => {
  const router = useRouter()

  const handleDelete = async () => {
    await deleteInterviewById(id)
    router.refresh()
  }

  return (
    <Button
      variant='destructive'
      className='absolute top-0 left-0 cursor-pointer'
      onClick={handleDelete}
    >
      X
    </Button>
  )
}

export default ClientDeleteButton
