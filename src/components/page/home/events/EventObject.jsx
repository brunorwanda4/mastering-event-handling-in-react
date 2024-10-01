import React, { useState } from 'react';

const EventObject = () => {
    const [someThing , setSomething] = useState("");
    const handleChange = (event) => {
        setSomething(event.target.value);
        console.log('Event Target:', event.target.value);
    };

    return (
        <div className='flex gap-4'>
            <div className='w-full h-60 flex justify-center items-center'>
                <div>
                <input
                    type="text"
                    placeholder="Type something"
                    onChange={handleChange}
                    className="input input-bordered bg-transparent input-primary"
                />
                <span className=' '>Input value: <span className=' font-semibold'>{someThing}</span></span>
                </div>
            </div>
            <div className="p-4">
                <div className="mockup-code">
                    <pre data-prefix="1">
                        <code>
                            <span className='text-red-500'>import</span> React {" "}
                            <span className='text-red-500'>from</span> <span className='text-blue-300'>'react'</span>
                        </code>
                    </pre>
                    <pre data-prefix="2">
                        <code>
                            <span className='text-red-500'>const</span> EventObject = () =&gt; {"{"}
                        </code>
                    </pre>
                    <pre data-prefix="3">
                        <code className='ml-4'>
                            <span className='text-red-500'>const</span> handleChange = (event) =&gt; {"{"}
                        </code>
                    </pre>
                    <pre data-prefix="4">
                        <code className='ml-8'>
                            console.log('Event Target:', event.target.value);
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
                            {"<input type='text' onChange={handleChange} />"}
                        </code>
                    </pre>
                    <pre data-prefix="8">
                        <code className='ml-2'>);</code>
                    </pre>
                    <pre data-prefix="9">
                        <code>{"}"}</code>
                    </pre>
                    <pre data-prefix="10">
                        <code><span className='text-red-500'>export default</span> EventObject</code>
                    </pre>
                </div>
            </div>
        </div>
    );
};

export default EventObject;
