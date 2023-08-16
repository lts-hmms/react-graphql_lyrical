import React from 'react';
import { gql, useQuery }  from '@apollo/client';

const GET_SONGS = gql`
 query GetSongs{
    songs {
      title
        id
    }
  }
`;

const DisplaySongs = () => {
    const { loading, error, data } = useQuery(GET_SONGS);

    if (loading) return <p>Loading...</p>;
    
    if (error) return <p>Error</p>;

    return (
            data.songs.map(song => {
                return (
                    <li key={song.id} className='collection-item'>{song.title}</li>
                );
            })
    );
};


export default function SongList() {
  return (
    <ul className='collection'>
        <DisplaySongs />
    </ul>
    );
}


