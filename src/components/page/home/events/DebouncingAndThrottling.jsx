import React, { useState } from 'react';
import _ from 'lodash';  // Assuming lodash for debouncing and throttling

const DebouncingAndThrottling = () => {
    const [inputValue, setInputValue] = useState('');

    const handleDebouncedChange = _.debounce((value) => {
        console.log('Debounced Input:', value);
    }, 500);

    const handleChange = (event) => {
        const value = event.target.value;
        setInputValue(value);
        handleDebouncedChange(value);
    };

    return (
        <div className='flex gap-4'>
            <div className='w-full h-60 flex justify-center items-center'>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                    placeholder="Debounced input"
                    className="input input-bordered input-primary bg-transparent"
                />
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
                            <span className='text-red-500'>import</span> _ <span className='text-red-500'>from</span> <span className='text-blue-300'>'lodash'</span>;
                        </code>
                    </pre>
                    <pre data-prefix="3">
                        <code>
                            <span className='text-red-500'>const</span> DebouncingAndThrottling = () =&gt; {"{"}
                        </code>
                    </pre>
                    <pre data-prefix="4">
                        <code className='ml-4'>
                            <span className='text-red-500'>const</span> [inputValue, setInputValue] = <span className='text-blue-300'>useState</span>('');
                        </code>
                    </pre>
                    <pre data-prefix="5">
                        <code className='ml-4'>
                            <span className='text-red-500'>const</span> handleDebouncedChange = _.debounce((value) =&gt; {"{"}
                        </code>
                    </pre>
                    <pre data-prefix="6">
                        <code className='ml-8'>
                            console.log('Debounced Input:', value);
                        </code>
                    </pre>
                    <pre data-prefix="7">
                        <code className='ml-4'>{"}, 500);"}</code>
                    </pre>
                    <pre data-prefix="8">
                        <code className='ml-4'>
                            <span className='text-red-500'>const</span> handleChange = (event) =&gt; {"{"}
                        </code>
                    </pre>
                    <pre data-prefix="9">
                        <code className='ml-8'>
                            const value = event.target.value;
                        </code>
                    </pre>
                    <pre data-prefix="10">
                        <code className='ml-8'>
                            setInputValue(value);
                        </code>
                    </pre>
                    <pre data-prefix="11">
                        <code className='ml-8'>
                            handleDebouncedChange(value);
                        </code>
                    </pre>
                    <pre data-prefix="12">
                        <code className='ml-4'>{"}"}</code>
                    </pre>
                    <pre data-prefix="13">
                        <code className='ml-2'>
                            <span className='text-red-500'>return</span> (
                        </code>
                    </pre>
                    <pre data-prefix="14">
                        <code className='ml-4'>
                            {"<input type='text' onChange={handleChange} />"}
                        </code>
                    </pre>
                    <pre data-prefix="15">
                        <code className='ml-2'>);</code>
                    </pre>
                    <pre data-prefix="16">
                        <code>{"}"}</code>
                    </pre>
                    <pre data-prefix="17">
                        <code><span className='text-red-500'>export default</span> DebouncingAndThrottling</code>
                    </pre>
                </div>
            </div>
        </div>
    );
};

export default DebouncingAndThrottling;
