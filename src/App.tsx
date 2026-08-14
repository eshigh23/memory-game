import MemoryGame from "./components/MemoryGame"

function App() {
  return (
    <MemoryGame
      images={[
            "https://images.unsplash.com/photo-1626808642875-0aa545482dfb?w=200&h=200",
            "https://images.unsplash.com/photo-1546842931-886c185b4c8c?w=200&h=200",
            "https://images.unsplash.com/photo-1520763185298-1b434c919102?w=200&h=200",
            "https://images.unsplash.com/photo-1442458017215-285b83f65851?w=200&h=200",
            "https://images.unsplash.com/photo-1496483648148-47c686dc86a8?w=200&h=200",
            "https://images.unsplash.com/photo-1591181520189-abcb0735c65d?w=200&h=200",
      ]}
    />
  )
}

export default App
