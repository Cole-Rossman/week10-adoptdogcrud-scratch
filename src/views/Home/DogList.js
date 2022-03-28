import { useState, useEffect } from 'react';
import { fetchDogs } from '../../services/dogs';
import { Link } from 'react-router-dom';
import './DogDetail.css';
export default function DogList() {
  const [dogs, setDogs] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dogsData = await fetchDogs();
        setDogs(dogsData);
      } catch (e) {
        setError(e.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Meet our dogs!</h1>
      {error && <p>{error}</p>}
      <div className='dogs-list'>
        {dogs.map((dog) => (
          <Link key={dog.id} to={`/dogs/${dog.id}`}>
            <div className='dog-card' key={dog.id}>
              <h3>Meet {dog.name}</h3>
              <img className='dog-image' width="150" height="200" src={dog.image}/>
              <p>
                {dog.name} is an {dog.age} year old {dog.breed}.
              </p>
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
}
