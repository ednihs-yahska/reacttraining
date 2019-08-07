import React from 'react'
import styled, {css} from 'styled-components'

const StyledTodo = styled.div`
    display: flex;
    font-family: sans-serif;
    justify-content: center;
    align-items: center;
    height: 60px;
    padding: 10px;
    margin: 20px;
    background: #222;
    color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 20px 0px #555;
`

const Name = styled.div`
    display: flex;
    text-decoration: none;
    ${
        props => props.done && css`
            text-decoration: line-through;
        `
    }
`

const Done = styled.button`
    display: flex;
    margin-left: auto;
`

function Todo({todo, toggleDone}){
    return(
        <StyledTodo>
            <Name done={todo.done}> 
                {todo.name}
            </Name>
            <Done onClick={()=>toggleDone(todo.id)}>
                {todo.done &&
                    "Mark Undone"
                }
                {!todo.done &&
                    "Mark Done"
                }
            </Done>
        </StyledTodo>
    )
}

export default Todo