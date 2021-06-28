import React from 'react'

const Bio = (props) => {
    return (
        <div>
            <div className="bio">
              <div className="profilepic">
                <img src={props.pic} />
              </div>
              <div className="bio-text">
                <h2>{props.name}</h2>
                <h3>{props.style}</h3>
                <p>{props.description}</p>
              </div>
            </div>
            <a href={props.moodboard_link} target="blank">
              <img className="moodboard" src={props.moodboard} />
            </a>
        </div>
    )
}

export default Bio;
