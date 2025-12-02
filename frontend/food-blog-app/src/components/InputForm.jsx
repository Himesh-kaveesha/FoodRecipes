import React, { useState } from 'react'
import axios from 'axios'

function InputForm({setIsOpen}) {

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [isSignUp,setIsSignUp] = useState(false)
  const [error,setError] = useState("")

    const handleOnSubmit=async(e)=>{
      e.preventDefault()
      let endpoint = isSignUp ? "signup" : "login"
      await axios.post(`http://localhost:5000/${endpoint}`,{email,password})
      .then((res)=>{
        localStorage.setItem("token",res.data.token)
        localStorage.setItem("user",JSON.stringify(res.data.user))
        setIsOpen()
    })
    .catch(data=>setError(data.response?.data?.message))

    }

  return (
   <>
    <form className='form' onSubmit={handleOnSubmit}>
        <div className='form-control'>
            <label>Email</label>
            <input type='email' className='input' onChange={(e) => setEmail(e.target.value)} required>
            </input>

            <label>Password</label>
            <input type='password' className='input' onChange={(e) => setPassword(e.target.value)} required>
            </input>

            <button type='submit'>{isSignUp ? "Sign Up" : "Login"}</button>
            {(error!=="") && <h6 className="error">{error}</h6>}
            <p onClick={() => setIsSignUp(!isSignUp)}>{(isSignUp)? "Already have an account? Login" : "Create new account"}</p>
        </div>

    </form>
   </>
  )
}

export default InputForm
