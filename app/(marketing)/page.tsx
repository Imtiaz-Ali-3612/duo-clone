
import { Button } from '@/components/ui/button';
import { SignInButton, SignUpButton, SignedIn, SignedOut } from '@clerk/nextjs';
import { ClerkLoaded, ClerkLoading } from '@clerk/nextjs';
import { Loader} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link';

const Page =()=>{  
    return (
        <div className=' max-w-[988px] mx-auto flex-1 w-full flex it  flex-col lg:flex-row items-center'>
            <div className="relative w-[240px] h-[240px] lg:w-[424px] lg:h-[424px] mb-8 lg:mb-0">
                <Image src="/hero.svg" fill alt="Hero" />
            </div>
         
            <div className=' flex-1 bg-white flex flex-col items-center gap-y-3  pl-4 w-full' > 
                <div className='flex flex-col items-center gap-y-8'>
                    <h1 className='text-xl lg:text-3xl font-bold text-neutral-600 max-w-[480px] text-center'>
                        Learn, practice, and master new languages with duo.
                    </h1>
                </div>
                <ClerkLoading>
                    <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
                </ClerkLoading>
                <ClerkLoaded>
                    <SignedOut >
                        <SignUpButton
                            mode='modal'
                            fallbackRedirectUrl="/learn"
                            signInFallbackRedirectUrl="/learn"
                        >
                            <Button size={'lg'} 
                                variant={"secondary"}
                                className='w-full'
                            >
                                Get Started
                            </Button>
                        </SignUpButton>
                        <SignInButton
                            mode='modal'
                            fallbackRedirectUrl="/learn"
                            signUpFallbackRedirectUrl="/learn"
                        >
                            <Button size={'lg'}
                                variant={"primaryOutline"}
                                className='w-full'
                            >
                                I already have an account
                            </Button>
                        </SignInButton>
                    </SignedOut>
                    <SignedIn>
                        <Button size={"lg"} variant={"secondary"}
                                className="w-[320px] mt-5"
                        >
                            <Link href="/learn">
                                Continue Learning
                            </Link>

                        </Button>
                    </SignedIn>
                </ClerkLoaded>
            </div>
        </div>
    )
}
export default Page;