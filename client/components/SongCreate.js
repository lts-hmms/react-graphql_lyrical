import React, { useState }  from "react";

const SongCreate = () => {

    const [title, setTitle] = useState('');

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    return (
    <div>
        <h3>Create a New Song</h3>
        <label>Song Title:</label>
            <input type="text" value={title} onChange={handleChange} />
    </div>
    );
}

export default SongCreate;