import { useEffect, useState } from "react"
import { QuoteApp } from './quotes'
import { TodoForm } from './todos'

export const GreetApp = () =>{

    const USERNAME_KEY = "username"
    const savedUsername = localStorage.getItem(USERNAME_KEY)

    const [ hide, setHide ] = useState("")
    const [ name, setName ] = useState("")

    useEffect(()=>{
        localStorage.setItem( USERNAME_KEY, "Guest" )
    },[])

    useEffect(()=>{
        if(savedUsername !== null){
            setHide("hidden")
            setName(savedUsername)
        }else{
            setHide("")
            }
        },[savedUsername])

    function loginSubmit(event){
        event.preventDefault()
        let inputName = event.target.previousSibling.value

        if (inputName !== ""){
        setName(inputName)
        localStorage.setItem( USERNAME_KEY, inputName )
        console.log("loginsubmit run")
        }
    }
        
    return(
        <div>
            {hide === "hidden" && <h1 id="greeting" >Hello, {name}</h1>}
            <div id="login" className={hide}>
                <form>
                    <input
                    id="login-input"
                    required 
                    maxLength="15" 
                    placeholder="What is your name?"
                    />
                    <button onClick={loginSubmit}>login</button>
                </form>
            </div>


        </div>
    )
}

export const TodoApp = () => {
    
    const USERNAME_KEY = "username"
    const savedUsername = localStorage.getItem(USERNAME_KEY)

    const [ hide, setHide ] = useState("")
    const [ name, setName ] = useState("")

    useEffect(()=>{
        localStorage.setItem( USERNAME_KEY, "Guest" )
    },[])

    useEffect(()=>{

        if(savedUsername !== null){
            setHide("hidden")
            setName(savedUsername)
        }else{
            setHide("")
            }
        },[savedUsername])

    return(
        <div id={name}>
            <div className="container">
                {hide === "hidden" && <TodoForm />}
                {hide === "hidden" && <QuoteApp />}
            </div>
        </div>

    )
}