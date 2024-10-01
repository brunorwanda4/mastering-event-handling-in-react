import React, { useState } from 'react';

const DragEvents = () => {
    const [isDragging, setIsDragging] = useState(false);

    const handleDragStart = () => {
        setIsDragging(true);
    };

    const handleDragEnd = () => {
        setIsDragging(false);
    };

    return (
        <div className="flex gap-4">
            <div className="w-full h-60 flex justify-center items-center">
                <div
                    draggable
                    onDragStart={handleDragStart}
                    onDragEnd={handleDragEnd}
                    className={`w-24 h-24 ${isDragging ? 'bg-red-500' : 'bg-blue-500'} flex items-center justify-center text-white rounded-full cursor-pointer`}
                >
                    Drag Me
                </div>
            </div>
            <div className="p-4">
                <div className="mockup-code">
                    <pre data-prefix="1">
                        <code>
                            <span className="text-red-500">import</span> React, { useState } <span className="text-red-500">from</span> <span className="text-blue-300">'react'</span>;
                        </code>
                    </pre>
                    <pre data-prefix="2">
                        <code>
                            <span className="text-red-500">const</span> DragEvents = () ={">"} {"{"}
                        </code>
                    </pre>
                    <pre data-prefix="3">
                        <code className="ml-4">
                            <span className="text-red-500">const [isDragging, setIsDragging] = useState(false);</span>
                        </code>
                    </pre>
                    <pre data-prefix="4">
                        <code className="ml-4">
                            <span className="text-red-500">const handleDragStart = () ={">"} setIsDragging(true);</span>
                        </code>
                    </pre>
                    <pre data-prefix="5">
                        <code className="ml-4">
                            <span className="text-red-500">const handleDragEnd = () ={">"} setIsDragging(false);</span>
                        </code>
                    </pre>
                    <pre data-prefix="6">
                        <code className="ml-2">
                            <span className="text-red-500">return</span> (
                        </code>
                    </pre>
                    <pre data-prefix="7">
                        <code className="ml-4">
                            {"<div"}
                        </code>
                    </pre>
                    <pre data-prefix="8">
                        <code className=' ml-12'>
                            {"draggable"}
                        </code>
                    </pre>
                    <pre data-prefix="9">
                        <code className=' ml-12'>
                            {"onDragStart={handleDragStart}"}
                        </code>
                    </pre>
                    <pre data-prefix="10">
                        <code className=' ml-12'>
                            {"className='${isDragging ? 'bg-red-500' : 'bg-blue-500'}'"}
                        </code>
                    </pre>
                    <pre data-prefix="11">
                        <code className=' ml-12'>
                            {"onDragEnd={handleDragEnd}>"}
                        </code>
                    </pre>
                    <pre data-prefix="12">
                        <code className=' ml-16'>
                            {"Drag Me"}
                        </code>
                    </pre>
                    <pre data-prefix="13">
                        <code className=' ml-4'>
                            {"</div>"}
                        </code>
                    </pre>
                    <pre data-prefix="14">
                        <code className="ml-2">);</code>
                    </pre>
                    <pre data-prefix="15">
                        <code>{"}"}</code>
                    </pre>
                    <pre data-prefix="16">
                        <code><span className="text-red-500">export default</span> DragEvents;</code>
                    </pre>
                </div>
            </div>
        </div>
    );
};

export default DragEvents;
