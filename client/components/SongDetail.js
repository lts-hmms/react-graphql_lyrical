import React from "react";
import { gql, useQuery } from "@apollo/client";
import FETCHSONG from "../queries/fetchSong";
import { useParams } from "react-router-dom";



const SongDetail = () => {
    const { id } = useParams();
    const { loading, error, data, refetch } = useQuery(
        FETCHSONG, 
        {
            variables: { id }
        }
    );

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message} </p>;

    
    return (
    <div>
        <h3>Song Detail</h3>
        <p>{data.song.title}</p>

    </div>
    )
};



export default SongDetail;