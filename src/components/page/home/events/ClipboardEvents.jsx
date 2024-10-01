import React from 'react';

const ClipboardEvents = () => {
    const handleCopy = () => {
        alert('Content copied to clipboard!');
    };

    const handlePaste = () => {
        alert('Content pasted from clipboard!');
    };

    return (
        <div className="flex flex-col gap-4">
            <div className="w-full flex justify-center items-center">
                <textarea
                    onCopy={handleCopy}
                    onPaste={handlePaste}
                    placeholder="Copy or paste some content here"
                    className="textarea textarea-bordered w-full bg-transparent textarea-primary"
                ></textarea>
            </div>
            <div className="">
                <div className="mockup-code">
                    <pre data-prefix="1">
                        <code>
                            <span className="text-red-500">import</span> React <span className="text-red-500">from</span> <span className="text-blue-300">'react'</span>;
                        </code>
                    </pre>
                    <pre data-prefix="2">
                        <code>
                            <span className="text-red-500">const</span> ClipboardEvents = () ={">"} {"{"}
                        </code>
                    </pre>
                    <pre data-prefix="3">
                        <code className="ml-4">
                            <span className="text-red-500">const handleCopy = () ={">"} alert('Content copied to clipboard!');</span>
                        </code>
                    </pre>
                    <pre data-prefix="4">
                        <code className="ml-4">
                            <span className="text-red-500">const handlePaste = () ={">"} alert('Content pasted from clipboard!');</span>
                        </code>
                    </pre>
                    <pre data-prefix="5">
                        <code className="ml-2">
                            <span className="text-red-500">return</span> (
                        </code>
                    </pre>
                    <pre data-prefix="6">
                        <code className="ml-4">
                            {"<textarea />"}
                        </code>
                    </pre>
                    <pre data-prefix="7">
                        <code className=' ml-12'>
                            {"onCopy={handleCopy}"}
                        </code>
                    </pre>
                    <pre data-prefix="8">
                        <code className=' ml-12'>
                            {"onPaste={handlePaste}"}
                        </code>
                    </pre>
                    <pre data-prefix="9">
                        <code className=' ml-12'>
                            {"placeholder='Copy or paste content'"}
                        </code>
                    </pre>
                    <pre data-prefix="10">
                        <code className="ml-2">);</code>
                    </pre>
                    <pre data-prefix="11">
                        <code>{"}"}</code>
                    </pre>
                    <pre data-prefix="12">
                        <code><span className="text-red-500">export default</span> ClipboardEvents;</code>
                    </pre>
                </div>
            </div>
        </div>
    );
};

export default ClipboardEvents;
