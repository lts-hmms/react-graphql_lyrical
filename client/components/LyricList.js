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

    const onLike = (id) => {
        console.log(id);
        likeLyric({ variables: { id } });
    };

    const renderLyrics = () => {
        return lyrics.map(({id, content, likes}) => 
            <li key={id} className="collection-item">
                {content}
                <div className="vote-box">
                    <i 
                        className="material-icons"
                        onClick={() => {onLike(id)}}
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
