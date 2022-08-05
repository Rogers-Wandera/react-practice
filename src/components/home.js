import React, { useState } from 'react';

const Home = () => {
    const [name, setName] = useState("");
    const [array, setArray] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault()
        array.push(name)
        setName("");
        console.log(array) 
    }

    const handleDelete = (id) => {
        setArray((arr) => arr.filter((_,index) => index !== id))
    }

    const handleEdit = (id) => {
        array.map((arr,index) => {
            if(index === id) {
               setName(arr)
               setArray((arr) => arr.filter((_,index) => index !== id))
            }
            return arr
        })
    }

    console.log(array)

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input 
                type='text' 
                name='name' 
                value={name} 
                onChange={(e) => setName(e.target.value)}
            />
            <button>Submit</button>
            </form>

            <div>
               {
                array.map((arr , i) => 
                    <ul key={i}>
                        <li>
                            {arr + " "} 
                            <button onClick={() => handleDelete(i)}>Delete</button>
                            <button onClick={() => handleEdit(i)}>Edit</button>
                        </li>
                    </ul>
                )
               }
            </div>
        </div>
    )
}

export default Home;