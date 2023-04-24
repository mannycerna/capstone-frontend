import {useDispatch} from 'react-redux'
import {deleteCigar} from '../features/cigars/cigarSlice'



function CigarItem( {cigar}) {
    const dispatch = useDispatch()
    
    return (
        <div className='cigar'>
            <div>
                  <h1>Entered into Inventory :</h1>
                  <h2>{new Date(cigar.createdAt).toLocaleString('en-US')}</h2>
            </div>
        
            <h3>{cigar.name}</h3>
            <p>{cigar.productid}</p>
            <p>{cigar.brand}</p>
            <p>{cigar.type}</p>
            <p>{cigar.size}</p>
            <p>{cigar.wrapper}</p>
            <p>{cigar.binder}</p>
            <p>{cigar.filler}</p>
            <p>{cigar.price}</p>
            <p>{cigar.productid}</p>
            <button onClick={() => dispatch(deleteCigar(cigar._id))} className='close'>X</button>
        </div>
    )
}

export default CigarItem