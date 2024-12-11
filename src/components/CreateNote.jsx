import PropTypes from "prop-types"; // Import prop-types
import "../css/CreateNote.css";
import InputBar from "../elements/InputBar";
import TextArea from "../elements/TextArea";
import { showFormattedDate } from "../utils/index";
import { useState } from "react";

// Komponen utama untuk membuat catatan
function CreateNote({ notes, setNotes }) {
  // State untuk menyimpan judul dan isi catatan
  const [title, setTitle] = useState(""); // State untuk input judul
  const [body, setBody] = useState(""); // State untuk input isi catatan

  const charaLimit = 300; // Batas maksimal karakter untuk catatan

  // Menghitung jumlah karakter yang tersisa
  const charaLeft = charaLimit - body.length;

  // Fungsi untuk menangani submit form
  const HandleSubmit = (e) => {
    e.preventDefault(); // Mencegah perilaku default (reload halaman)

    // Mendapatkan ID terakhir dari daftar catatan
    const lastId = notes.length > 0 ? notes[notes.length - 1].id : 0;

    // Menambahkan catatan baru ke state `notes`
    setNotes([
      ...notes, // Catatan yang sudah ada
      {
        id: lastId + 1, // ID baru untuk catatan
        title: title, // Judul catatan
        body: body, // Isi catatan
        createdAt: showFormattedDate(new Date()), // Tanggal pembuatan dalam format ISO
        archived: false, // Status arsip, default adalah `false`
      },
    ]);

    // Reset form setelah submit
    setTitle(""); // Kosongkan judul
    setBody(""); // Kosongkan isi catatan
  };

  return (
    <div className="create-notes">
      <h1 className="create-notes__title">Create Notes</h1>
      <div className="create-notes__wrapper">
        {/* Informasi karakter yang tersisa */}
        <div className="create-notes__chara">
          <small className="create-notes__chara-info">
            Character Left: {charaLeft}
          </small>
        </div>

        {/* Form untuk membuat catatan */}
        <form className="create-notes__form" onSubmit={HandleSubmit}>
          {/* Input untuk judul */}
          <InputBar
            type="text"
            className="create-notes__input-title"
            placeholder="Add a Title ..."
            value={title}
            onChange={(e) => setTitle(e.target.value)} // Update state `title`
          />

          {/* Input untuk isi catatan */}
          <TextArea
            className="create-notes__input-note"
            placeholder="Want to write something..."
            value={body}
            onChange={(e) => setBody(e.target.value.slice(0, charaLimit))} // Update state `body` dengan batas karakter
          />

          {/* Tombol submit */}
          <button type="submit" className="create-notes__button-submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

// Tambahkan validasi props
CreateNote.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired, // ID harus berupa angka dan wajib ada
      title: PropTypes.string.isRequired, // Title harus berupa string dan wajib ada
      body: PropTypes.string.isRequired, // Body harus berupa string dan wajib ada
      createdAt: PropTypes.string.isRequired, // Tanggal harus berupa string dan wajib ada
      archived: PropTypes.bool.isRequired, // Archived harus berupa boolean dan wajib ada
    })
  ).isRequired, // Notes harus berupa array dan wajib ada
  setNotes: PropTypes.func.isRequired, // setNotes harus berupa fungsi dan wajib ada
};

export default CreateNote;
