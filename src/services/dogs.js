import { client, checkError } from './client';

export async function fetchDogs() {
  const resp = await client.from('dogs').select('*');
  return checkError(resp);
}

export async function fetchDogId(id) {
  const resp = await client.from('dogs').select('*').match({ id }).single();
  return checkError(resp);
}

export async function createDog(dog) {
  const resp = await client.from('dogs').insert(dog);
  return checkError(resp);
}

export async function updateDog(dog) {
  const resp = await client.from('dogs').update(dog).match({ id: dog.id });
  return checkError(resp);
}

export async function deleteDog(id) {
  const resp = await client.from('dogs').delete().match({ id });
  return checkError(resp);
}