import React from 'react';
import ScoreBoard from "../scoreBorard/ScoreBoard"
import Team from "../team/Team"
import hockeyStick from '../../assets/hockey-stick.mp3'
import hockeyHorn from '../../assets/hockey-horn.mp3'


class Game extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            homeTeamStats: {
                shots: 0,
                score: 0
            },
            awayTeamStats: {
                shots: 0,
                score: 0
            },
            resetCount: 0
        }

        this.shotSound = new Audio(hockeyStick)
        this.scoreSound = new Audio(hockeyHorn)
    }

    shoot = (team) => {
        const teamStatsKey = `${team}TeamStats`
        let score = this.state[teamStatsKey].score
        this.shotSound.play()

        if (Math.floor(Math.random() * 10) <= 2) {
            score += 1
            this.scoreSound.play()
        }

        this.setState((state, props) => ({
            [teamStatsKey]: {
                shots: state[teamStatsKey].shots + 1,
                score
            }
        }))
    }

    resetGame = () => {
        this.setState((state, props) => ({
            resetCount: state.resetCount += 1,
            homeTeamStats: {
                shots: 0,
                score: 0
            },
            awayTeamStats: {
                shots: 0,
                score: 0
            }
        }))
    }

    render() {
        return (
            <div className="Game">
                <ScoreBoard 
                awayTeamStats={this.state.awayTeamStats}
                homeTeamStats={this.state.homeTeamStats}
                />
                <h1>Welcome to {this.props.venue}!</h1>
                <div className="stats">

                    <Team
                        name={this.props.homeTeam.name}
                        logo={this.props.homeTeam.logoSrc}
                        stats={this.state.homeTeamStats}
                        shotHandler={() => this.shoot('home')}
                    />

                    <div className="versus">
                        <h1>VS</h1>
                        <div>Resets: {this.state.resetCount}</div>
                        <button onClick={this.resetGame}>Reset Game</button>
                    </div>


                    <Team
                        name={this.props.awayTeam.name}
                        logo={this.props.awayTeam.logoSrc}
                        stats={this.state.awayTeamStats}
                        shotHandler={() => this.shoot('away')}
                    />

                </div>
            </div>
        )
    }
}

export default Game;