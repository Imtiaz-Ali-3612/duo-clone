"use client"

import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import Image from 'next/image'
import Link from "next/link";

// by default everything is server side
// adding use client means adding a boundry to be able to use hooks 

type Props = {
    label:string;
    iconSrc:string;
    href:string;
}

export const SidebarItem = ({label,iconSrc,href}:Props) =>{
    const pathname = usePathname();
    const active = pathname === href;
    return (
        <Button 
            variant={active ? "sidebarOutline" : "sidebar"}
            className="justify-start h-[52px]"
            asChild
        >
            <Link href={href}>
                <Image src={iconSrc} alt={label} className="mr-5" height={32} width={32} />
                {label}
            </Link>
        </Button>
    )
}