import styles from './Form.module.css';

function Form(props){
    return (
        <div className={styles.formContainer}>
            <span className={styles.close} onClick={props.closeModal} >&times;</span>
            <form className={styles.form}>
            <div>
            <label>Fecha y hora de Inicio</label>
            <input type='datetime-local' value={props.schedule.start}></input>

            </div>
            </form>

        </div>
    )
}

export default Form;