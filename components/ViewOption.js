import styles from './ViewOption.module.css'

function ViewOption({title}){

    return(
        <div className={styles.ViewOption}>
            {title}
        </div>
    )
}

export default ViewOption;