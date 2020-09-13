import Link from 'next/link';
import styles from './Block.module.css'

function Block({task}){
    let classes = [styles.block];
    classes.push(task.isCompleted?styles.isCompleted:"");
    classes.push(task.isPending?styles.isPending:"");
    return (
        <Link href = '/tasks/[id]' as={`/tasks/${task.id}`} >
        <div className={`${classes.join(" ")}`} >
            {task.name}
        </div>
        </Link>
    )
}

export default Block;
