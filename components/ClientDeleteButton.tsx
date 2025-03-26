'use client'

import { deleteInterviewById } from '@/lib/actions/general.action'
import { useRouter } from 'next/navigation'
import { Button } from './ui/button'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { toast } from 'sonner'

const ClientDeleteButton = ({ id }: { id: string }) => {
  const router = useRouter()

  const handleDelete = async () => {
    await deleteInterviewById(id)
    router.refresh()
    toast.success('Interview deleted successfully')
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant='destructive'
          className='absolute top-0 left-0 cursor-pointer hover:!bg-red-400'
        >
          X
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This will permanently delete your Interview and corresponding
            feedbacks.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction className='cursor-pointer' onClick={handleDelete}>
            Delete
          </AlertDialogAction>
          <AlertDialogCancel className='cursor-pointer'>
            Cancel
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default ClientDeleteButton
