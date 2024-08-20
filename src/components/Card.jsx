import React from "react";

function Card({ user, index, handleRemove }) {
    const { name, email, image } = user;
    return (
        <div className="w-52 h-full bg-zinc-800 rounded-md flex flex-col items-center p-4 overflow-hidden">
            <div className="w-20 h-20 rounded-full bg-zinc-200 overflow-hidden border-2 border-orange-600">
                <img src={image} className="h-full w-full object-cover" />
            </div>
            <h1 className="text-2xl font-semibold">{name}</h1>
            <h2 className="text-md font-medium text-zinc-400">{email}</h2>
            <p className="text-center text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint,
                velit!
            </p>
            <button
                onClick={() => handleRemove(index)}
                className="mt-3 bg-red-700 hover:bg-red-800 text-white px-3 py-1 rounded-md"
            >
                Remove it
            </button>
        </div>
    );
}

export default Card;
