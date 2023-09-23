function Proficiency({ classData }) {
  return (
    <div className="proficiency-container">
      <h2 className="proficiency-title">Proficiencies:</h2>
      {/* <ul className="proficiency-detail">{selectedRaceProficiencies && selectedRaceProficiencies.map((proficiency) => (
          <li key={proficiency.index}>{proficiency.name}</li>
        ))}
      </ul> */}
      <ul>
        {classData.proficiencies.map((proficiency) => (
          <li key={proficiency.index}>{proficiency.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Proficiency;
