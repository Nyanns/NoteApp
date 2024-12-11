import PropTypes from "prop-types";
import InputBar from "../elements/InputBar";
import "../css/Header.css";
import { useState } from "react";

function NotesHeader({ notes, setFilteredNotes }) {
  // State untuk menyimpan query pencarian
  const [searchQuery, setSearchQuery] = useState("");

  // Fungsi untuk menangani pencarian
  const handleSearch = (event) => {
    const { value } = event.target; // Ambil nilai input menggunakan destructuring
    const query = value.toLowerCase(); // Ubah teks pencarian menjadi huruf kecil
    setSearchQuery(query); // Simpan query pencarian ke dalam state

    // Filter catatan berdasarkan teks pencarian
    const filteredNotes = notes.filter((note) => {
      const { title } = note; // Ambil properti title dari objek note
      return title && title.toLowerCase().includes(query); // Periksa apakah judul mengandung teks pencarian
    });

    setFilteredNotes(filteredNotes); // Kirim hasil filter ke komponen induk
  };

  return (
    <div className="notes-header">
      {/* Judul aplikasi */}
      <h1 className="notes-header__app-name">
        Notes<span> 💾</span>
      </h1>

      {/* Komponen input untuk pencarian */}
      <InputBar
        className="notes-header__input-bar"
        placeholder="Search Note ..."
        type="text"
        value={searchQuery} // Teks input yang sesuai dengan state
        onChange={handleSearch} // Panggil fungsi handleSearch saat ada perubahan
      />
    </div>
  );
}

// Validasi properti yang diterima oleh komponen
NotesHeader.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      archived: PropTypes.bool.isRequired,
    })
  ).isRequired,
  setFilteredNotes: PropTypes.func.isRequired,
};

export default NotesHeader;
