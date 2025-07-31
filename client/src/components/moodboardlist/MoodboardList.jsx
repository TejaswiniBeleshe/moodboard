const MoodboardList = ({ moodBoards }) => {
  if (moodBoards.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow p-6 text-center">
        <h2 className="text-xl font-semibold mb-4">Your MoodBoard History</h2>
        <p className="text-gray-600">No MoodBoards created yet. Start by creating your first one!</p>
      </div>
    )
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Your MoodBoard History</h2>
      <div className="space-y-6">
        {moodBoards.map((moodBoard) => (
          <div
            key={moodBoard._id}
            className="bg-white rounded-lg shadow p-6"
            style={{ backgroundColor: moodBoard.colorTheme + "10" }}
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex flex-wrap gap-2">
                {moodBoard.emojis.map((emoji, index) => (
                  <span key={index} className="text-2xl">
                    {emoji}
                  </span>
                ))}
              </div>
              <span className="text-sm text-gray-500">
                {new Date(moodBoard.date).toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <img
                  src={moodBoard.imageUrl || "/placeholder.svg"}
                  alt="Mood"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div
                    className="w-6 h-6 rounded-full border-2 border-gray-300"
                    style={{ backgroundColor: moodBoard.colorTheme }}
                  ></div>
                  <span className="text-sm text-gray-600">{moodBoard.colorTheme}</span>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Note:</h4>
                  <p className="text-gray-700">{moodBoard.note}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MoodboardList
