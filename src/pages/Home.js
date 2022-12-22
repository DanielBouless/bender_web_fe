import { CurrentUser } from '../context/CurrentUser'
import { useContext } from 'react'
import LoginOrSignUp from '../components/LoginOrSignUp'
import EventCard from '../components/EventCard'

const Home = ()=>{

    const { currentUser } = useContext(CurrentUser)

    console.log(currentUser)
    const loginActions = currentUser ? (
     <EventCard/>
    ) : (
      <LoginOrSignUp />
    );

    

    return( 
        <div>
            {loginActions}
        </div>
    )
}


export default Home