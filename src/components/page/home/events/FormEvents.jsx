import React from 'react';

const FormEvents = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Form submitted!');
    };

    return (
        <div className='flex gap-4'>
            <div className='w-full h-60 flex justify-center items-center'>
                <form onSubmit={handleSubmit} className=' flex gap-2 flex-col'>
                    <input type="text" placeholder="Enter something" className="input input-bordered bg-transparent input-primary" />
                    <button type="submit" className=" btn btn-primary">Submit</button>
                </form>
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
                            <span className='text-red-500'>const</span> FormEvents = () ={">"} {"{"}
                        </code>
                    </pre>
                    <pre data-prefix="3">
                        <code className='ml-4'>
                            <span className='text-red-500'>const</span> handleSubmit = (event) ={">"} {"{"}
                        </code>
                    </pre>
                    <pre data-prefix="4">
                        <code className='ml-8'>event.preventDefault();</code>
                    </pre>
                    <pre data-prefix="5">
                        <code className='ml-8'>alert(<span className='text-blue-300'>'Form submitted!'</span>);</code>
                    </pre>
                    <pre data-prefix="6">
                        <code className='ml-4'>{"}"}</code>
                    </pre>
                    <pre data-prefix="7">
                        <code className='ml-2'>
                            <span className='text-red-500'>return</span> (
                        </code>
                    </pre>
                    <pre data-prefix="8">
                        <code className='ml-4'>
                            {"<form onSubmit={handleSubmit}>"}
                        </code>
                    </pre>
                    <pre data-prefix="9">
                        <code className='  ml-10'>
                            {"<input type='text' />"}
                        </code>
                    </pre>
                    <pre data-prefix="10">
                        <code className=' ml-10'>
                            {"<button type='submit' /> "}
                        </code>
                    </pre>
                    <pre data-prefix="11">
                        <code className=' ml-4'>
                            {"</form> "}
                        </code>
                    </pre>
                    <pre data-prefix="12">
                        <code className='ml-2'>);</code>
                    </pre>
                    <pre data-prefix="13">
                        <code>{"}"}</code>
                    </pre>
                    <pre data-prefix="14">
                        <code><span className='text-red-500'>export default</span> FormEvents</code>
                    </pre>
                </div>
            </div>
        </div>
    );
};

export default FormEvents;
