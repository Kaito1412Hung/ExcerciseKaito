import './App.css'
import Header from './components/Header'
import MainStudentInfo from './components/MainStudentInfo'
import Footer from './components/Footer'

function App() {
  const studentData = {
    id: "23686381",
    name: "Trần Quang Hưng",
    class: "DHKHMT19A"
  };

  return (
    <div className="app-container">
      <Header />

      <MainStudentInfo 
        id={studentData.id}
        name={studentData.name}
        class={studentData.class}
      />

      <Footer />
    </div>
  )
}

export default App
