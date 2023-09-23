import PropTypes from 'prop-types';

function Proficiency({ classData }) {
  return (
    <div className="proficiency-container details-card">
      <h2 className="proficiency-title">Proficiencies:</h2>
      <ul>
        {classData?.proficiencies.map((proficiency) => (
          <li key={proficiency.index}>{proficiency.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Proficiency;

Proficiency.propTypes = {
  proficiencies: PropTypes.arrayOf(PropTypes.object),
}