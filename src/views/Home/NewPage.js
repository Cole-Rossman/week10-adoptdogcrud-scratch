import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import DogForm from '../Admin/DogForm';
import { createDog } from '../../services/dogs';

export default function NewPage() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [bio, setBio] = useState('');
  const [breed, setBreed] = useState('');
  const [image, setImage] = useState('');
  const [error, setError] = useState('');

  const history = useHistory();

  const handleSubmit = async () => {
    try {
      await createDog({ name, age, bio, breed, image });
      history.push('/');
    } catch (e) {
      setError('Something went wrong, please try again.');
    }
  };

  return (
    <div>
      {error && (<p>{error} <span onClick={() => setError('')}>ERROR.</span></p>)}
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
