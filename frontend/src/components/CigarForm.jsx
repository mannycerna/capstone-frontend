import {useState} from 'react'
import { useDispatch} from 'react-redux'
import {createCigar} from '../features/cigars/cigarSlice'


function CigarForm() {

    const [productid, setProductid] = useState('')
    const [name, setName] =  useState('')
    const [brand, setBrand] =  useState('')
    const [type, setType] =  useState('')
    const [size, setSize] =  useState('')
    const [wrapper, setWrapper] =  useState('')
    const [binder, setBinder] =  useState('')
    const [filler, setFiller] =  useState('')
    const [price, setPrice] =  useState('')
    const [quantity, setQuantity] =  useState('')

    const dispatch = useDispatch()

    const onSubmit = e => {
        e.preventDefault()

        dispatch(createCigar({productid, name, brand, type, size, wrapper, binder, filler, price, quantity}))
        setProductid('')
        setName('')
        setBrand('')
        setType('')
        setSize('')
        setWrapper('')
        setBinder('')
        setFiller('')
        setPrice('')
        setQuantity('')
    }
    return ( 
    <section className='form'>
        <form onSubmit={onSubmit}>
        <div className='form-group'>
            <label htmlFor='text'>ProductID</label>
            <input 
                type='productid'
                name='productid'
                id='productid'
                value={productid} 
                onChange={(e) => setProductid(e.target.value)}
                />
            <label htmlFor='name'>Name</label>
           <input 
                type = 'name'
                name = 'name'
                id='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
            <label htmlFor='brand'>Brand</label>
            <input 
                type = 'text'
                name = 'brand'
                id='brand'
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                />
            <label htmlFor='type'>Type</label>
            <input 
                type = 'text'
                name = 'type'
                id='type'
                value={type}
                onChange={(e) => setType(e.target.value)}
                />
            <label htmlFor='size'>Size</label>
            <input 
                type = 'text'
                name = 'size'
                id='size'
                value={size}
                onChange={(e) => setSize(e.target.value)}
                />
            <label htmlFor='wrapper'>Wrapper</label>
            <input 
                type = 'text'
                name = 'wrapper'
                id='wrapper'
                value={wrapper}
                onChange={(e) => setWrapper(e.target.value)}
                />
            <label htmlFor='binder'>Binder</label>
            <input 
                type = 'text'
                name = 'binder'
                id='binder'
                value={binder}
                onChange={(e) => setBinder(e.target.value)}
                />
            <label htmlFor='filler'>Filler</label>
            <input 
                type = 'text'
                name = 'filler'
                id='filler'
                value={filler}
                onChange={(e) => setFiller(e.target.value)}
                />
            <label htmlFor='price'>Price</label>
            <input 
                type = 'text'
                name = 'price'
                id='price'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                />
            <label htmlFor='quantity'>Quantity</label>
            <input 
                type = 'text'
                name = 'quantity'
                id='quantity'
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                />
            </div>
        <div className = 'form-group'>
            <button 
            className='btn btn-block' 
            type='submit'>Add Cigar</button>
        </div>
        </form>
    </section>
    )
}

// export default function CigarForm() {
//     const [productid, setProductid] =  useState('')
    // const [name, setName] =  useState('')
    // const [brand, setBrand] =  useState('')
    // const [type, setType] =  useState('')
    // const [size, setSize] =  useState('')
    // const [wrapper, setWrapper] =  useState('')
    // const [binder, setBinder] =  useState('')
    // const [filler, setFiller] =  useState('')
    // const [price, setPrice] =  useState('')
    // const [quantity, setQuantity] =  useState('')

//     const dispatch = useDispatch()


//     const onSubmit = e => {
//         e.preventDefault()

//         dispatch(createCigar({productid, name, brand, type, size, wrapper, binder, filler, price, quantity }))
//         setProductid('')
//         setName('')
//         setBrand('')
//         setType('')
//         setSize('')
//         setWrapper('')
//         setBinder('')
//         setFiller('')
//         setPrice('')
//         setQuantity('')
//     }   
    
//     return (
//         <section className = 'form'>
//             <form onSubmit={onSubmit}>
//             <div className='form-group'>
//             <label htmlFor='productid'>Product ID</label>
//             <input 
//                 type = 'text'
//                 name = 'productid'
//                 id='productid'
//                 value={productid}
//                 onChange={(e) => setProductid(e.target.value)}
//                 />
//             <label htmlFor='name'>Name</label>
//             <input 
//                 type = 'text'
//                 name = 'name'
//                 id='name'
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 />
//             <label htmlFor='brand'>Brand</label>
//             <input 
//                 type = 'text'
//                 name = 'brand'
//                 id='brand'
//                 value={brand}
//                 onChange={(e) => setBrand(e.target.value)}
//                 />
//             <label htmlFor='type'>Type</label>
//             <input 
//                 type = 'text'
//                 name = 'type'
//                 id='type'
//                 value={type}
//                 onChange={(e) => setType(e.target.value)}
//                 />
//             <label htmlFor='size'>Size</label>
//             <input 
//                 type = 'text'
//                 name = 'size'
//                 id='size'
//                 value={size}
//                 onChange={(e) => setSize(e.target.value)}
//                 />
//             <label htmlFor='wrapper'>Wrapper</label>
//             <input 
//                 type = 'text'
//                 name = 'wrapper'
//                 id='wrapper'
//                 value={wrapper}
//                 onChange={(e) => setWrapper(e.target.value)}
//                 />
//             <label htmlFor='binder'>Binder</label>
//             <input 
//                 type = 'text'
//                 name = 'binder'
//                 id='binder'
//                 value={binder}
//                 onChange={(e) => setBinder(e.target.value)}
//                 />
//             <label htmlFor='filler'>Filler</label>
//             <input 
//                 type = 'text'
//                 name = 'filler'
//                 id='filler'
//                 value={filler}
//                 onChange={(e) => setFiller(e.target.value)}
//                 />
//             <label htmlFor='price'>Price</label>
//             <input 
//                 type = 'text'
//                 name = 'price'
//                 id='price'
//                 value={price}
//                 onChange={(e) => setPrice(e.target.value)}
//                 />
//             <label htmlFor='quantity'>Quantity</label>
//             <input 
//                 type = 'text'
//                 name = 'quantity'
//                 id='quantity'
//                 value={quantity}
//                 onChange={(e) => setQuantity(e.target.value)}
//                 />
//             </div>
//             <div className = "form-group">
//                 <button className = 'btn btn-block' type='submit'>
//                     Add Cigar To Inventory
//                 </button>
//             </div>
//             </form>
//         </section>
    // )
// }
export default CigarForm