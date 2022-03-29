import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchDogId } from '../../services/dogs';

export default function DogDetail() {
  const { id } = useParams();
  const [dog, setDog] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dogData = await fetchDogId(id);
        setDog(dogData);
        setLoading(false);
      } catch (e) {
        setError(e.message);
      }
    };
    fetchData();
  }, [id]);

  if (loading) return <h3>Loading...</h3>;

  return (
    <>
      {/* put in nav header here */}
      <div className='dog-detail'>
        {error && <p>{error}</p>}
        <h3>Meet {dog.name}</h3>
        <img className='dog-image' width="350" height="400" src={dog.image}/>
        <p>
          {dog.name} is an {dog.age} year old {dog.breed}.
        </p>
        <p>{dog.bio}</p>
        {/* add edit and delete features */}
      </div>
    </>
  );
}
