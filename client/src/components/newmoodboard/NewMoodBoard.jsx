import React, { useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

import { useNavigate, useOutletContext } from "react-router-dom";

export default function NewMoodboard() {
  const navigate = useNavigate();
  const { addMoodboard } = useOutletContext(); 

  const [formData, setFormData] = useState({
    emojis: [],
    imageUrl: "",
    color: "#ffc0cb",
    note: "",
  });

  const emojiOptions = ["😀", "😢", "😡", "😍", "😎", "🥳", "🫠"];

  const toggleEmoji = (emoji) => {
    setFormData((prev) => ({
      ...prev,
      emojis: prev.emojis.includes(emoji)
        ? prev.emojis.filter((e) => e !== emoji)
        : [...prev.emojis, emoji],
    }));
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = addMoodboard(formData);
    if (success) {
      navigate("/moodboard-list");
    }
  };

  return (
    <div className="container my-5">
      <div className="p-4 rounded shadow-lg bg-white mx-auto" style={{ maxWidth: '500px' }}>
        <h2 className="text-center mb-4">Create Your MoodBoard</h2>
        <form onSubmit={handleSubmit}>
          
          <div className="mb-3">
            <label className="form-label fw-bold">Choose emojis:</label>
            <div className="d-flex flex-wrap gap-2">
              {emojiOptions.map((emoji) => (
                <button
                  type="button"
                  key={emoji}
                  onClick={() => toggleEmoji(emoji)}
                  className={`emoji-btn btn btn-light ${formData.emojis.includes(emoji) ? 'selected border-primary bg-light' : ''}`}
                >
                  {emoji}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Image / GIF URL:</label>
            <input
              type="url"
              name="imageUrl"
              className="form-control"
              value={formData.imageUrl}
              onChange={handleChange}
              placeholder="https://example.com/image.gif"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Pick a color:</label>
            <input
              type="color"
              name="color"
              className="form-control form-control-color"
              value={formData.color}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">Note (max 200 characters):</label>
            <textarea
              name="note"
              className="form-control"
              value={formData.note}
              onChange={handleChange}
              maxLength={200}
              rows={4}
              placeholder="Write your mood note..."
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Save MoodBoard
          </button>
           <button onClick={() => navigate("/moodboard-list")} className="btn btn-outline-secondary mt-3">
        View MoodBoards
      </button>
        </form>
      </div>
      <style jsx>{`

      .emoji-btn {
          font-size: 1.5rem;
          border-radius: 8px;
          transition: all 0.2s ease-in-out;
          border: 2px solid transparent;
        }

        .emoji-btn.selected {
          border: 2px solid #7c3aed;
          background-color: #ede9fe;
        }

      
      
      
      
      `}</style>
    </div>
  );
}
