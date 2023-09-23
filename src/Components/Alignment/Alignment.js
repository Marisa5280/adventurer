import PropTypes from 'prop-types';

function Alignment({ race }) {

  return (
    <div className="alignment-container details-card">
      <h2 className="alignment-title">Alignment:</h2>
      <p className="alignment-detail">{race.alignment}</p>
    </div>
  );
}

export default Alignment;

Alignment.propTypes = {
  "alignment":PropTypes.string
}