import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { CircleLoader } from 'react-spinners';

export default function Mmorpg() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://free-to-play-games-database.p.rapidapi.com/api/games?category=Mmorpg', {
          headers: {
            'x-rapidapi-key': '0cc2d6a721mshb20618e958e1114p10710ajsn7fb18ae81289',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
          }
        });
        setGames(response.data.slice(0, 10)); 
        setLoading(false);
      } catch (error) {
        console.error('Error fetching games:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div><CircleLoader
  color="#152954"
  size={100}
/></div>;
  if (error) return <div>Error: {error.message}</div>;

  const truncateTitle = (title, wordLimit) => {
    const words = title.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return title;
  };
    return<>
    <main className="container ps-6 pe-6 mx-auto my-5">
      <section className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {games.map(game => (
            <Link key={game.id} to={`/game/${game.id}`}>
              <div className="max-w-sm rounded overflow-hidden shadow-lg bg-sky-100 transform transition duration-300 ease-in-out hover:scale-105">
                <img className="w-full h-48 object-cover" src={game.thumbnail} alt={game.title} />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{truncateTitle(game.title, 15)}</div>
                  <p className="text-gray-700 text-base">
                    {game.short_description}
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{game.genre}</span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{game.platform}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
    </>
}
