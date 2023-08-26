import UserAuthButton from '@/components/UserAuthButton'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="w-screen h-fit lg:h-[40rem] px-32 grid place-items-center">
      <div className=" h-full shadow-2xl rounded-md flex flex-col md:flex-row md:h-[70%] md:w-full lg:w-[60%] 2xl:w-1/2">
        <div className="relative h-1/3 w-full md:h-full md:w-1/2">
          <Image src="/images/login.png" alt="" fill className="object-cover" />
        </div>
        <div className="p-10 flex flex-col gap-8 md:w-1/2">
          <h1 className="font-bold text-xl xl:text-3xl">Welcome!😋</h1>
          <p>Log into your account or create a new one using social buttons</p>
          <UserAuthButton />
          <Button disabled variant={'outline'}>
            <Image
              src="/images/facebook.png"
              alt=""
              width={20}
              height={20}
              className="object-contain"
            />
            <span>Sign in with Facebook</span>
          </Button>
          <p className="text-sm">
            Have a problem?
            <Link className="underline" href="/contact">
              {' '}
              Contact us
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default page
