import axios from 'axios';
// https://rickandmortyapi.com/api/character
// https://rickandmortyapi.com/api/character/2

const agent = axios.create({
  baseURL: 'https://rickandmortyapi.com/api/',
});

// export async function getMoviesByQuery(query, controller) {
//   try {
//     const movies = await agent.get('search/movie', {
//       params: {
//         query,
//         signal: controller.signal,
//       },
//     });

//     return movies?.data?.results;
//   } catch (error) {
//     toast.error('Something went wrong 😥!');
//     console.error(error);
//   }
// }

export async function getAllCharacters() {
  try {
    const characters = await agent.get('character');

    return characters.data;
  } catch (error) {
    // toast.error('Something went wrong 😥!');
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
    // toast.error('Something went wrong 😥!');
    console.error(error);
  }
}

// export async function getMoviesDetailsById(id, controller) {
//   try {
//     const movie = await agent.get(`movie/${id}`, {
//       params: {
//         signal: controller.signal,
//       },
//     });

//     return movie?.data;
//   } catch (error) {
//     toast.error('Something went wrong 😥!');
//     console.error(error);
//   }
// }
