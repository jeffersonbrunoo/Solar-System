import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination, index } = this.props;
    return (
      <div className="mission-card" data-testid="mission-card">
        <p id="index">
          { `${index}.` }
        </p>
        <p data-testid="mission-name">
          { `Nome da Missão: ${name}` }
        </p>
        <p data-testid="mission-year">
          { `Ano: ${year}` }
        </p>
        <p data-testid="mission-country">
          { `País: ${country}` }
        </p>
        <p data-testid="mission-destination">
          { `Destino: ${destination}` }
        </p>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default MissionCard;
