import StarshipCard from './StarshipCard';

function StarshipList({ starships }) {
  return (
    <section>
      <p>{starships.length} Results</p>
      <ul>
        {starships.map((starship) => (
          <StarshipCard key={starship.name} starship={starship} />
        ))}
      </ul>
    </section>
  );
}

export default StarshipList;
