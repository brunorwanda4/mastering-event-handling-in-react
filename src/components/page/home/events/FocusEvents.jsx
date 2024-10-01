import React, { useState } from 'react';

const FocusEvents = () => {
    const [message, setMessage] = useState('');

    const handleFocus = () => {
        setMessage('Input focused! ✅');
    };

    const handleBlur = () => {
        setMessage('Input lost focus! 😡');
    };

    return (
        <div className='flex gap-4'>
            <div className='w-full h-60 flex justify-center items-center'>
                <div className='flex flex-col gap-2'>
                    <input
                        type="text"
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        placeholder="Focus on this input"
                        className="input input-bordered input-primary bg-transparent"
                    />
                    <span className='font-medium'>{message}</span>
                </div>
            </div>
            <div className="">
                <div className="mockup-code">
                    <pre data-prefix="1">
                        <code>
                            <span className='text-red-500'>import</span> React <span className='text-red-500'>from</span> <span className='text-blue-300'>'react'</span>;
                        </code>
                    </pre>
                    <pre data-prefix="2">
                        <code>
                            <span className='text-red-500'>const</span> FocusEvents = () ={">"} {"{"}
                        </code>
                    </pre>
                    <pre data-prefix="3">
                        <code className='ml-4'>
                            <span className='text-red-500'>const [message, setMessage] = useState('');</span>
                        </code>
                    </pre>
                    <pre data-prefix="4">
                        <code className='ml-4'>
                            <span className='text-red-500'>const handleFocus = () ={">"} setMessage(<span className='text-blue-300'>'Input focused!'</span>);</span>
                        </code>
                    </pre>
                    <pre data-prefix="5">
                        <code className='ml-4'>
                            <span className='text-red-500'>const handleBlur = () ={">"} setMessage(<span className='text-blue-300'>'Input lost focus!'</span>);</span>
                        </code>
                    </pre>
                    <pre data-prefix="6">
                        <code className='ml-2'>
                            <span className='text-red-500'>return</span> (
                        </code>
                    </pre>
                    <pre  data-prefix="7">
                        <code className=' ml-2'>
                            {"<div>"}
                        </code>
                    </pre>
                    <pre data-prefix="8">
                        <code className='ml-4'>
                            {"<input "}
                        </code>
                    </pre>
                    <pre data-prefix="9">
                        <code className=' ml-12'>
                            {"onFocus={handleFocus}"}
                        </code>
                    </pre>
                    <pre data-prefix="10">
                        <code className=' ml-12'>
                            {"onFocus={handleFocus}"}
                        </code>
                    </pre>
                    <pre data-prefix="11">
                        <code className=' ml-12'>
                            {"onBlur={handleBlur}"}
                        </code>
                    </pre>
                    <pre data-prefix="12">
                        <code className=' ml-12'>
                            {"placeholder='Focus on this input'"}
                        </code>
                    </pre>
                    <pre data-prefix="13">
                        <code className=' ml-4'>
                            {"/>"}
                        </code>
                    </pre>
                    <pre data-prefix="14">
                        <code className='ml-4'>
                            {"<span>{message}</span>"}
                        </code>
                    </pre>
                    <pre  data-prefix="15">
                        <code className=' ml-2'>
                            {"<div>"}
                        </code>
                    </pre>
                    <pre data-prefix="16">
                        <code className='ml-2'>);</code>
                    </pre>
                    <pre data-prefix="17">
                        <code>{"}"}</code>
                    </pre>
                    <pre data-prefix="18">
                        <code><span className='text-red-500'>export default</span> FocusEvents</code>
                    </pre>
                </div>
            </div>
        </div>
    );
};

export default FocusEvents;
