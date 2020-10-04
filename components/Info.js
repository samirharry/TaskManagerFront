import {useState} from 'react'
import styles from './Info.module.css'
import ViewOption from './ViewOption';
import Register from './Register';


function Info(props){
    const [register, setRegister] = useState(true)
    const [stats, setStats] = useState(false)
    const [edit, setEdit] = useState(false)

    function resetState (){
        setRegister(false)
        setStats(false)
        setEdit(false)
    }
    
    function activateRegister(){
        resetState();
        setRegister(true)
    }
    function activateStats(){
        resetState();
        setStats(true)
    }
    function activateEdit(){
        resetState();
        setEdit(true)
    }

    return (
        <div className={styles.info}>
            <div  className={styles.register} onClick={activateRegister}>
            <ViewOption title={"Registro"} />
            </div>
            <div className={styles.stats} onClick={activateStats}>
            <ViewOption  title={"Estadisticas"}/>
            </div>
            <div className={styles.edit}  onClick={activateEdit}>
            <ViewOption title={"Editar"} />
            </div>
            <div className={styles.content}>
                {register && <Register />}
                {stats && <div>Estadisticas</div>}
                {edit && <div>Ediciones</div>}
                
            </div>
        </div>
    )
}

export default Info;