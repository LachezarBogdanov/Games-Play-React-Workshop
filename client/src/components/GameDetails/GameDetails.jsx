import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";

import gameService from "../../services/gameService";
import CommentsShow from "../CommentsShow/CommentsShow";
import CommentsAdd from "../CommentsAdd/CommentsAdd";

export default function GameDetails({
    email,
}) {
    const [game, setGame] = useState({});
    const { gameId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        gameService.getOne(gameId)
                .then(setGame)
    }, [gameId]);

    const onDelete = async () => {
        const choice = confirm(`Are you sure you want to delete ${game.title} game?`);

        if(!choice) {
            return;
        }

        await gameService.delete(gameId);

        navigate('/games');
    };

    return (
        <section id="game-details">
    <h1>Game Details</h1>
    <div className="info-section">

        <div className="game-header">
            <img className="game-img" src={game.imageUrl} />
            <h1>{game.title}</h1>
            <span className="levels">MaxLevel: {game.maxLevel}</span>
            <p className="type">{game.category}</p>
        </div>

        <p className="text">{game.summary}</p>

        <CommentsShow />

        {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
        <div className="buttons">
            <Link to={`/games/${gameId}/edit`} className="button">Edit</Link>
            <button
                onClick={onDelete}
                className="button"
            >
                Delete
            </button>
        </div>
    </div>

    {/* <!-- Bonus --> */}
    {/* <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) --> */}
    <CommentsAdd email={email} />

    </section>
    );
}
