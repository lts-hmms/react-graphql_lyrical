import React from 'react';
import { gql, useQuery }  from '@apollo/client';
import { Link } from 'react-router-dom';
import GET_SONGS from '../queries/fetchSongs';

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
    <div>
      <ul className='collection'>
          <DisplaySongs />
      </ul>
      
      <Link to='/songs/new' className='btn-floating btn-large red right'>
          <i className='material-icons'>add</i>
      </Link>
    </div>
    );
}



