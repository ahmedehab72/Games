import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { CircleLoader } from 'react-spinners';

export default function GameDetails() {

    const { id } = useParams();
    const [game, setGame] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchGameDetails = async () => {
        try {
          const response = await axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, {
            headers: {
              'x-rapidapi-key': '0cc2d6a721mshb20618e958e1114p10710ajsn7fb18ae81289',
              'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
          });
          setGame(response.data);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching game details:', error);
          setError(error);
          setLoading(false);
        }
      };
  
      fetchGameDetails();
    }, [id]);
  
    if (loading) return <div><CircleLoader
    color="#152954"
    size={100}
  /></div>;
    if (error) return <div>Error: {error.message}</div>;
  return <>
   <div className="container mx-auto my-10">
      <div className="flex">
        <div className="w-1/4">
          <img src={game.thumbnail} alt={game.title} className="w-full h-auto object-cover" />
        </div>
        <div className="w-3/4 pl-6 text-orange-50">
          <h1 className="text-3xl font-bold mb-4">{game.title}</h1>
          <p><strong>Category:</strong> {game.genre}</p>
          <p><strong>Platform:</strong> {game.platform}</p>
          <p><strong>Status:</strong> {game.status}</p>
          <p className="mt-4">{game.description}</p>
        </div>
      </div>
    </div>
  </>
}
