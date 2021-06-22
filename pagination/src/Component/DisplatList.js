import React, { useEffect, useState, useAsync } from 'react'
import axios from 'axios'
import Pagination from './Pagination';
import 'bootstrap/dist/css/bootstrap.min.css'

export default function DisplayList() {

    const [person, setperson] = useState([])
    const [showPerPage, setShowPerPage] = useState(3);
    const [pagination, setPagination] = useState({
        start: 0,
        end: showPerPage,
    });

    const onPaginationChange = (start, end) => {
        setPagination({ start: start, end: end });
    };



    useEffect(async () => {
        const res = await axios.get(`https://reqres.in/api/users?page=2`)
        const data = res.data.data
        console.log(data)
        setperson(data)
        console.log(person)
    }, [])


    return (
        <>
            <div lassName="card d-flex justify-content-center">
                {
                    person.slice(pagination.start, pagination.end).map((items, index) => {
                        return (

                            <div className=" d-flex ps-5 bd-highlight mt-5 pl-3" style={{ width: "18rem" }} key={index}>

                                <div class="card-body" className="card-img-top">
                                    <img src={items.avatar} />
                                    
                                </div>
                                <div class="card-body">
                                    <p className="card-text"><span>Full Name: </span> {items.first_name} {items.last_name}<br /></p>
                                    <p className="card-text"><span>Email: </span>{items.email}</p>
                                </div>

                            </div>

                        )
                    })
                }
            </div>

            <Pagination
                showPerPage={showPerPage}
                onPaginationChange={onPaginationChange}
                total={person.length}
            />

        </>
    )
}
