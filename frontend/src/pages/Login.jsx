import {React, useState, useEffect} from 'react'
import {FaSignInAlt} from 'react-icons/fa'

export default function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const {email, password, }  = formData

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (error) => {
        error.preventDefault()
    }

    return (
        <>
            <section className = 'heading'>
                <h1>
                    <FaSignInAlt /> Login
                </h1>
                <p>Please Login</p>
            </section>

            <section classname = 'form'>
                <form onSubmit={onSubmit}>

                    <div className = 'form-group'>
                        <input type='text' 
                         className= 'form-control' 
                         id='email'
                         name='email'
                         value={email}
                         placeholder='Enter email'
                        onChange={onChange}
                     />
                    </div>

                    <div className = 'form-group'>
                        <input type='text'
                         className= 'form-control' 
                         id='password'
                         name='password'
                         value={password}
                         placeholder='Enter password'
                        onChange={onChange}
                     />
                    </div>
                    
                    <div className = 'form-group'>
                        <button type =  'submit' className = 'btn btn-block'>Submit</button>
                    </div>
                </form>
            </section>
        </>
    )
}