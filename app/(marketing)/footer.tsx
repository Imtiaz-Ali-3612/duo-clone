import { Button } from "@/components/ui/button"
import Image from 'next/image'

export const Footer = () =>{
    return (
        <footer className="hidden  lg:block h-20 w-full border-t-2  border-slate-200 p-2">
            <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
                <Button size="lg" variant="ghost" className="w-full">
                    <Image src="/flags/de.svg" alt="Russian" height={32} width={40} className="mr-4 rounded-md"/>
                    Deutsch
                </Button>
                <Button size="lg" variant="ghost" className="w-full">
                    <Image src="/flags/ru.svg" alt="Russian" height={32} width={40} className="mr-4 rounded-md"/>
                    Russian
                </Button>
                <Button size="lg" variant="ghost" className="w-full">
                    <Image src="/flags/jp.svg" alt="Russian" height={32} width={40} className="mr-4 rounded-md"/>
                    Japenese
                </Button>
            </div> 
        </footer>
    )
}