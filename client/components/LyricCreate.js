import React, { useState } from "react";
import { gql } from "@apollo/client";
import { useParams } from "react-router-dom";
import { useMutation } from "@apollo/client";



const ADDLYRIC = gql`
    mutation AddLyricToSong($content: String, $songId: ID) {
        addLyricToSong(content: $content, songId: $songId) {
            id
            lyrics {
                id
                content
                likes
            }
        }
    }
`;

const LyricCreate = () => {
    const { id } = useParams();
    const [content, setContent] = useState('');
    const [addLyricToSong, { data, loading, error }] = useMutation(ADDLYRIC);

    const handleChange = (event) => {
        setContent(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addLyricToSong({ variables: { content, songId: id } })
            .then(() => {
                setContent('');
            });
    }

    return (
        <form onSubmit={handleSubmit} 
        >
            <label>Add a lyric</label>
            <input value={content} onChange={handleChange} />
            </form>
    )
}

export default LyricCreate;