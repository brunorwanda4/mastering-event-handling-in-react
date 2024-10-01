import React, { useState } from 'react';

const WheelEvents = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleWheel = (event) => {
        console.log('Scroll event detected:', event.deltaY); // Logs the scroll event
        setScrollPosition(prev => {
            const newPosition = prev + event.deltaY;
            console.log('Updated scroll position:', newPosition); // Logs the updated scroll position
            return newPosition;
        });
    };
    

    return (
        <div className="flex gap-4 flex-col">
            <div className="w-full flex justify-center items-center">
                <div
                    onWheel={handleWheel}
                    className="w-48 h-48 bg-yellow-500 flex items-center justify-center text-black rounded-full"
                >
                    Scroll Position: {scrollPosition}
                </div>
            </div>
            <div className="">
                <div className="mockup-code">
                    <pre data-prefix="1">
                        <code>
                            <span className="text-red-500">import</span> React, { useState } <span className="text-red-500">from</span> <span className="text-blue-300">'react'</span>;
                        </code>
                    </pre>
                    <pre data-prefix="2">
                        <code>
                            <span className="text-red-500">const</span> WheelEvents = () ={">"} {"{"}
                        </code>
                    </pre>
                    <pre data-prefix="3">
                        <code className="ml-4">
                            <span className="text-red-500">const [scrollPosition, setScrollPosition] = useState(0);</span>
                        </code>
                    </pre>
                    <pre data-prefix="4">
                        <code className="ml-4">
                            <span className="text-red-500">const handleWheel = (event) ={">"} setScrollPosition(prev ={">"} prev + event.deltaY);</span>
                        </code>
                    </pre>
                    <pre data-prefix="5">
                        <code className="ml-2">
                            <span className="text-red-500">return</span> (
                        </code>
                    </pre>
                    <pre data-prefix="6">
                        <code className="ml-4">
                            {"<div onWheel={handleWheel}>Scroll Position: {scrollPosition}</div>"}
                        </code>
                    </pre>
                    <pre data-prefix="7">
                        <code className="ml-2">);</code>
                    </pre>
                    <pre data-prefix="8">
                        <code>{"}"}</code>
                    </pre>
                    <pre data-prefix="9">
                        <code><span className="text-red-500">export default</span> WheelEvents;</code>
                    </pre>
                </div>
            </div>
        </div>
    );
};

export default WheelEvents;
