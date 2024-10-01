import React from 'react';
import MouseEvents from './home/events/MouseEvents';
import KeyboardEvents from './home/events/KeyboardEvents';
import FormEvents from './home/events/FormEvents';
import FocusEvents from './home/events/FocusEvents';
import ChangeEvents from './home/events/ChangeEvents';
import { Element } from 'react-scroll';
import ClipboardEvents from './home/events/ClipboardEvents';
import DragEvents from './home/events/DragEvents';
import TouchEvents from './home/events/TouchEvents';
import WheelEvents from './home/events/WheelEvents';
import EventsTypesLinks from './home/events/EventsTypesLinks';

const EventTypes = () => {
    const events = [
        { 
          title: 'Mouse Events', 
          description: 'Events triggered by mouse actions like clicks and drags.', 
          component: <MouseEvents />,
          element : "mouse",
        },
        { 
          title: 'Keyboard Events', 
          description: 'Events triggered by keyboard actions like keypress or keydown.', 
          component: <KeyboardEvents />,
          element : "keyboard",
        },
        { 
          title: 'Change Events', 
          description: 'Events triggered when form inputs change.', 
          component: <ChangeEvents /> ,
          element : "change",
        },
        { 
          title: 'Form Events', 
          description: 'Events related to form submission or reset.', 
          component: <FormEvents />,
          element : "form",
        },
        { 
          title: 'Focus Events', 
          description: 'Events triggered when an element gains or loses focus.', 
          component: <FocusEvents />,
          element : "focus",

        },
        { 
          title: 'Clipboard Events', 
          description: 'Events related to copying, cutting, or pasting content.', 
          component: <ClipboardEvents /> ,
          element : "clipboard",
        },
        { 
          title: 'Drag Events', 
          description: 'Events related to drag and drop interactions.', 
          component: <DragEvents /> ,
          element : "drag",
        },
        { 
          title: 'Touch Events', 
          description: 'Events triggered by touch interactions (primarily for mobile).', 
          component: <TouchEvents /> ,
          element : "touch",
        },
        { 
          title: 'Wheel Events', 
          description: 'Events triggered by mouse wheel actions.', 
          component: <WheelEvents /> ,
          element : "wheel",
        },
    ];

    return (
        <div className="min-h-screen px-32 mt-12">
            <h2 className="font-bold text-3xl text-center">Event Types in React</h2>
            <div className=' fixed right-12 w-60 bg-gray-200 p-2 rounded-md'><EventsTypesLinks/></div>
            <div className="mt-5 mr-52">
                {events.map((event, index) => (
                    <Element id={event.element} key={index} className="mt-8">
                        <div className="flex gap-2 text-xl font-semibold">
                            <span className="size-8 flex items-center justify-center text-center font-bold">
                                {index + 1}.
                            </span>
                            <h4>{event.title}</h4>
                        </div>
                        <div className="">
                            <p className=" mt-2 ml-6">{event.description}</p>
                            <div className="mt-4">{event.component}</div>
                        </div>
                    </Element>
                ))}
            </div>
        </div>
    );
};

export default EventTypes;
