import React, { useState } from 'react';

const Lightbox = ({ images }: { images: string[] }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const openLightbox = (image: string) => {
        setSelectedImage(image);
        setIsOpen(true);
    };

    const closeLightbox = () => {
        setSelectedImage('');
        setIsOpen(false);
    };

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 flex items-start justify-start z-50">
                    <div className="bg-black bg-opacity-80 w-full h-full" onClick={closeLightbox}></div>
                    <div className="max-w-4xl w-1/2 relative"> {/* Adjust the width here */}
                        <img
                            src={selectedImage}
                            alt=""
                            className="mx-auto max-h-full max-w-full relative"
                        />
                        <button
                            onClick={closeLightbox}
                            className="absolute top-4 right-4 bg-white text-black p-2 rounded"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
            <div className="grid grid-cols-2 gap-4 relative">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt=""
                        onClick={() => openLightbox(image)}
                        className="cursor-pointer"
                    />
                ))}
            </div>
        </>
    );
};

export default Lightbox;
