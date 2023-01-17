import GoogleLogo from './GoogleLogo.svg'
// import logo1 from './logo.svg'
import './App.css'

const Logo = ()=>{
    return (
        <div className = "Image">
            <img src = {GoogleLogo} className = "App-Logo" alt = "Logo"/>
            <p id = 'Head' > Canada </p>
        </div>
    )
}




export default Logo