import React from 'react';

const ResumePic = ({doc}) => {
    const styles = {
        img: {
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            width: "30%"
        },
        h1: {
            textAlign: "center"
        }
    }
    return (
        <div>
            <hr />
            <h1 style={styles.h1}>Click The Image to View Ashley's Resume</h1>
            <img src={doc} alt="Ashley's Resume" style={styles.img} onClick={()=> window.open("https://drive.google.com/file/d/1YxwtlFdiSjbtZSfM4Tt_kN6guWuKJdp9/view?usp=sharing", "_blank")}/>
        </div>
    );
};

export default ResumePic;