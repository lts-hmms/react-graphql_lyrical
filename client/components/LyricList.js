import React from "react";
import PropTypes from "prop-types";
import { gql, useMutation } from "@apollo/client";

const LIKE_LYRIC = gql`
    mutation LikeLyric($id: ID) {
        likeLyric(id: $id) {
            id
            likes
        }
    }
`;

const LyricList = ({lyrics}) => {
    const [likeLyric] = useMutation(LIKE_LYRIC);

    const onLike = (id, likes) => {
        likeLyric({
            variables: { id },
            optimisticResponse: {
                // Guess what the server response will be
                __typename: "Mutation",
                likeLyric: {
                    id,
                    __typename: "LyricType",
                    likes: likes + 1
                }   
            }
        });
    };

    const renderLyrics = () => {
        return lyrics.map(({id, content, likes}) => 
            <li key={id} className="collection-item">
                {content}
                <div className="vote-box">
                    <i 
                        className="material-icons"
                        onClick={() => {onLike(id, likes)}}
                    >
                            thumb_up
                    </i>
                    {likes}
                </div>
            </li>
        )
    }

    return (
        <ul className="collection">
            {renderLyrics()}
        </ul>
    )
}

LyricList.propTypes = {
    lyrics: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired
    })).isRequired
}

export default LyricList;
