import { useEffect , useState } from "react"
import done from '../img/done.png'
import del from '../img/del.png'

export const TodoForm = () => {

    const TODOS_KEY = "todo"

    const [ todoArr , setTodoArr ] = useState([])

    useEffect(()=>{
        const data = localStorage.getItem(TODOS_KEY)
        if (data !== null && data !== ''){
            setTodoArr(data.split(","))
            console.log("you have todos")
        }
    },[])

    useEffect(()=>{
        const contain = document.querySelector("#todo-container")
        const data = localStorage.getItem(TODOS_KEY)
        if (data !== null && data !== ''){
            contain.classList.remove("hidden")
        } else{
            contain.classList.add("hidden")
        }
        },[todoArr])

    const handelSubmit = (event) => {
        if(event.key === 'Enter') {
        event.preventDefault()
        const Answer = event.target.value
        event.target.value = ""

        let result = []
        todoArr.forEach((item)=>{result.push(item)})
        result.push(Answer)
        setTodoArr(result)
        localStorage.setItem(TODOS_KEY, result)
        }
    }

    const doneBtn = (event) =>{
        const target_1 = event.target
        target_1.classList.toggle("clicked")
        const target_2 = event.target.nextSibling
        target_2.classList.toggle("check-line")

    }

    const delBtn = (event) => {
        const result = todoArr.filter((_, index) => index.toString() !== event.target.id)
        setTodoArr(result)
        localStorage.setItem(TODOS_KEY, result)
    }

    return(
        <div>
            <div>
                <form id="todo-form">
                <div>What are you focus today?</div>
                <input 
                id="todo-input" 
                required
                onKeyDown={handelSubmit}
                />
                </form>
            </div>

            <div id="todo-container">
                {                    
                    todoArr.map((item, index)=>{
                            return(
                                <div className="todo-item" id={index} key={index}>
                                    <img id={index} src={done} alt="check" onClick={doneBtn}></img>
                                    <div id={index}>{item}</div>
                                    <img id={index} src={del} alt="del" onClick={delBtn}></img>
                                </div>
                            )
                        }
                    )
                }
            </div>  
        </div>
    )
}
