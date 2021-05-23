import React from 'react';

const Description = ({title}) => {
    const styles = {
        descriptionDiv: {
            textAlign: "center",
            fontFamily: 'Amaranth, sans-serif'
        },
        h1: {
            fontSize: 64
        }
    }
    return (
        <div id="descriptionDiv" style={styles.descriptionDiv}>
            <h1 style={styles.h1}>{title}</h1>
        </div>

    );
};

export default Description;