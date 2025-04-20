 import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'

// React me built in routing Facilities nhi hoti hai. React me routing karne ke liye hame React Router DOM name ki library  ka use karna padta hai.

// Routing means changing the URL without reloading the page. React Router DOM is a library that allows us to create single-page applications (SPAs) with navigation and routing capabilities.

// BrowserRouter is a react router hai jo ki specially browser ke liye use hota hai. Ye URL ko track karta hai aur page ko reload kiye bina content ko change karta hai. Ye history API ka use karta hai jo ki browser me available

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
