import React from 'react'
import { Link, NavLink, useNavigation, useRoutes } from 'react-router-dom'

const SiteNav = () => {
  return (
    <div data-theme="light" className="navbar bg-base-100 px-12">
        <div className="navbar-start ">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
               S5 Sod <span></span>
            </div>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <li><NavLink to={"/"}></NavLink></li>
                <li>
                <NavLink to={"/event"}>Events</NavLink>
                <ul className="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                </ul>
                </li>
                <li><a>Item 3</a></li>
            </ul>
            </div>
            <a className="btn btn-ghost text-xl ">L5 SOD B</a>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-3">
            <li><NavLink to={"/"}>Home</NavLink></li>   
            {/* <li>
                <details>
                <summary>Event</summary>
                <ul className="p-2 w-60">
                    <li><NavLink to={"/event#about"}>About Event</NavLink></li>
                    <li><a>Submenu 2</a></li>
                </ul>
                </details>
            </li> */}
            <li><NavLink to={"/implementation"}>Implementation of events</NavLink></li>
            <li><NavLink to={"/event"}>Types of Events</NavLink></li>
            </ul>
        </div>
        <div className="navbar-end">
            <a className="btn">Frontend with React</a>
        </div>
        </div>
  )
}

export default SiteNav
