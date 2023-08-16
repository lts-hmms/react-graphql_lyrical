import React, { useState }  from "react";
import { gql, useMutation } from '@apollo/client';
import { Link, useNavigate } from 'react-router-dom';
import GET_SONGS from '../queries/fetchSongs';

const ADD_SONG = gql`
    mutation AddSong($title: String) {
        addSong(title: $title) {
            id
            title
        } 
    }
`;

const SongCreate = () => {
    const [title, setTitle] = useState('');
    const navigate = useNavigate();
    const [addSong, { data, loading, error }] = useMutation(ADD_SONG);

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addSong({ variables: { title }, refetchQueries: [{ query: GET_SONGS }] })
            .then(() => {
            setTitle('');
            navigate('/');
        });
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message} </p>;

   
    return (
    <div>
        <Link to='/'>Back</Link>
        <h3>Create a New Song</h3>
        <form onSubmit={handleSubmit}>
            <label>Song Title:</label>
            <input type="text" value={title} onChange={handleChange} />
            <button type="submit">Add Song</button>
        </form>
    </div>
    );
}

export default SongCreate;