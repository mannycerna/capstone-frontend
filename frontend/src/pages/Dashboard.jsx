import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import CigarForm from '../components/CigarForm'
import UpdateCigarForm from '../components/UpdateCigarForm'
import CigarItem from '../components/CigarItem.jsx'
import Spinner from '../components/Spinner'
import {getCigars}  from '../features/cigars/cigarSlice'
import {reset}  from '../features/auth/authSlice'

function Dashboard() {
   const navigate = useNavigate()
   const dispatch = useDispatch()

   const {user} = useSelector((state)  => state.auth)
   const {cigars, isLoading, isError, message} =  useSelector((state) => state.cigars)

   useEffect(() => {
      if(isError) {
         console.log(message);
         
      }

      if (!user) {
         navigate('/login');
     } else {
         dispatch(getCigars());
         return () => {
            dispatch(reset())
     }
   }
  
  

   }, [user, navigate, isError, message, dispatch] )

   if(isLoading){
      return <Spinner />
   }

   return (<>
      <section className='heading'>
         <h1> Welcome <br/> {user && user.name} </h1>
         <p>Cigar Inventory Dashboard</p>
      </section>

      <CigarForm />
      
      <UpdateCigarForm />

      <section className='content'>
        {cigars.length > 0 ? (
          <div className='cigars'>
            {cigars.map((cigar) => (
              <CigarItem key={cigar._id} cigar={cigar} />
            ))}
          </div>
        ) : (
          <h3>Your account has not entered any cigars into inventory.</h3>
        )}
      </section>

   </>)
}

export default Dashboard