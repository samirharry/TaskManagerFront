
import {Calendar, momentLocalizer} from 'react-big-calendar';
import moment from 'moment';
require('moment/locale/es')
const localizer = momentLocalizer(moment);

const myEventsList= [{
    title: "today",
    start: new Date('2019-05-05 10:22:00'),
    end: new Date('2019-05-05 10:42:00')
  },
  {
    title: "string",
     start: new Date('2019-05-05 12:22:00'),
    end: new Date('2019-05-05 13:42:00')
  }]

function Register(props){
return (
<div>
    <Calendar
      localizer={localizer}
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
  </div>
)

}


export default Register;