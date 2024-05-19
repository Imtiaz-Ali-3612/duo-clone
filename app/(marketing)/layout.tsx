import {ClerkProvider} from '@clerk/nextjs'
import { Header } from './header';
import { Footer } from './footer';
type Props = {
    children:React.ReactNode
}
const MarkettingLayout = ({children}:Props) =>{
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className='flex-1 flex flex-col items-center justify-center'>
                {children}
            </main>
            <Footer />
        </div>

        
    )
}
export default MarkettingLayout;