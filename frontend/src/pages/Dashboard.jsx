import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import CigarForm from '../components/CigarForm'
import Spinner from '../components/Spinner'
import getCigars  from '../features/cigars/cigarSlice'
import reset from '../features/cigars/cigarSlice'

function Dashboard() {
   const navigate = useNavigate()
   const dispatch = useDispatch()

   const {user} = useSelector((state)  => state.auth)
   const {cigars, isLoading, isError, message} =  useSelector((state) => state.cigars)

   useEffect(() => {
      if(isError) {
         console.log(message);
         
      }

      if(!user) {
         navigate('/login')
      }

      dispatch(getCigars())

      return () => {
         dispatch(reset())
      }

   }, [user, cigars, navigate, isError, message, dispatch] )

   if(isLoading){
      return <Spinner />
   }

   return (<>
      <section className='heading'>
         <h1> Welcome <br/> {user && user.name} </h1>
         <p>Cigar Inventory Dashboard</p>
      </section>

      <CigarForm />

   </>)
}

export default Dashboard