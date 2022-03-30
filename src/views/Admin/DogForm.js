import React from 'react';

export default function DogForm({
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
}) {
  return (
    <div className='dog-form'>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Age:
        <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
      </label>
      <label>
        Bio:
        <input type="text" value={bio} onChange={(e) => setBio(e.target.value)} />
      </label>
      <label>
        Breed:
        <input type="text" value={breed} onChange={(e) => setBreed(e.target.value)} />
      </label>
      <label>
        Image:
        <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
      </label>
      <button onClick={handleSubmit}>Save Dog</button>
    </div>
  );
}
