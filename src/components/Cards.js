import React from 'react';

const Card = ({ heading, video, tags }) => {
    return (
        <div className="border border-gray-300 rounded-lg overflow-hidden m-4 shadow-md bg-white flex flex-col w-96">
            <div className="relative video-container">
                <iframe
                    src={video}
                    title={heading}
                    frameBorder="0"
                    allowFullScreen
                    className="absolute w-full h-full top-0 left-0"
                ></iframe>
            </div>
            <div className="p-4 card-info">
                <h2 className="text-xl font-bold mb-2">{heading}</h2>
                <div className="tags">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="inline-block bg-blue-500 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Card;
