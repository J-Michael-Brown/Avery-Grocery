import React from 'react';
import PropTypes from 'prop-types';

function Location(props) {
  return (
    <div>
      {props.day}
      {props.location}
      {props.hours}
      {props.booth}
    </div>
  );
}

Location.propTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  booth: PropTypes.string.isRequired
};

export { Location };
