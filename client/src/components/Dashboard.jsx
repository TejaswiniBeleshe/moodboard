
import { useState, useEffect } from "react"
import NewMoodBoard from "./NewMoodBoard"
import MoodBoardList from "./MoodBoardList"
// import { moodBoardService } from "../services/moodBoardService"

const Dashboard = ({ user, onLogout }) => {
  const [currentView, setCurrentView] = useState("today")
  const [todaysMoodBoard, setTodaysMoodBoard] = useState(null)
  const [allMoodBoards, setAllMoodBoards] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    // try {
    //   const [todaysData, allData] = await Promise.all([
    //     moodBoardService.getTodaysMoodBoard(),
    //     moodBoardService.getAllMoodBoards(),
    //   ])

    //   setTodaysMoodBoard(todaysData)
    //   setAllMoodBoards(allData)
    // } catch (error) {
    //   console.error("Error loading data:", error)
    // } finally {
    //   setLoading(false)
    // }
     setLoading(false)
  }

  const handleMoodBoardCreated = (newMoodBoard) => {
    setTodaysMoodBoard(newMoodBoard)
    setAllMoodBoards((prev) => [newMoodBoard, ...prev])
    setCurrentView("today")
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">MoodBoard</h1>
              <p className="text-gray-600">Welcome back, {user.username}!</p>
            </div>
            <button
              onClick={onLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition duration-200"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            <button
              onClick={() => setCurrentView("today")}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                currentView === "today"
                  ? "border-purple-500 text-purple-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Today's Mood
            </button>
            <button
              onClick={() => setCurrentView("create")}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                currentView === "create"
                  ? "border-purple-500 text-purple-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Create MoodBoard
            </button>
            <button
              onClick={() => setCurrentView("history")}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                currentView === "history"
                  ? "border-purple-500 text-purple-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              History
            </button>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {currentView === "today" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Today's MoodBoard</h2>
            {todaysMoodBoard ? (
              <div
                className="bg-white rounded-lg shadow p-6"
                style={{ backgroundColor: todaysMoodBoard.colorTheme + "20" }}
              >
                <div className="flex flex-wrap gap-2 mb-4">
                  {todaysMoodBoard.emojis.map((emoji, index) => (
                    <span key={index} className="text-3xl">
                      {emoji}
                    </span>
                  ))}
                </div>
                <img
                  src={todaysMoodBoard.imageUrl || "/placeholder.svg"}
                  alt="Mood"
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-8 h-8 rounded-full border-2 border-gray-300"
                    style={{ backgroundColor: todaysMoodBoard.colorTheme }}
                  ></div>
                  <span className="text-sm text-gray-600">{todaysMoodBoard.colorTheme}</span>
                </div>
                <p className="text-gray-800">{todaysMoodBoard.note}</p>
                <p className="text-sm text-gray-500 mt-4">
                  Created: {new Date(todaysMoodBoard.date).toLocaleDateString()}
                </p>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow p-6 text-center">
                <p className="text-gray-600 mb-4">You haven't created a MoodBoard today yet!</p>
                <button
                  onClick={() => setCurrentView("create")}
                  className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-md transition duration-200"
                >
                  Create Today's MoodBoard
                </button>
              </div>
            )}
          </div>
        )}

        {currentView === "create" && (
          <CreateMoodBoard onMoodBoardCreated={handleMoodBoardCreated} hasToday={!!todaysMoodBoard} />
        )}

        {currentView === "history" && <MoodBoardList moodBoards={allMoodBoards} />}
      </main>
    </div>
  )
}

export default Dashboard
