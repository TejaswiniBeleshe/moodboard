import React from 'react';
import { useNavigate, useOutletContext } from "react-router-dom";

const dummyMoodboards = [
  {
    date: '2025-07-31',
    emojis: ['😊', '🌞'],
    imageUrl: 'https://media.giphy.com/media/3o6ZtaO9BZHcOjmErm/giphy.gif',
    color: '#FFD700',
    note: 'Feeling super motivated!',
  },
  {
    date: '2025-07-30',
    emojis: ['😴', '☕'],
    imageUrl: 'https://media.giphy.com/media/l0HlNQ03J5JxX6lva/giphy.gif',
    color: '#ADD8E6',
    note: 'Sleepy but still working.',
  },
  {
    date: '2025-07-29',
    emojis: ['😎', '💻'],
    imageUrl: 'https://media.giphy.com/media/26tOZ42Mg6pbTUPHW/giphy.gif',
    color: '#90EE90',
    note: 'Coding all day!',
  },
];

const MoodboardList = () => {
  const { moodboards } = useOutletContext();
  const navigate = useNavigate()
  return (
    <div className="container my-5">
      <div className="card shadow-lg">
        <div className="card-header d-flex justify-content-between align-items-center bg-purple text-black text-center fs-4 fw-bold">
          MoodBoard History
          <button onClick={() => navigate("/newmoodboard")} className="btn btn-outline-secondary mt-3">
           View MoodBoards
          </button>
        </div>
        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0 text-center">
            <thead className="table-light">
              <tr>
                <th>Date</th>
                <th>Emojis</th>
                <th>GIF / Image</th>
                <th>Color</th>
                <th>Note</th>
              </tr>
            </thead>
            <tbody>
              {[...moodboards,...dummyMoodboards].map((mood, idx) => (
                <tr key={idx}>
                  <td>{mood.date}</td>
                  <td style={{ fontSize: '1.3rem' }}>{mood.emojis.join(' ')}</td>
                  <td>
                    <img
                      src={mood.imageUrl}
                      alt="mood"
                      className="rounded"
                      style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                    />
                  </td>
                  <td>
                    <div
                      className="rounded-circle border border-secondary"
                      style={{
                        backgroundColor: mood.color,
                        width: '30px',
                        height: '30px',
                        margin: '0 auto',
                      }}
                    ></div>
                  </td>
                  <td>{mood.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MoodboardList;
