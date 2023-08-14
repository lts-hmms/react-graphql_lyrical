import React from 'react';
import { gql, useQuery }  from '@apollo/client';

const GET_SONGS = gql`
 query GetSongs{
    songs {
      title
    }
  }
`;

const DisplaySongs = () => {
    const queryObj = useQuery(GET_SONGS);
    const { loading, error, data } = useQuery(GET_SONGS);

    if (loading) return <p>Loading...</p>;
    
    if (error) return <p>Error</p>;

    return data.songs.map(({ title }) => (
        <div key={title}>
            <p>
                {title}
            </p>
        </div>
    ));
}   


export default function SongList() {
  return (
    <div>
        <h2>SongList</h2>
        <br />
        <DisplaySongs />
    </div>
    );
}



