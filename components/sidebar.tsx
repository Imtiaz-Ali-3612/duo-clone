import { cn } from "@/lib/utils"
import Image from 'next/image'
import Link from "next/link"
import { SidebarItem } from "./sidebar-item"
import { ClerkLoaded, ClerkLoading, UserButton} from "@clerk/nextjs"
import { Loader } from "lucide-react"

type Props = {
    className?:string
}

export const SideBar = ({className}:Props) =>{
   
    return (
        <div className={cn("flex lg:w-[256px] h-full lg:fixed left-0 top-0 px-4 border-r-2 flex-col",className)}>
            <Link href={"/learn"}>
                <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
                    <Image src="./logo.svg" height={40} width={40} alt="Mascot" />
                    <h1 className='text-2xl font-extrabold text-green-600 tracking-wide'>Duo</h1> 
                </div>
            </Link>
            <div className="flex flex-col gap-y-2 flex-1">
                <SidebarItem label="Learn" iconSrc="/learn.svg" href="/learn"></SidebarItem>
                <SidebarItem label="Leaderboard" iconSrc="/leaderboard.svg" href="/leaderboard"></SidebarItem>
                <SidebarItem label="Quest" iconSrc="/quests.svg" href="/quests"></SidebarItem>
                <SidebarItem label="Shop" iconSrc="/shop.svg" href="/shop"></SidebarItem>
            </div>
            <div className="p-4">
                <ClerkLoading>
                    <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
                </ClerkLoading>
                <ClerkLoaded>
                    <UserButton afterSignOutUrl="/" ></UserButton>
                </ClerkLoaded>
            </div>
        </div>
    )
}

