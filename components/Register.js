import styles from "./Register.module.css";
import { useState } from "react";
import Modal from "react-modal";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import Form from "./Form";
require("moment/locale/es");
const localizer = momentLocalizer(moment);

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

const myEventsList = [
  {
    title: "today",
    start: new Date("2019-05-05 10:22:00"),
    end: new Date("2019-05-05 10:42:00"),
  },
  {
    title: "string",
    start: new Date("2019-05-05 12:22:00"),
    end: new Date("2019-05-05 13:42:00"),
  },
];
Modal.setAppElement('#__next')
function Register(props) {
  const [modalIsOpen, setmodalIsOpen] = useState(false);
  const [schedule, setSchedule] = useState(null);
  const openModal = (slot) => {
    const { start, end } = slot;
    
    setSchedule({
      start,
      end
    });
    
    setmodalIsOpen(true);
    console.log(slot);
  }


  const closeModal = () => {
    setmodalIsOpen(false);
  }
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Form schedule={schedule} closeModal={closeModal} />
      </Modal>
      <div>
        <Calendar
          selectable
          localizer={localizer}
          events={myEventsList}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
          onSelectSlot={openModal}
        />
      </div>
    </>
  );
}

export default Register;
