import React from "react";
import PropTypes from "prop-types";

const LyricList = ({lyrics}) => {
    const renderLyrics = () => {
        return lyrics.map(({id, content}) => 
            <li key={id} className="collection-item">
                {content}
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
