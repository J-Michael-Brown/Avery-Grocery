import React from 'react';
import PropTypes from 'prop-types';
import { Produce } from './Produce';

function Month(props){
  return (
    <div>
      <h3>{props.month}</h3>
      <dl>
        {props.selection.map((produceName, index) =>
          <Produce
            name={produceName}
            key={index}
          />
        )}
      </dl>
    </div>
  );
}

Month.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.array.isRequired
};

export default Month;
