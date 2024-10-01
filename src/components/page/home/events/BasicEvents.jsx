import React, { useState } from 'react';

const BasicEvents = () => {
    const [isCodeVisible, setIsCodeVisible] = useState(false);

    const handleClick = () => {
        alert('Button clicked! ✅');
    };

    return (
        <div>
            <div className="flex gap-4">
            </div>
            <div className=' flex gap-4'>
                <div className='w-full h-60'>
                    <div className='w-full h-60 flex justify-center items-center'>
                            <button onClick={handleClick} className='btn btn-primary'>
                                Click me
                            </button>
                    </div>
                </div>
                <div className=" p-4">
                <div className="mockup-code">
                    <pre data-prefix="1"><code><span className=' text-red-500'>import</span> React<span className=' text-red-500'>from</span> <span className=' text-blue-300'>'react'</span></code></pre>
                    <pre data-prefix="2"><code><span className=' text-red-500'>const</span> App = () = {">"} {"{"}</code></pre>
                    <pre data-prefix="3"><code className=' ml-4'><span className=' text-red-500'>const</span> handleClick = () = {">"} {"{"}</code></pre>
                    <pre data-prefix="4"><code className=' ml-8'><span className=' text-red-500'>alert</span>( <span className=' text-blue-300'>'button clicked! ✅'</span> );</code></pre>
                    <pre data-prefix="5"><code className=' ml-4'>{"}"}</code></pre>
                    <pre data-prefix="6"><code className=' ml-2'><span className=' text-red-500 '>return</span> (</code></pre>
                    <pre data-prefix="7"><code className=' ml-4'>{"<div>"}</code></pre>
                    <pre data-prefix="8"><code className=' ml-6'>{"<button"} <span className=' text-red-500'>onClick</span>={"{"}<span className=' text-blue-300'>handleClick</span>{"}"}{">"}</code></pre>
                    <pre data-prefix="9"><code className=' ml-8'>click me</code></pre>
                    <pre data-prefix="10"><code className=' ml-6'>{"</button>"} </code></pre>
                    <pre data-prefix="11"><code className=' ml-4'>{"</div>"}</code></pre>
                    <pre data-prefix="12"><code className=' ml-2'>)</code></pre>
                    <pre data-prefix="13"><code>{"}"}</code></pre>
                    <pre data-prefix="14"><code><span className=' text-red-500'>export default</span> App</code></pre>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BasicEvents;
