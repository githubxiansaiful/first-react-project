import { useState } from "react"

export default function Team() {
    // Set default Team Member
    const [team, setTeam] = useState(11);

    // Function to increase player
    const handlePlayer = () => {
        const newPlayer = team + 1;
        setTeam(newPlayer);
    }

    // Function to remove player
    const removePlayer = () => {
        setTeam(team -1);
    }

    return (
        <div>
            <h3>Players: {team}</h3>
            <button onClick={handlePlayer}>Add Player</button>
            <button onClick={removePlayer}>Remove Player</button>
        </div>
    )
}