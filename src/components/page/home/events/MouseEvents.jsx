import React from 'react';

const MouseEvents = () => {
    const handleClick = () => {
        alert('Button clicked!');
    };

    return (
        <div className='flex gap-4'>
            <div className='w-full h-60 flex justify-center items-center'>
                <button onClick={handleClick} className='btn btn-primary'>
                    Click Me
                </button>
            </div>
            <div className="p-4">
                <div className="mockup-code">
                    <pre data-prefix="1">
                        <code>
                            <span className='text-red-500'>import</span> React <span className='text-red-500'>from</span> <span className='text-blue-300'>'react'</span>;
                        </code>
                    </pre>
                    <pre data-prefix="2">
                        <code>
                            <span className='text-red-500'>const</span> MouseEvents = () ={">"} {"{"}
                        </code>
                    </pre>
                    <pre data-prefix="3">
                        <code className='ml-4'>
                            <span className='text-red-500'>const</span> handleClick = () ={">"} {"{"}
                        </code>
                    </pre>
                    <pre data-prefix="4">
                        <code className='ml-8'>
                            alert(<span className='text-blue-300'>'Button clicked!'</span>);
                        </code>
                    </pre>
                    <pre data-prefix="5">
                        <code className='ml-4'>{"}"}</code>
                    </pre>
                    <pre data-prefix="6">
                        <code className='ml-2'>
                            <span className='text-red-500'>return</span> (
                        </code>
                    </pre>
                    <pre data-prefix="7">
                        <code className='ml-4'>
                            {"<button onClick={handleClick}>Click Me</button>"}
                        </code>
                    </pre>
                    <pre data-prefix="8">
                        <code className='ml-2'>);</code>
                    </pre>
                    <pre data-prefix="9">
                        <code>{"}"}</code>
                    </pre>
                    <pre data-prefix="10">
                        <code><span className='text-red-500'>export default</span> MouseEvents</code>
                    </pre>
                </div>
            </div>
        </div>
    );
};

export default MouseEvents;
