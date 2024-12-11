import PropTypes from "prop-types";

function NoteList({ notes }) {
  console.log("Props di NoteList:", notes);
  if (!notes || notes.length === 0) {
    return <p>Tidak ada catatan yang ditemukan.</p>;
  }

  return (
    <div className="note-list">
      {notes.map((note) => (
        <div key={note.id} className="note-item">
          <h3>{note.title}</h3>
          <p>{note.body}</p>
          <p>{note.archived ? "Arsip" : "Aktif"}</p>
          <small>Dibuat pada: {note.createdAt}</small>
        </div>
      ))}
    </div>
  );
}

// Menambahkan validasi prop
NoteList.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      archived: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default NoteList;
