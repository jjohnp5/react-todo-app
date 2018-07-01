import API from 'goals-todos-api'

export const ADD_GOAL = 'ADD_GOAL'
export const REMOVE_GOAL = 'REMOVE_GOAL'



function addGoal(goal){
    return {
        type: ADD_GOAL,
        goal
    }
}
function removeGoal(id){
    return {
        type: REMOVE_GOAL,
        id
    }
}


export function handleAddGoal(goal, e){
    return (dispatch) => {
        return API.saveGoal(goal)
            .then(g=>{
                dispatch(addGoal(g))
                e()
            }).catch(()=>{
                e()
                alert('Error adding goal');
                
            })
    }
}
export function handleRemoveGoal(i){
    return (dispatch) => {
        dispatch(removeGoal(i.id))
        return API.deleteGoal(i.id)
            .catch(()=>{
                dispatch(addGoal(i))
                alert('An error Occured deleting goal')
            })
    }
}