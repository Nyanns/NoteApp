import { useState } from "react";
import "./App.css";
import * as index from "./utils/index";
import CreateNote from "./components/CreateNote";
import ActiveNote from "./components/ActiveNote";
import ArchiveNote from "./components/ArchiveNote";
import HeaderNote from "./components/Header";

function App() {
  const [notes, setNotes] = useState(
    index.getInitialData().map((note) => ({
      ...note,
      createdAt: index.showFormattedDate(note.createdAt),
    }))
  );

  const [filteredActiveNotes, setFilteredActiveNotes] = useState([]);
  const [isFiltering, setIsFiltering] = useState(false); // State untuk mengecek mode filter

  const activeNotes = notes.filter((note) => !note.archived);
  const archiveNotes = notes.filter((note) => note.archived);

  return (
    <div className="note-app">
      {/* Header hanya akan memengaruhi Active Notes */}
      <HeaderNote
        notes={activeNotes} // Hanya catatan aktif
        setFilteredNotes={(filtered) => {
          setFilteredActiveNotes(filtered); // Update hasil filter Active Notes
          setIsFiltering(filtered.length > 0); // Tentukan apakah sedang dalam mode pencarian
        }}
      />

      <CreateNote notes={notes} setNotes={setNotes} />

      {/* Tampilkan Active Notes berdasarkan mode pencarian */}
      <ActiveNote
        className="active-notes"
        notes={isFiltering ? filteredActiveNotes : activeNotes}
        setNotes={setNotes}
      />

      {/* Komponen Archive Note tidak dipengaruhi oleh pencarian */}
      <ArchiveNote
        className="archive-notes"
        notes={archiveNotes}
        setNotes={setNotes}
      />
    </div>
  );
}

export default App;
