import Book from './components/Book.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

const App = () => {
    return (
      <div>
        <Header />
        <div className='booklist'>
        <Book />
        <Book />
        <Book />
        <Book />
       </div>
        <Footer />
      </div>
    
  )
}

export default App;