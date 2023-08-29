import React from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import FETCHSONG from "../queries/fetchSong";
import { useParams } from "react-router-dom";
import LyricCreate from "./LyricCreate";
import LyricList from "./LyricList";



const SongDetail = () => {
    const { id } = useParams();
    const { loading, error, data, refetch } = useQuery(
        FETCHSONG, 
        {
            variables: { id }
        }
    );

    if (loading) return null;
    if (error) return <p>Error: {error.message} </p>;

    
    return (
    <div>
        <Link to='/'>Back</Link>
        <h3>{data.song.title}</h3>
        <LyricList lyrics={data.song.lyrics}/>
        <LyricCreate songId={id} />
    </div>
    )
};

export default SongDetail;