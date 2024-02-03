import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faGoogle, faMicrosoft, faFontAwesome } from '@fortawesome/free-brands-svg-icons'

library.add(fas, faMicrosoft, faGoogle, faGithub, faFontAwesome);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
