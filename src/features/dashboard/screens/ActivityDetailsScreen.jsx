import ActivityDetailsHeader from "../components/ActivityDetailsHeader"
import ActivityDetails from "../components/ActivityDetails"
import ActivityDetailsFooter from "../components/ActivityDetailsFooter"
export default function ActivityDetailsScreen(){
    return(
        <main className="bg-[#FCF8F8] pt-20 pb-10">
           <ActivityDetailsHeader/>
           <ActivityDetails/>
           <ActivityDetailsFooter/>
        </main>
    )
}