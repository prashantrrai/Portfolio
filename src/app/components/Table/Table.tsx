"use client"

import React, { useEffect, useState } from 'react'
import { useTable } from 'react-table'

const Table = () => {
    const [users, setUsers] = useState([])

    const columns = [
        {
            Header: "ID",
            accessor: "id"
        },
        {
            Header: "Name",
            accessor: "name"
        }
    ]
    // const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = useTable({
    //     columns, 
    //     users
    // })


    const fetchUsers = async () => {
        const users = await (await fetch('https://dummyjson.com/users')).json()
        // console.log(users)
        setUsers(users.users)
    }
    console.log(users)

    useEffect(() => {
        fetchUsers()

    }, [])

    return (
        <div>
            <table className='table-auto text-white border-separate border border-slate-700 border-spacing-4' >
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Phone</th>
                        <th>University</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((i: any) => (
                            <tr >
                                <td>{i.id}</td>
                                <td>{i.firstName + " " + i.lastName}</td>
                                <td>{i.email}</td>
                                <td>{i.gender}</td>
                                <td>{i.phone}</td>
                                <td>{i.university}</td>
                            </tr>
                        ))
                    }
                </tbody>
                <caption className="caption-bottom">
                    Table 3.1: Professional Students and their Designated Profile.
                </caption>
            </table>
        </div>
    )
}

export default Table
