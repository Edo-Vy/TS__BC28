//tsrfc
import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

type Props = {}

export default function AdminTemplates({}: Props) {
  return (
    <div className='d-flex' style={{minHeight:"100vh"}}>
        <div className='w-25 bg-dark text-white' >
            <nav className='pt-5 px-2 d-flex flex-column'>
                <NavLink to='./users'>User Management</NavLink>
                <NavLink to='./products'>Products Management</NavLink>
                <a href='#'>Menu Item 2</a>
                <a href='#'>Menu Item 3</a>
                <a href='#'>Menu Item 4</a>
                <a href='#'>Menu Item 5</a>
            </nav>
        </div>
        <div className='w-75'>
            <Outlet/>
        </div>
    </div>
  )
}