import {useState} from 'react'


function ToDoForm({addTask}){

    const [userInput, setUserInput] = useState('')

    const handlerChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handlerSubmit = (e) => {
        e.preventDefault()
        addTask(userInput)
        setUserInput('')
    }
    return (
        <form className='form' onSubmit={handlerSubmit}>
            <input className='input'
              type="text" 
              value={userInput}
              onChange={handlerChange} 
              placeholder='Введите таск'
            />
            <button className='button'>+</button>
        </form>
    )
}

export default ToDoForm;