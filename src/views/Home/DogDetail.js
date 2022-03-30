import { useEffect, useState } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import { deleteDog, fetchDogId } from '../../services/dogs';

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
        setError('Something went wrong, please try again.');
      }
    };
    fetchData();
  }, [id]);

  const history = useHistory();

  const handleDelete = async () => {
    try {
      await deleteDog(id);
      history.push('/');
    } catch (e) {
      setError('Something went wrong, please try again.');
    }
  };

  if (loading) return <h3>Loading...</h3>;

  return (
    <>
      <div className='dog-detail'>
        {error && <p>{error}</p>}
        <h3>Meet {dog.name}</h3>
        <img className='dog-image' width="350" height="400" src={dog.image}/>
        <p>
          {dog.name} is a {dog.age} year old {dog.breed}.
        </p>
        <p>{dog.bio}</p>
        <Link to={`/dogs/${id}/edit`}>
          <button>Edit Dog</button>
        </Link>
        <button onClick={handleDelete}>Delete Dog</button>
      </div>
    </>
  );
}
