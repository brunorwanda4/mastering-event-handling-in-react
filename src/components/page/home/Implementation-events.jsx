import React from 'react';
import BasicEvents from './events/BasicEvents';
import EventHandlers from './events/EventHandlers';
import { Element } from 'react-scroll';
import EventsImplementationLinks from './events/eventsImplementationLinks';
import EventObject from './events/EventObject';
import EventPropagation from './events/EventPropagation';
import SyntheticEvents from './events/SyntheticEvents';
import DebouncingAndThrottling from './events/DebouncingAndThrottling';

const ImplementationEvents = () => {
    const events = [
        {
            title: "Basic Event Handling",
            description: "In React, events are named using camelCase (e.g., onClick instead of onclick), and you pass a function as the event handler.",
            component: <BasicEvents />,
            element : "basic"
        },
        {
            title: "Event Handlers",
            description: "Define and pass event handlers for handling user actions.",
            component: <EventHandlers />,
            element : "handlers"
        },
        {
            title: "Event Object",
            description: "Access event properties such as type, target, and preventDefault method.",
            component: <EventObject />,
            element : "object"
        },
        {
            title: "Event Propagation",
            description: "Understand how events propagate through the DOM, including bubbling and capturing.",
            component: <EventPropagation />,
            element : "propagation"
        },
        {
            title: "Synthetic Events",
            description: "Learn how React's Synthetic Event system normalizes events across different browsers.",
            component: <SyntheticEvents />,
            element : "synthetic"
        },
        {
            title: "Debouncing and Throttling",
            description: "Optimize event performance by applying debouncing or throttling.",
            component: <DebouncingAndThrottling />,
            element : "debouncing"
        },
    ];

    return (
        <div className="min-h-screen px-32 mt-12">
            <h2 className="font-bold text-3xl text-center">Implementation of Event Handling in React</h2>
            <div className=' fixed right-12 w-60 bg-gray-200 p-2 rounded-md'><EventsImplementationLinks/></div>
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

export default ImplementationEvents;
