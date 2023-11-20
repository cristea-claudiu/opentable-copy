"use client"
import React, { useState } from 'react';

const RestaurantImages = ({ images }: { images: string[] }) => {
    const [lightboxImage, setLightboxImage] = useState<string | null>(null);

    const openLightbox = (image: string) => {
        setLightboxImage(image);
    };

    const closeLightbox = () => {
        setLightboxImage(null);
    };

    return (
        <>
            <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
                {images.length} photo{images.length > 1 ? 's' : images.length < 1 ? " not available" :""}
            </h1>
            <div className="flex flex-wrap">
                {images.map((image, index) => (
                    <img
                        key={index}
                        className="w-40 mr-1 mb-1 cursor-pointer"
                        src={image}
                        alt=""
                        onClick={() => openLightbox(image)}
                    />
                ))}
            </div>

            {lightboxImage && (
                <div
                    className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80"
                    onClick={closeLightbox}
                >
                    <img
                        src={lightboxImage}
                        alt="Lightbox"
                        className="max-h-full max-w-full"
                    />
                </div>
            )}
        </>
    );
};

export default RestaurantImages;
