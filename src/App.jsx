import './App.css'
import Dashboard from './Dashboard.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import List from './List.jsx'

function App() {


  return (
    <>
      <Header />
      <Dashboard >
        <List ><h2>To do</h2></List>
        <List ><h2>Doing</h2></List>
        <List ><h2>Done</h2></List>
      </ Dashboard>
      <Footer quote="Created by Lucía Marconi" />
      <Footer quote="pa toda mi gente" />

    </>
  )
}

export default App
