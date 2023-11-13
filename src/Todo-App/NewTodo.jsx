import { useState } from "react"
 
 

const NewTodo = () => {

    const [todos, setTodos] = useState([])

    const [todo, setTodo] = useState({
        names: '',
        address: ""
    })

    const handleChange = (e) => {
        const re = e.target.name
      
        setTodo((old) => {
            return { ...old, [re]: e.target.value }
        })




    }
    const handlesubmit = (e) => {
 
 
 
            e.preventDefault();
            console.log(todo)

            setTodos((prev) => {

                return [...prev, { todo }]

            })

            setTodo({
                names: '',
                address: ''
            })
           

        
        
    }


    const deleteItem = (e) => {
        e.preventDefault()
        const lenth = todos.length - 1
        const slice = todos.slice(0, lenth)

        console.log(todos)
        setTodos(slice)


    }



  

  
    return (
        <>

            <div className="container">
<h1 className="title">Todo App </h1>

                <form  onSubmit={handlesubmit}>
                    <div className="row">
                        <label htmlFor="name">name :</label>
                    <input type="text" name="names" maxLength={20} placeholder="Enter Your Name Max 20 Character" value={todo.names} onChange={handleChange}  required />
                    </div>
                    <br />
                    <div className="row">
                          <label htmlFor="name">address :</label>
                    <input type="text" name="address"  placeholder="Enter Your Name Max 40 Character" maxLength={40} value={todo.address} onChange={handleChange} required />
                    </div>



                    <abbr title="Add to button ">
                        <button type="submit" >add todo</button>
                    </abbr>
                </form>

                  {
                    todos.length === 0 ? <p>Empty Todo list </p> : todos.map((item, index) => {
                        return (
                          <div className="list_item" key={index}>
                            <div>
                              <h1>{item.todo.names}</h1>
                              <p>{item.todo.address}</p>
                            </div>
                            <div>
                              <button onClick={deleteItem}>delete</button>
                            </div>
                    
                          </div>
                        );
                    })
                }
 
                
 

            


            </div>

        </>
    )
}

export default NewTodo