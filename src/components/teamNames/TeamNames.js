import React from 'react';
import Game from "../game/Game"
import birdLogo from '../../assets/bird-logo.png'
import catLogo from '../../assets/cat-logo.png'
import warriorLogo from '../../assets/warrior-logo.gif'
import spartianLogo from '../../assets/spartian-logo.png'

function TeamNames(props) {
    const birds = {
        name: 'The Automatic Avian Squad',
        logoSrc: birdLogo
    }
    const cat = {
        name: 'The Basic Big-Cat Brigade',
        logoSrc: catLogo
    }
    const warriors = {
        name: 'The Wide-Web Warriors',
        logoSrc: warriorLogo
    }
    const spartians = {
        name: 'The Script-Writing Spartians',
        logoSrc: spartianLogo
    }
    return (
        <div className="App">
            <Game venue="Kenzie Arena" homeTeam={birds} awayTeam={cat} />
            <Game venue="The JavaScript Center" homeTeam={warriors} awayTeam={spartians} />
        </div>
    )
}

export default TeamNames;