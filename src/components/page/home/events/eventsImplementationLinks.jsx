import React from 'react'
import { Link } from 'react-scroll'

const EventsImplementationLinks = () => {
    const links = [
        {
            to : "basic",
            label : "Basic Event Handling"
        },
        {
            to : "handlers",
            label : "Event Handling"
        },
        {
            to : "object",
            label : "Event Object"
        },
        {
            to : "propagation",
            label : "Event Propagation"
        },
        {
            to : "synthetic",
            label : "Synthetic Events"
        },
        {
            to : "debouncing",
            label : "Debouncing and Throttling"
        },

    ]
  return (
    <div className=' flex flex-col gap-3'>
        {links.map((items) => {
            return (
                <Link className=' btn btn-sm btn-ghost justify-start' smooth spy activeClass="text-primary" to={items.to}>{items.label}</Link>
            )
        })}
    </div>
  )
}

export default EventsImplementationLinks