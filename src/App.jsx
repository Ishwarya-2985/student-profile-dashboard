import './App.css'
import Profile from './components/Profile'
import Tabs from './components/Tabs'


function App() {
  return (
    <>
      <div className='p-4 pt-5 sm:p-5 sm:pt-6 md:p-8 md:pt-10'>
        <Profile />
        <Tabs />
      </div>
      
    </>
  )
}

export default App
