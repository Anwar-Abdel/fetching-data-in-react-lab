const BASE_URL = 'https://swapi.dev/api/starships/';

export async function getStarships() {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Fetching starships failed', error);
    throw error;
  }
}
