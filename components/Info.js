import {useState} from 'react'
import styles from './Info.module.css'
import ViewOption from './ViewOption';


function Info(props){
    const [register, setRegister] = useState(true)
    const [stats, setStats] = useState(false)
    const [edit, setEdit] = useState(false)

    return (
        <div className={styles.gridContainer}>
            <ViewOption className={styles.register}/>
            <ViewOption className={styles.stats}/>
            <ViewOption className={styles.edit}/>
            {this.state.isToggleOn ? 'ON' : 'OFF'}
        </div>
    )
}

export default Info;