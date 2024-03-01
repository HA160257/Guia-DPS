"use client"
import React,{useState} from 'react'
import Todo from './Todo'
import styles from "../page.module.css"

const Form = () => {
    const [todo, setTodo] = useState({
        todo: '',
        todo1: '',
        todo2: '',
        todo3: ''
    });
    
    const [todos, setTodos] = useState([
        { todo: 'Pick Up',
         todo1: 'Toyota Hilux', 
         todo2: '2',
          todo3: '50000' }       
        
    ]);

    const handleChange = e => {
        const { name, value } = e.target;
        setTodo(prevTodo => ({
            ...prevTodo,
            [name]: value
        }));
    };

    const handleClick = e => {
        e.preventDefault();
        if (Object.values(todo).some(value => value.trim() === '')) {
            alert('Todos los campos deben ser completados');
            return;
        }
        setTodos([...todos, todo]);
        setTodo({ todo: '', todo1: '', todo2: '', todo3: '' });
    };

    const deleteTodo = indice => {
        const newTodos = [...todos];
        newTodos.splice(indice, 1);
        setTodos(newTodos);
    };

    return (
        <>
            <form onSubmit={e => e.preventDefault()}>
                <label>Nombre Producto</label><br/>
                <input className={styles.form_input} type="text" name='todo' value={todo.todo} onChange={handleChange} /><br/>

                <label>Marca del producto</label><br/>
                <input className={styles.form_input} type="text" name='todo1' value={todo.todo1} onChange={handleChange} /><br/>

                <label>Cantidad del producto</label><br/>
                <input className={styles.form_input} type="text" name='todo2' value={todo.todo2} onChange={handleChange} /><br/>

                <label>Precio del Producto</label><br/>
                <input className={styles.form_input} type="text" name='todo3' value={todo.todo3} onChange={handleChange} /><br/><br/>

                <button className={styles.form_button} onClick={handleClick}>Agregar el producto</button>
            </form>
            
            {todos.map((value, index) => (
                <Todo todo={value} key={index} deleteTodo={() => deleteTodo(index)} />
            ))}
        </>
    );
};

export default Form;