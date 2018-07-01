import API from 'goals-todos-api'


export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'


 function addTodo(todo){
    return {
        type: ADD_TODO,
        todo
    }
}
 function removeTodo(id){
    return {
        type: REMOVE_TODO,
        id
    }
}
 function toggleTodo(id){
    return {
        type: TOGGLE_TODO,
        id
    }
}


export function handleDeleteTodo(i){
    return (dispatch)=>{
        dispatch(removeTodo(i.id))
        return API.deleteTodo(i.id)
            .catch(()=>{
                dispatch(addTodo(i))
                alert('an error occured');
            })
    }
    
}
export function handleToggleTodo(id){
    return (dispatch) => {
        dispatch(toggleTodo(id))
        return API.saveTodoToggle(id)
            .catch(()=>{
                dispatch(toggleTodo(id))
                alert('error toggling todo.')
            })
    }
}

export function handleAddTodo(name, e){
    return (dispatch) => {
        return API.saveTodo(name)
            .then((todo)=>{
                dispatch(addTodo(todo))
                e()
            }).catch(()=>{
                e()
                alert('Error adding todo.')
            })
    }
}