"use client"

import React, { useEffect, useState } from 'react'
// import { useTable } from 'react-table'

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
<div className="overflow-x-auto p-2">
  <table className="min-w-full bg-transparent border-collapse">
    <thead>
      <tr className="bg-blue-500 text-white">
        <th className="p-2">#</th>
        <th className="p-2">Name</th>
        <th className="p-2">Email</th>
        <th className="p-2">Gender</th>
        <th className="p-2">Phone</th>
        <th className="p-2">University</th>
      </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
      {users.map((i: any, index) => (
        <tr key={i.id} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
          <td className="py-0 px-2">{i.id}</td>
          <td className="py-0 px-2">{i.firstName + " " + i.lastName}</td>
          <td className="py-0 px-2">{i.email}</td>
          <td className="py-0 px-2">{i.gender}</td>
          <td className="py-0 px-2">{i.phone}</td>
          <td className="py-0 px-2">{i.university}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

    )
}

export default Table
