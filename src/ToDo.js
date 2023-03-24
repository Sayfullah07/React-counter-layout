import removeImg from '../src/images/remove.png'

function ToDo({todo, removeTask, handlerToggle}){
    return (
        <div key={todo.id} className="item-todo">
            <div className={todo.complete ? 'item-text strike': 'item-text'}
            onClick={() => handlerToggle(todo.id)}
            >
                {todo.task}
            </div>
            <div onClick={() => removeTask(todo.id)}>
                <img className='img' src={removeImg} alt=""/>
            </div>
        </div>
    )
}

export default ToDo;