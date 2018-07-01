import API from 'goals-todos-api'

export const RECEIVE_DATA = 'RECEIVE_DATA'

export function handleInitalData(){
    return (dispatch) => {
        Promise.all([
            API.fetchTodos(),
            API.fetchGoals()
        ]).then(([todos, goals])=>{
            dispatch(receivedData(todos,goals))
        })
        
    }
}
function receivedData(todos,goals){
    return {
        type: RECEIVE_DATA,
        todos,
        goals
    }
}
