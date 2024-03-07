import Songlist from '../../components/Songlist/Songlist'
import './Home.css'

const Home = () => {
  return (
    <div className='home-container'>
      <div className='izquierdo'>
        <h2>Lado Izquierdo</h2>
        <Songlist />
      </div>

      <div className='derecho'>
        <h2>Derecho</h2>
      </div>
    </div>
  )
}

export default Home
