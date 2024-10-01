import { Link } from "react-scroll"

const EventsTypesLinks = () => {
    const links = [
        {
            to : "mouse",
            label : "Mouse Events"
        },
        {
            to : "keyboard",
            label : "Keyboard Events"
        },
        {
            to : "change",
            label : "Change Events"
        },
        {
            to : "form",
            label : "Form Events"
        },
        {
            to : "clipboard",
            label : "Clipboard Events"
        },
        {
            to : "drag",
            label : "Drag Events"
        },
        {
            to : "touch",
            label : "Touch Events"
        },
        {
            to : "wheel",
            label : "Wheel Events"
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

export default EventsTypesLinks