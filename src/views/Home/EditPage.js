import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { updateDog, fetchDogId } from '../../services/dogs';
import DogForm from '../Admin/DogForm';


export default function EditPage() {
  const { id } = useParams();
  const history = useHistory();

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [bio, setBio] = useState('');
  const [breed, setBreed] = useState('');
  const [image, setImage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDogId(id);
      setName(data.name);
      setAge(data.age);
      setBio(data.bio);
      setBreed(data.breed);
      setImage(data.image);
    };
    fetchData();
  }, [id]);

  const handleSubmit = async () => {
    try {
      await updateDog({ id: id, name, age, bio, breed, image });
      history.push(`/dogs/${id}`);
    } catch (e) {
      setError('Something went wrong, please try again.');
    }
  };

  return (
    <div>
      <h1>Edit Dog Page</h1>
      {error && <p>{error}</p>}
      <DogForm
        {...{
          name,
          setName,
          age,
          setAge,
          bio,
          setBio,
          breed,
          setBreed,
          image,
          setImage,
          handleSubmit,
        }}
      />
    </div>
  );
}
