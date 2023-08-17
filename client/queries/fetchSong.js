import gql from 'graphql-tag';


const FETCHSONG = gql`
query SongQuery ($id: ID!){
    song(id:$id){
    id
      title
    }
  }
`;

export default FETCHSONG;

