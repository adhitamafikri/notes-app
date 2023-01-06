import React, { useState } from "react";
import "./NoteForm.style.css";

const INITIAL_STATES = {
  formData: {
    title: "",
    body: "",
    color: "white",
  },
};

function NoteForm() {
  // const [getter<any>, setter<Function>] = useState(initialState<any>);
  const [formData, setFormData] = useState({ ...INITIAL_STATES.formData });

  /**
   * @description - handling formData.title change
   * @param {string} value
   * @returns {void}
   */
  const onTitleChange = (value = "") => {
    setFormData({
      ...formData,
      title: value,
    });
  };

  /**
   * @description - handling formData.body change
   * @param {string} value
   * @returns {void}
   */
  const onBodyChange = (value = "") => {
    setFormData({
      ...formData,
      body: value,
    });
  };

  /**
   * @description - Sets color of the note if the color item is clicked
   * @param {string} selectedColor - color of the selected color item
   * @returns {void}
   */
  const onColorItemClick = (selectedColor = "") => {
    setFormData({ ...formData, color: selectedColor });
  };

  /**
   * @description - on form submit, create new note
   * @param {Event} evt
   */
  const onSubmit = (evt) => {
    evt.preventDefault();
    // Validation
    const isTitleValid = !!formData.title;
    if (!isTitleValid) {
      alert("At least need to write title");
      return;
    }

    // Actual saving
    localStorage.setItem("notes", JSON.stringify(formData));

    // Cleanup form
    setFormData({ ...INITIAL_STATES.formData });
  };

  return (
    <div className="c-note-form" style={{ backgroundColor: formData.color }}>
      <form name="note-form" autoComplete="off" onSubmit={onSubmit}>
        <input
          type="text"
          name="note-title"
          id="note-title"
          placeholder="Title"
          className="note-title-input"
          defaultValue={formData.title}
          onChange={(evt) => onTitleChange(evt.target.value)}
        />
        <textarea
          name="note-body"
          id="note-body"
          cols="25"
          rows="5"
          placeholder="Write your note here..."
          className="note-body-input"
          defaultValue={formData.body}
          onChange={(evt) => onBodyChange(evt.target.value)}
        ></textarea>

        <div className="c-color-selector">
          <div
            className={`c-color-selector__item c-color-selector__item--white ${
              formData.color === "white"
                ? "c-color-selector__item--selected"
                : ""
            }`}
            onClick={() => onColorItemClick("white")}
          ></div>
          <div
            className={`c-color-selector__item c-color-selector__item--beige ${
              formData.color === "beige"
                ? "c-color-selector__item--selected"
                : ""
            }`}
            onClick={() => onColorItemClick("beige")}
          ></div>
          <div
            className={`c-color-selector__item c-color-selector__item--darksalmon ${
              formData.color === "darksalmon"
                ? "c-color-selector__item--selected"
                : ""
            }`}
            onClick={() => onColorItemClick("darksalmon")}
          ></div>
        </div>

        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default NoteForm;
