import CreateEventForm from "../components/CreateEventForm";
import ViewEventAttend from "../components/ViewEventAttend";
import ViewInvites from "../components/ViewInvites";
import ViewEventsCreated from "../components/ViewEventsCreated";

const MyEvents = ()=>{
    return (
      <div>
        <CreateEventForm />
        <ViewInvites/>
        <ViewEventAttend/>
        <ViewEventsCreated/>
      </div>
    );
}


export default MyEvents