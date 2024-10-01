import React, { useState } from 'react';

const ChangeEvents = () => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div className="flex gap-4">
            <div className="w-full h-60 flex justify-center items-center">
                <div className=' flex flex-col gap-2'>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleChange}
                        placeholder="Type something"
                        className="input input-bordered bg-transparent input-primary"
                    />
                    <span>Input type: <span className=' font-semibold'>{inputValue}</span></span>
                </div>
            </div>
            <div className="p-4">
                <div className="mockup-code">
                    <pre data-prefix="1">
                        <code>
                            <span className="text-red-500">import</span> React, {'{ useState }'} <span className="text-red-500">from</span> <span className="text-blue-300">'react'</span>;
                        </code>
                    </pre>
                    <pre data-prefix="2">
                        <code>
                            <span className="text-red-500">const</span> ChangeEvents = () ={">"} {'{'}
                        </code>
                    </pre>
                    <pre data-prefix="3">
                        <code className="ml-4">
                            <span className="text-red-500">const [inputValue, setInputValue]</span> = useState('');
                        </code>
                    </pre>
                    <pre data-prefix="4">
                        <code className="ml-4">
                            <span className="text-red-500">const handleChange = (event) ={">"} {'{'}</span>
                        </code>
                    </pre>
                    <pre data-prefix="5">
                        <code className="ml-8">setInputValue(event.target.value);</code>
                    </pre>
                    <pre data-prefix="6">
                        <code className="ml-4">{'}'};</code>
                    </pre>
                    <pre data-prefix="7">
                        <code className="ml-2">
                            <span className="text-red-500">return</span> (
                        </code>
                    </pre>
                    <pre data-prefix="8">
                        <code className="ml-4">
                            {"<input type='text'"}
                        </code>
                    </pre>
                    <pre data-prefix="9">
                        <code className=' ml-12'>
                            {"value={inputValue}"}
                        </code>
                    </pre>
                    <pre data-prefix="10">
                        <code className=' ml-12'>
                            {"onChange={handleChange}"}
                        </code>
                    </pre>
                    <pre data-prefix="11">
                        <code className=' ml-12'>
                            {"placeholder='Type something'"}
                        </code>
                    </pre>
                    <pre data-prefix="12">
                        <code className=' ml-4'>
                            {"/>"}
                        </code>
                    </pre>
                    <pre data-prefix="13">
                        <code className="ml-2">);</code>
                    </pre>
                    <pre data-prefix="14">
                        <code>{'}'}</code>
                    </pre>
                    <pre data-prefix="15">
                        <code><span className="text-red-500">export default</span> ChangeEvents;</code>
                    </pre>
                </div>
            </div>
        </div>
    );
};

export default ChangeEvents;
