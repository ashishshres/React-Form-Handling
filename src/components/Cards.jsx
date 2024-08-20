import React from "react";
import Card from "./Card";

function Cards({ users, handleRemove }) {
    return (
        <div className="w-full p-8 flex flex-wrap gap-4 items-center justify-center">
            {users.length !== 0 ? (
                users.map((user, index) => (
                    <Card
                        key={index}
                        user={user}
                        handleRemove={handleRemove}
                        index={index}
                    />
                ))
            ) : (
                <h1 className="text-xl font-semibold text-red-500">
                    Add users to show card
                </h1>
            )}
        </div>
    );
}

export default Cards;
