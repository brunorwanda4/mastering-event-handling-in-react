import React from 'react';

const EventPropagation = () => {
    const handleParentClick = () => {
        alert('Parent clicked! 🔵');
    };

    const handleChildClick = (event) => {
        event.stopPropagation(); // Prevent the event from bubbling to the parent
        alert('Child clicked! 🟢');
    };

    return (
        <div className="flex gap-4">
            <div className="w-full h-60 flex justify-center items-center">
                <div
                    onClick={handleParentClick}
                    className=" bg-slate-400 "
                >
                    Parent (Click me)
                    <div
                        onClick={handleChildClick}
                        className="p-2 mt-2 border border-gray-300 bg-green-100 cursor-pointer"
                    >
                        Child (Click me)
                    </div>
                </div>
            </div>
            <div className="p-4">
                <div className="mockup-code">
                    <pre data-prefix="1">
                        <code>
                            <span className="text-red-500">import</span> React {" "}
                            <span className="text-red-500">from</span> <span className="text-blue-300">'react'</span>
                        </code>
                    </pre>
                    <pre data-prefix="2">
                        <code>
                            <span className="text-red-500">const</span> EventPropagation = () =&gt; {"{"}
                        </code>
                    </pre>
                    <pre data-prefix="3">
                        <code className="ml-4">
                            <span className="text-red-500">const</span> handleParentClick = () =&gt; {"{"}
                        </code>
                    </pre>
                    <pre data-prefix="4">
                        <code className="ml-8">
                            <span className="text-red-500">alert</span>(<span className="text-blue-300">'Parent clicked! 🔵'</span>);
                        </code>
                    </pre>
                    <pre data-prefix="5">
                        <code className="ml-4">{"}"}</code>
                    </pre>
                    <pre data-prefix="6">
                        <code className="ml-4">
                            <span className="text-red-500">const</span> handleChildClick = (event) =&gt; {"{"}
                        </code>
                    </pre>
                    <pre data-prefix="7">
                        <code className="ml-8">event.stopPropagation();</code>
                    </pre>
                    <pre data-prefix="8">
                        <code className="ml-8">
                            <span className="text-red-500">alert</span>(<span className="text-blue-300">'Child clicked! 🟢'</span>);
                        </code>
                    </pre>
                    <pre data-prefix="9">
                        <code className="ml-4">{"}"}</code>
                    </pre>
                    <pre data-prefix="10">
                        <code className="ml-2">
                            <span className="text-red-500">return</span> (
                        </code>
                    </pre>
                    <pre data-prefix="11">
                        <code className="ml-4">{"<div onClick={handleParentClick}>"}</code>
                    </pre>
                    <pre data-prefix="12">
                        <code className="ml-8">
                            Parent (Click me)
                        </code>
                    </pre>
                    <pre data-prefix="13">
                        <code className=' ml-9'>
                                {"<div onClick={handleChildClick}>Child (Click me)</div>"}
                            </code></pre>
                    <pre data-prefix="13">
                        <code className="ml-2">{"</div>"}</code>
                    </pre>
                    <pre data-prefix="14">
                        <code>{"}"}</code>
                    </pre>
                    <pre data-prefix="15">
                        <code><span className="text-red-500">export default</span> EventPropagation</code>
                    </pre>
                </div>
            </div>
        </div>
    );
};

export default EventPropagation;
