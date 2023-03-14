import axios from 'axios';

const agent = axios.create({
  baseURL: 'https://rickandmortyapi.com/api/',
});

export async function getAllCharacters() {
  try {
    const characters = await agent.get('character');

    return characters.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getCharacterById(id, controller) {
  try {
    const charactersDetails = await agent.get(`character/${id}`, {
      params: {
        signal: controller.signal,
      },
    });

    return charactersDetails.data;
  } catch (error) {
    console.error(error);
  }
}
