import { gql } from '@apollo/client';

const FETCHSONG = gql`
query SongQuery ($id: ID!){
    song(id:$id){
    id
      title
      lyrics{
        id
        content
        likes
    }
  }
}
`;

export default FETCHSONG;

