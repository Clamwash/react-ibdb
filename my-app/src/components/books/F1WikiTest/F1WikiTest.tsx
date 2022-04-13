import Card from '../../ui/Card';

const F1WikiTest: React.FC<{races: string[], winner: string}> = (props) => {
  const winner = props.winner;
  const races = props.races;

  return (
    <ul>
      {races.map((item: any) => (
        <div key={item.round}>
          <div>
            <h2>{item.raceName}</h2>
            <h3>{item.Circuit.circuitName}</h3>
            <a href={item.Results[0].Driver.url}>
              <span role='img' aria-label='Race Winner'>
                🏎️
              </span>
              {item.Results[0].Driver.familyName +
                ' ' +
                item.Results[0].Driver.givenName}
              {/* We aready know who the world champion is thanks to the `winner` props. Here we're simply doing a check for every driver. If this particular driver being iterated on is the same as the value of the `winner` props, then display the 🏆 emoji, signifying that they were the world champion for that year */}
              {item.Results[0].Driver.familyName +
                ' ' +
                item.Results[0].Driver.givenName ===
              winner ? (
                <span role='img' aria-label='Race Winner'>
                  {' '}
                  🏆🏆🏆{' '}
                </span>
              ) : (
                ''
              )}
            </a>
          </div>
          <hr />
        </div>
      ))}
    </ul>
  );
}

export default F1WikiTest;
