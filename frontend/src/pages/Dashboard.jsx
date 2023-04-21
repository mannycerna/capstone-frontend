import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
import CigarForm from '../components/CigarForm'

function Dashboard() {
   const navigate = useNavigate()

   const {user} = useSelector((state)  => state.auth)

   useEffect(() => {
      if(!user) {
         navigate('/login')
      }
   }, [user, navigate] )

   return (<>
      <section className='heading'>
         <h1> Welcome <br/> {user && user.name} </h1>
         <p>Cigar Inventory Dashboard</p>
      </section>

      <CigarForm />

   </>)
}

export default Dashboard