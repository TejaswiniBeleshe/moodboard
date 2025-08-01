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
  const navigate = useNavigate();

  return (
    <div className="container my-5 px-2">
      <div className="card shadow-lg">
        <div className="card-header bg-light d-flex flex-column flex-md-row justify-content-between align-items-center gap-3 text-center">
          <h4 className="mb-0 text-dark fw-bold">MoodBoard History</h4>
          <button
            onClick={() => navigate("/newmoodboard")}
            className="btn btn-outline-primary fw-semibold"
          >
            Create New MoodBoard
          </button>
        </div>

        <div className="table-responsive">
          <table className="table table-bordered table-hover align-middle mb-0 text-center">
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
              {[...moodboards, ...dummyMoodboards].map((mood, idx) => (
                <tr key={idx}>
                  <td className="text-nowrap">{mood.date}</td>
                  <td style={{ fontSize: '1.3rem' }}>{mood.emojis.join(' ')}</td>
                  <td>
                    <img
                      src={mood.imageUrl}
                      alt="mood"
                      className="rounded"
                      style={{
                        width: '50px',
                        height: '50px',
                        objectFit: 'cover',
                      }}
                    />
                  </td>
                  <td>
                    <div
                      className="rounded-circle border border-secondary mx-auto"
                      style={{
                        backgroundColor: mood.color,
                        width: '25px',
                        height: '25px',
                      }}
                    ></div>
                  </td>
                  <td className="text-break" style={{ maxWidth: '200px' }}>
                    {mood.note}
                  </td>
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
