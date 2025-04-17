import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import StarRating from './StarRating.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
    <App />
    {/* <StarRating
      messages={["Bad","Verybad","Ok","Nice","Muuuah"]}
      defaultRating={3}
    /> */}
  </StrictMode>,
)
