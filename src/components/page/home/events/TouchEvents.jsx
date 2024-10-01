import React, { useState } from 'react';

const TouchEvents = () => {
    const [touchStatus, setTouchStatus] = useState('Touch me!');
    const [isTouching, setIsTouching] = useState(false)

    const handleTouchStart = () => {
        setTouchStatus('Touch started!');
        setIsTouching(true);
    };

    const handleTouchEnd = () => {
        setTouchStatus('Touch ended!');
        setIsTouching(false);
    };

    return (
        <div className="flex gap-4 flex-col">
            <div className="w-full flex justify-center items-center">
                <div
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                    className={`w-48 h-48 bg-green-500 flex items-center justify-center text-white rounded-full ${ isTouching && "bg-yellow-500"}`}
                >
                    {touchStatus}
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
                            <span className="text-red-500">const</span> TouchEvents = () ={">"} {"{"}
                        </code>
                    </pre>
                    <pre data-prefix="3">
                        <code className="ml-4">
                            <span className="text-red-500">const [touchStatus, setTouchStatus] = useState('Touch me!');</span>
                        </code>
                    </pre>
                    <pre data-prefix="4">
                        <code className="ml-4">
                            <span className="text-red-500">const handleTouchStart = () ={">"} setTouchStatus('Touch started!');</span>
                        </code>
                    </pre>
                    <pre data-prefix="5">
                        <code className="ml-4">
                            <span className="text-red-500">const handleTouchEnd = () ={">"} setTouchStatus('Touch ended!');</span>
                        </code>
                    </pre>
                    <pre data-prefix="6">
                        <code className="ml-2">
                            <span className="text-red-500">return</span> (
                        </code>
                    </pre>
                    <pre data-prefix="7">
                        <code className="ml-4">
                            {"<div onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>Touch me</div>"}
                        </code>
                    </pre>
                    <pre data-prefix="8">
                        <code className="ml-2">);</code>
                    </pre>
                    <pre data-prefix="9">
                        <code>{"}"}</code>
                    </pre>
                    <pre data-prefix="10">
                        <code><span className="text-red-500">export default</span> TouchEvents;</code>
                    </pre>
                </div>
            </div>
        </div>
    );
};

export default TouchEvents;
