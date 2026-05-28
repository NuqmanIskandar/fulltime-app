import "./PremierLeaguePage.css"
import { useEffect, useState, useRef } from "react"

const PremierLeaguePage = () => {

    const cache = useRef({})

    const [matchday, setMatchday] = useState(1);
    const [match, setMatch] = useState([]);

    function increaseDay() {
        if (matchday < 38) {
            setMatchday(matchday + 1)
        }
    }

    function decreaseDay() {
        if(matchday > 1) {
            setMatchday(matchday - 1)
        }
    }

    useEffect(() => {
        if (cache.current[matchday]) {
            setMatch(cache.current[matchday])  // use cached data
            return
        }

        const timer = setTimeout(() => {
            fetch("/v4/competitions/PL/matches?matchday=" + matchday, 
            {headers: {"X-Auth-Token": process.env.REACT_APP_API_KEY}})
            .then(result => result.json())
            .then(data => data.matches)
            .then(game => {
                console.log(game[0])
                cache.current[matchday] = game
                setMatch(game)
            })
        }, 200)

        return () => clearTimeout(timer)
        
    }, [matchday])

    return (
        <>
            <div className="first-div">
                <h1>Premier League 25/26</h1>
                <div className="table-div">
                    <div className="table-nav">
                        <button className="page-button" onClick={() => decreaseDay()}>&#8249;</button>
                        <p>Gameweek {matchday}</p>
                        <button className="page-button" onClick={() => increaseDay()}>&#8250;</button>
                    </div>
                    <div className="table-data">
                        {match.map((m, i) => (
                            <div className="match-row" key={i}>
                                <div className="team-column home-column">
                                    <img className="club-image" src={m.homeTeam.crest} alt="Error"/>
                                    <p>{m.homeTeam.shortName}</p>
                                </div>
                                <div className="score-column">
                                    <p>{m.score.fullTime.home} - {m.score.fullTime.away}</p>
                                    <p>Full Time</p>
                                </div>
                                <div className="team-column away-column">
                                    <p>{m.awayTeam.shortName}</p>
                                    <img className="club-image" src={m.awayTeam.crest} alt="Error"/>                                
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div> 
        </>
    )
}

export default PremierLeaguePage