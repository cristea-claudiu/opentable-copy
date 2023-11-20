"use client"
import { useRouter } from "next/navigation";
import React, { useState } from 'react';

const SearchBar = () => {
    const router = useRouter();
    const [location, setLocation] = useState("");

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault(); // Prevent the form from being submitted
        if (location === "") return;
        router.push(`/search?city=${location}`);
        setLocation("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="text-left py-3 m-auto flex justify-center">
                <input
                    className="rounded bg-gray-700 text-white text-lg mr-3 p-2 w-[450px]"
                    type="text"
                    placeholder="State/City/Town"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
                <button className="rounded bg-red-600 px-9 py-2 text-white" type="submit">
                    Let's Go
                </button>
            </div>
        </form>
    );
}

export default SearchBar;
