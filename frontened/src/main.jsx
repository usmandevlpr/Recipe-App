import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store, { persistor } from './redux/store'
import { ToastContainer } from 'react-toastify'
import { PersistGate } from 'redux-persist/integration/react'
// import { store } from './redux/store'
// store
// store
ToastContainer
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
<Provider store={store}>
<PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
    <ToastContainer 
    position='bottom-right' 
    autoClose={2000}
    />
    </Provider>
    </BrowserRouter>
  </StrictMode>,
)
