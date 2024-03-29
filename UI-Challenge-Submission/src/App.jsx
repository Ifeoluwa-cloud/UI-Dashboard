import './App.css'
import Sidebar from './components/sidebar';
import Dashboard from './components/dashboard';


function App() {
  return (
    <>
        <div className="w-full flex h-full">
          <Sidebar />
          <Dashboard />
        </div>
    </>
  )
}

export default App
