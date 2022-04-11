import { useEffect, useState } from 'react';
import F1WikiTest from '../components/books/F1WikiTest/F1WikiTest';

function F1Page() {
  const [races, setRaces] = useState([]);
  const [winner, setWinner] = useState('');

  useEffect(() => {
    fetch(`https://ergast.com/api/f1/2021/results/1.json`)
      .then((response) => response.json())
      .then((data) => {
        setRaces(data.MRData.RaceTable.Races);
      });

    fetch(`https://ergast.com/api/f1/2021/driverStandings.json`)
      .then((response) => response.json())
      .then((data) => {
        let raceWinner =
          data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver
            .givenName +
          ' ' +
          data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver
            .familyName;
        setWinner(raceWinner);
      });
  }, []);

  return <F1WikiTest races={races} winner={winner} />;
}

export default F1Page;
