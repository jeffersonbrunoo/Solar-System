import React from 'react';
import Title from './Title';
import MissionData from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <ul className="missions">
          {
            MissionData.map((mission, index) => (
              <MissionCard
                key={ mission.name }
                index={ index }
                name={ mission.name }
                year={ mission.year }
                country={ mission.country }
                destination={ mission.destination }
              />
            ))
          }
        </ul>
      </div>
    );
  }
}

export default Missions;
