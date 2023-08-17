import React from 'react';
import { gql, useQuery, useMutation }  from '@apollo/client';
import { Link } from 'react-router-dom';
import GET_SONGS from '../queries/fetchSongs';



const DisplaySongs = () => {
    const { loading, error, data, refetch } = useQuery(GET_SONGS);
    const [deleteSong] = useMutation(DELETE_SONG);

    const onSongDelete = (id) => {
      deleteSong({ variables: { id } })
        .then(() => refetch());
    };

    

    if (loading) return <p>Loading...</p>;
    
    if (error) return <p>Error</p>;

    return (
            data.songs.map(song => {
                return (
                    <li key={song.id} className='collection-item'>{song.title} 
                    <i className='material-icons' onClick={() => onSongDelete(song.id)}>delete</i>
                    </li>
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

const DELETE_SONG = gql`
  mutation DeleteSong($id:ID){
    deleteSong(id: $id){
      id
    }
  }
`;



