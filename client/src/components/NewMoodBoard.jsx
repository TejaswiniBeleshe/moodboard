

import { useState } from "react"
// import { moodBoardService } from "../services/moodBoardService"

const EMOJI_OPTIONS = ["😄", "😊", "😢", "😡", "😴", "🤔", "😍", "🤗", "😎", "🥳", "😰", "🤒", "😇", "🤪", "😋"]
const COLOR_OPTIONS = [
  "#FF6B6B",
  "#4ECDC4",
  "#45B7D1",
  "#96CEB4",
  "#FFEAA7",
  "#DDA0DD",
  "#98D8C8",
  "#F7DC6F",
  "#BB8FCE",
  "#85C1E9",
]

const NewMoodBoard = ({ onMoodBoardCreated, hasToday }) => {
  const [formData, setFormData] = useState({
    emojis: [],
    imageUrl: "",
    colorTheme: COLOR_OPTIONS[0],
    note: "",
  })
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleEmojiToggle = (emoji) => {
    setFormData((prev) => ({
      ...prev,
      emojis: prev.emojis.includes(emoji) ? prev.emojis.filter((e) => e !== emoji) : [...prev.emojis, emoji],
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    if (formData.emojis.length === 0) {
      setError("Please select at least one emoji")
      setLoading(false)
      return
    }

    // try {
    //   const moodBoard = await moodBoardService.createMoodBoard(formData)
    //   onMoodBoardCreated(moodBoard)
    //   setFormData({
    //     emojis: [],
    //     imageUrl: "",
    //     colorTheme: COLOR_OPTIONS[0],
    //     note: "",
    //   })
    // } catch (error) {
    //   setError(error.message)
    // } finally {
    //   setLoading(false)
    // }
  }

  if (hasToday) {
    return (
      <div className="bg-white rounded-lg shadow p-6 text-center">
        <h2 className="text-xl font-semibold mb-4">MoodBoard Already Created</h2>
        <p className="text-gray-600 mb-4">You've already created your MoodBoard for today!</p>
        <p className="text-sm text-gray-500">Come back tomorrow to create a new one.</p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-6">Create Today's MoodBoard</h2>

      {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Emojis */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Select Emojis (Choose one or more)</label>
          <div className="grid grid-cols-5 gap-3">
            {EMOJI_OPTIONS.map((emoji) => (
              <button
                key={emoji}
                type="button"
                onClick={() => handleEmojiToggle(emoji)}
                className={`text-3xl p-3 rounded-lg border-2 transition duration-200 ${
                  formData.emojis.includes(emoji)
                    ? "border-purple-500 bg-purple-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                {emoji}
              </button>
            ))}
          </div>
          {formData.emojis.length > 0 && (
            <div className="mt-3">
              <span className="text-sm text-gray-600">Selected: </span>
              {formData.emojis.map((emoji, index) => (
                <span key={index} className="text-xl ml-1">
                  {emoji}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Image URL */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Image or GIF URL</label>
          <input
            type="url"
            value={formData.imageUrl}
            onChange={(e) => setFormData((prev) => ({ ...prev, imageUrl: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="https://example.com/image.jpg"
            required
          />
          {formData.imageUrl && (
            <div className="mt-3">
              <img
                src={formData.imageUrl || "/placeholder.svg"}
                alt="Preview"
                className="w-full h-48 object-cover rounded-lg"
                onError={(e) => {
                  e.target.style.display = "none"
                }}
              />
            </div>
          )}
        </div>

        {/* Color Theme */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">Color Theme</label>
          <div className="grid grid-cols-5 gap-3">
            {COLOR_OPTIONS.map((color) => (
              <button
                key={color}
                type="button"
                onClick={() => setFormData((prev) => ({ ...prev, colorTheme: color }))}
                className={`w-12 h-12 rounded-lg border-4 transition duration-200 ${
                  formData.colorTheme === color ? "border-gray-800" : "border-gray-200 hover:border-gray-400"
                }`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
          <div className="mt-2 text-sm text-gray-600">Selected: {formData.colorTheme}</div>
        </div>

        {/* Note */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Note (max 200 characters)</label>
          <textarea
            value={formData.note}
            onChange={(e) => setFormData((prev) => ({ ...prev, note: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            rows="3"
            maxLength="200"
            placeholder="How are you feeling today?"
            required
          />
          <div className="text-right text-sm text-gray-500 mt-1">{formData.note.length}/200</div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-4 rounded-md transition duration-200 disabled:opacity-50"
        >
          {loading ? "Creating MoodBoard..." : "Create MoodBoard"}
        </button>
      </form>
    </div>
  )
}

export default NewMoodBoard
