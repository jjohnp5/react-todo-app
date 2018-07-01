import React, {Component} from 'react'
import List from './List';
import {connect} from 'react-redux'
import {
    handleAddTodo,
    handleDeleteTodo,
    handleToggleTodo
} from '../actions/todos'

class Todos extends Component {
    toggleItem = (id) => {
        this.props.dispatch(handleToggleTodo(id))

    }
    addItem = (e) => {
        e.preventDefault();
        const name = this.input.value
        this.props.dispatch(handleAddTodo(name, ()=> this.input.value=''))
        
        }
    removeItem = (i) => {

        this.props.dispatch(handleDeleteTodo(i))
        
        
    }
    render() {
        return (
            <div>
                <h1>Todo List</h1>
                <input
                    type='text'
                    placeholder='Add Todo'
                    ref={(input) => this.input = input}
                />
                <button onClick={this.addItem}>Add Todo</button>
                <List items={this.props.todos}
                remove={this.removeItem} 
                toggleItem={this.toggleItem}/>

            </div>
        )
    }
}

export default connect((state)=>({
    todos: state.todos
}))(Todos)