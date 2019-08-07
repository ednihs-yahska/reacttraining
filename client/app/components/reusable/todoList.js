import React from 'react'
import Todo from './todo'
import styled from 'styled-components'

const StyledTodoList = styled.div`
    display: flex;
    margin: 10px;
    font-family: sans-serif;
    flex-direction: column;
    width: 500px;
    background: #016aa7;
    border-radius: 10px;
    box-shadow: 0 0 20px 0px #222;
`

function TodoList({list, toggleDone}) {
    return (
        <StyledTodoList>
        {    
            list.map((todo, key)=>(
                <Todo key={key} todo={todo} toggleDone={toggleDone}/>
            ))
        }
        </StyledTodoList>
    )
}

export default TodoList