import { FeedWrapper } from "@/components/feed-wrapper"
import { StickyWrapper } from "@/components/sticky-wrapper"
import { Header } from "./header"
import { UserProgress } from "@/components/user-progress"


const LearnPage = () =>{
    return (
        <div className="flex flex-row-reverse gap-[48px] px-6 pt-2">
            <StickyWrapper>
                 <UserProgress 
                    activeCourse  = {{
                        title:"Deutsch",
                        imageSrc:"/flags/de.svg"
                    }}
                    hearts= {5}
                    points = {100}
                    hasActiveSubscription={false}
                 >

                 </UserProgress>
            </StickyWrapper>
            <FeedWrapper >
                <Header title="Deutsch" />
            </FeedWrapper>
        </div>
    )
}
export default LearnPage