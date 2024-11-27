import React from 'react';

const TabContentComponent = ({ activeTab, uploadedImages, handleCopy, handleCopyCode, parentRef }) => {
    const renderContent = () => {
        switch (activeTab) {
            case "preview":
                return (
                    uploadedImages.map((data, index) => (
                        <div key={index} className="flex flex-row m-2 rounded-2xl ring-offset-2 ring-2 ring-slate-100">
                            <img
                                key={`image-${index}`}
                                src={data.url}
                                alt={`Uploaded ${index}`}
                                className="object-cover w-36 h-40 m-2"
                                onClick={() => handleCopy(data.url)}
                            />
                            <div className="flex flex-col justify-center w-4/5">
                                {[
                                    { text: data.url, onClick: () => handleCopy(data.url) },
                                    {
                                        text: `![${data.name}](${data.url})`,
                                        onClick: () => handleCopy(`![${data.name}](${data.url})`),
                                    },
                                    {
                                        text: `<a href="${data.url}" target="_blank"><img src="${data.url}"></a>`,
                                        onClick: () => handleCopy(`<a href="${data.url}" target="_blank"><img src="${data.url}"></a>`),
                                    },
                                    {
                                        text: `[img]${data.url}[/img]`,
                                        onClick: () => handleCopy(`[img]${data.url}[/img]`),
                                    },
                                ].map((item, i) => (
                                    <input
                                        key={`input-${i}`}
                                        readOnly
                                        value={item.text}
                                        onClick={item.onClick}
                                        className="px-3 my-1 py-2 border border-gray-300 rounded-lg bg-white text-sm text-gray-800 focus:outline-none placeholder-gray-400"
                                    />
                                ))}
                            </div>
                        </div>
                    ))
                );
            case "htmlLinks":
            case "markdownLinks":
            case "bbcodeLinks":
            case "viewLinks":
                return (
                    <div ref={parentRef} className="p-4 bg-slate-100" onClick={handleCopyCode}>
                        {uploadedImages.map((data, index) => (
                            <div key={index} className="mb-2">
                                <code>{`${activeTab === 'markdownLinks' ? `![${data.name}](${data.url})` : activeTab === 'htmlLinks' ? `<img src="${data.url}" alt="${data.name}" />` : activeTab === 'bbcodeLinks' ? `[img]${data.url}[/img]` : data.url}`}</code>
                            </div>
                        ))}
                    </div>
                );
            default:
                return null;
        }
    };

    return renderContent();
};

export default TabContentComponent;
