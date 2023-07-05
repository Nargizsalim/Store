import { useState }from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "@/components/login/LoginPage.css"

export default function Form({ title, handleClick } ) {
  const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [displayName, setdisplayName] = useState("")
    return (
        <>
            {
                title === "Create your 6pm account" &&
                <TextField
                id="filled-password-input"
                    label="Your Name"
                    value={displayName
                    }
                    onChange = {(e)=>setdisplayName(e.target.value)}
                type="text"
                variant="filled"
                />
            }
           
            <TextField
    id="filled-password-input"
    label="Email"
      type="email"
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
    variant="filled"
        />
         <TextField
    id="filled-password-input"
    label="Password"
      type="password"
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
    autoComplete="current-password"
    variant="filled"
            />
          <Button variant="contained" sx={{
              height: "45px", background:"#b12c35"}} onClick={()=>handleClick(email, password,displayName)}>{title}</Button>
      </>
    
  )
}
