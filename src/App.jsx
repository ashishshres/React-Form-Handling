import React, { useState } from "react";
import Cards from "./components/Cards";
import Form from "./components/Form";
import Navbar from "./components/Navbar";

function App() {
    const [users, setUsers] = useState([]);
    const handleFormSubmit = (data) => {
        setUsers([...users, data]);
    };

    const handleRemove = (id) => {
        setUsers(() => users.filter((user, index) => index !== id));
    };

    return (
        <div className="w-full min-h-screen bg-zinc-900 flex items-center text-white flex-col">
            <Navbar />
            <Form handleFormSubmit={handleFormSubmit} />
            <Cards users={users} handleRemove={handleRemove} />
        </div>
    );
}

export default App;
