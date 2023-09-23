

function SavedCharacters({savedCharacters}) {
  const viewSavedCharacters = savedCharacters.map((character) => {
    return (
      <p className="character-card">{character.class}</p>
    )
  })
  return (
    <div>{viewSavedCharacters}</div>
  )
}

export default SavedCharacters