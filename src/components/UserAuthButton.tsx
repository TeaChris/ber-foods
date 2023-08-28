'use client'

import { FC, useState } from 'react'
import { signIn } from 'next-auth/react'
import { Button } from './ui/button'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { useToast } from '@/hooks/use-toast'

interface UserAuthButtonProps extends React.HTMLAttributes<HTMLDivElement> {}

const UserAuthButton: FC<UserAuthButtonProps> = ({ className, ...props }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { toast } = useToast()

  const loginWithGoogle = async () => {
    setIsLoading(true)

    try {
      await signIn('google')
    } catch (error) {
      // toast notification
      toast({
        title: 'Error',
        description: 'There was an error logging in with Google!',
        variant: 'destructive',
      })
      setIsLoading(false)
    } finally {
    }
  }

  return (
    <div className={cn('flex flex-col gap-1', className)} {...props}>
      <Button
        isLoading={isLoading}
        type="button"
        size="sm"
        className="w-full"
        variant={'outline'}
        disabled={isLoading}
        onClick={loginWithGoogle}
      >
        {isLoading ? null : (
          <Image src="/images/google.png" alt="" width={20} height={20} />
        )}
        Sign in with Google
      </Button>
    </div>
  )
}

export default UserAuthButton
