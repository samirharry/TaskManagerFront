export function getAllTaskIds(){
    const taskIds = [
        {id:1},
        {id:2},
        {id:3},
        {id:4},
        {id:5}
    ]

    return taskIds.map(task=>{
        return {
            params:{
                id: task.id

            }
        }
    })

}