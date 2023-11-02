import React, {useState} from 'react';

const Todo = () => {
    const [list,setList] = useState([])
    const [item,setItem] = useState("")
    const addToDo = () =>{
        list.push(item);
        setList([...list]);
    }
    const removeItem = (i) =>{
        list.splice(i,1)
        setList([...list])
    }
    return (
        <div>
            <table>
                <tbody>
                {
                    list.length!==0 ? (
                        list.map((element,i)=>{
                            return(
                                <tr>
                                    <td>{element}</td>
                                    <td><button onClick={()=>{removeItem(i)}} >Remove</button></td>
                                </tr>
                            )
                        })
                    ) : (
                        <tr></tr>
                    )
                }
                </tbody>
            </table>
            <input type= "text" onChange={(e)=>setItem(e.target.value)} />
            <button onClick={addToDo} >Add</button>

        </div>
    );
};

export default Todo;