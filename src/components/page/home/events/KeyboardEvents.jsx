import React from 'react';

const KeyboardEvents = () => {
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            alert('Enter key pressed!');
        }
    };

    return (
        <div className='flex gap-4'>
            <div className='w-full h-60 flex justify-center items-center'>
                <input
                    type="text"
                    onKeyDown={handleKeyDown}
                    placeholder="Press Enter"
                    className="input input-bordered bg-transparent input-primary"
                />
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
                            <span className='text-red-500'>const</span> KeyboardEvents = () ={">"} {"{"}
                        </code>
                    </pre>
                    <pre data-prefix="3">
                        <code className='ml-4'>
                            <span className='text-red-500'>const</span> handleKeyDown = (event) ={">"} {"{"}
                        </code>
                    </pre>
                    <pre data-prefix="4">
                        <code className='ml-8'>
                            <span className='text-red-500'>if</span> (event.key === <span className='text-blue-300'>'Enter'</span>) {"{"}
                        </code>
                    </pre>
                    <pre data-prefix="5">
                        <code className='ml-12'>
                            alert(<span className='text-blue-300'>'Enter key pressed!'</span>);
                        </code>
                    </pre>
                    <pre data-prefix="6">
                        <code className='ml-8'>{"}"}</code>
                    </pre>
                    <pre data-prefix="7">
                        <code className='ml-2'>
                            <span className='text-red-500'>return</span> (
                        </code>
                    </pre>
                    <pre data-prefix="8">
                        <code className='ml-4'>
                            {"<input onKeyDown={handleKeyDown}"}
                        </code>
                    </pre>
                    <pre data-prefix="9">
                        <code className=' ml-6'>
                            {"placeholder='Press Enter'"}
                        </code>
                    </pre>
                    <pre data-prefix="10">
                        <code className=' ml-4'>
                            {"/>"}
                        </code>
                    </pre>
                    <pre data-prefix="11">
                        <code className='ml-2'>);</code>
                    </pre>
                    <pre data-prefix="12">
                        <code>{"}"}</code>
                    </pre>
                    <pre data-prefix="13">
                        <code><span className='text-red-500'>export default</span> KeyboardEvents</code>
                    </pre>
                </div>
            </div>
        </div>
    );
};

export default KeyboardEvents;
