import styles from './Task.module.css'
import Title from './Title'
import Menu from './Menu'
import Info from './Info'


function Task({task}){
    return (
    <div className={styles.task}>
        <div className={styles.titleContainer}>
            <Title title={task.name}/>
        </div>
        <div className={styles.menuContainer} >
            <Menu taskActive = {task.id} />
        </div>
        <div className={styles.infoContainer}>
            <Info />
        </div>        
    </div>
    );
}

export default Task;