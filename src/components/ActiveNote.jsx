import PropTypes from "prop-types";
import "../css/ActiveNote.css";

function ActiveNote({ notes, setNotes }) {
  if (!notes || notes.length === 0) {
    return (
      <p className="active-notes__empty">
        Tidak ada catatan aktif yang ditemukan.
      </p>
    );
  }

  function DeleteNote(id) {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  }

  function ArchiveNote(id) {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? { ...note, archived: true } : note
      )
    );
  }

  return (
    <div className="active-notes">
      <h1 className="active-notes__title">Active Notes</h1>
      <div className="active-notes__grid">
        {notes.map((note) => (
          <div key={note.id} className="note-card">
            <div className="note-card__content">
              <h3 className="note-card__title">{note.title}</h3>
              <p className="note-card__body">{note.body}</p>
              <small className="note-card__date">
                Dibuat pada: {note.createdAt}
              </small>
            </div>
            <div className="note-card__actions">
              <button
                className="note-card__button note-card__button--delete"
                onClick={() => DeleteNote(note.id)}
              >
                Delete
              </button>
              <button
                className="note-card__button note-card__button--archive"
                onClick={() => ArchiveNote(note.id)}
              >
                Archive
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

ActiveNote.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      archived: PropTypes.bool.isRequired,
    })
  ).isRequired,
  setNotes: PropTypes.func.isRequired, // Validasi untuk setNotes
};

export default ActiveNote;
