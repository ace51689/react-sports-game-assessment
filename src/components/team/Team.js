import React from 'react';

function Team(props) {

    let shotPercentageDiv

    if (props.stats.shots) {
        const shotPercentage = Math.round((props.stats.score / props.stats.shots) * 100) + '%'
        shotPercentageDiv = (
            <div>Shot Percentage: {shotPercentage}</div>
        )
    }

    return (
        <div className="Team">
            <h2>{props.name}</h2>
            <div className="identity">
                <img src={props.logo} alt={props.name} />
            </div>
            <div>Shots: {props.stats.shots}</div>
            <div>Score: {props.stats.score}</div>
            {shotPercentageDiv}
            <button onClick={props.shotHandler}>Shoot!</button>
        </div>
    )
}

export default Team;