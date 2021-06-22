import React,{useEffect,useState,useAsync} from 'react'
import axios from 'axios'
// import Async from 'react-async';

export default function DisplayList() {

    const [person, setperson] = useState([])



    useEffect( async() => {
           const res = await axios.get(`https://reqres.in/api/users?page=2`)
            const data  = res.data.data
            console.log(data)
            setperson(data)
            console.log(person)
    }, [])

  
    return (
        <>     

                {
                    person.map( ( items,index) => {
                        return (
                            <h1>{items.email}</h1>
                        )
                    })
                }
                <h1>List User</h1>
        </>
    )
}
