import Block from './Block'
import Title from './Title'
import styles from './Dashboard.module.css'



export default function Dashboard({tasks, dataGraph}) {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.titleContainer}>
      <Title  title={"Manejador de Objetivos"}/>
      </div>
      <div className={styles.tasksContainer}>
      { tasks.map( task =>   <Block task={task}/>  )}
      </div>
      <div className={styles.graphContainer}>
        <div> Graficos gaaa</div>
      </div>
    </div>
  )
}
