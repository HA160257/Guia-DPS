import React,{useState} from 'react'
import styles from "../page.module.css"

const Todo = ({todo, index,deleteTodo}) => {
return (
    <>
    <div className={styles.list}>
    <h3 className='Titulo3'>{todo.todo} {todo.todo1} {todo.todo2} {todo.todo3}</h3>
        <button className={styles.btn_delete} onClick={()=>deleteTodo(index)}>  Eliminar </button>
    </div>
    </>

)
}
export default Todo