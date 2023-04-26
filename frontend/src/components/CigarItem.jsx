
import {useDispatch} from 'react-redux'
import {deleteCigar} from '../features/cigars/cigarSlice'



function CigarItem( {cigar}) {
  
    const dispatch = useDispatch()

    return (
        <div className='cigar'>
            <div>
                  <p>Added: {new Date(cigar.createdAt).toLocaleString('en-US')}</p>
            </div>
            <p>{cigar.productid}</p>
            <p>{cigar.name}</p> 
            <p>{cigar.brand}</p>
            <p>{cigar.type}</p>
            <p>{cigar.size}</p>
            <p>{cigar.wrapper}</p>
            <p>{cigar.binder}</p>
            <p>{cigar.filler}</p>
            <p>{cigar.price}</p>
           
            <br/>
            <button onClick={() => dispatch(deleteCigar(cigar._id))} className='close'>DELETE</button>
        </div>
    )
}

export default CigarItem