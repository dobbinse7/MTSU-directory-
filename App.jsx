import { useState } from 'react'
import CreateLab from "./components/labs/create"
import LabslistView from "./components/lablist"
import LabDetailView from "./components/labs/show"
import StudentInfo from "./components/student/studentform"
import './App.css'
import { Route, Link, Switch, useLocation} from 'wouter'




function App() {
 
  return (
    <div className="App">
      <Switch>
      <Route path="/login">
      <div className="header">
        <ul>
          <li>
            <Link href="/back">back</Link>
          </li>
        </ul>
        
      </div>
        <p>Please Login</p>
        <br></br><br></br>
        <input type="text" placeholder="full name"></input>
        <br></br><br></br>
        <input type="text" placeholder='M#'></input>
        <br></br><br></br>
        <Link href="/logged">
          <button>Submit</button>
        </Link>
      </Route>
      <Route  path="/logged">
          <div className="header">
            <br></br>
            <Link href="/back">logout</Link>
          </div>
          <div>
            <a href="https://www.mtsu.edu/urc/soar.php" target="_blank">
              <img src="https://www.mtsu.edu/urc/images/SOAR_Logo_small.png" className="logo" alt="SOAR logo" />
            </a>
            
          </div>

          <h1>Website/Lab Directory</h1>
          <Link href="/Create/"><button>Create New Lab</button></Link>
          <br></br><br></br>
          <LabslistView/>
      </Route>
        <Route path="/back">
          <div className="header">
            <br></br>
            <Link href="/login">login</Link>  
          </div>
          <div>
            <a href="https://www.mtsu.edu/urc/soar.php" target="_blank">
              <img src="https://www.mtsu.edu/urc/images/SOAR_Logo_small.png" className="logo" alt="SOAR logo" />
            </a>
            
          </div>

          <h1>Website/Lab Directory</h1>
          <br></br><br></br>
          <LabslistView/>
        </Route>

        <Route path="/Create/">
          <CreateLab/>
        </Route>
        <Route path="/show/:id">
          <LabDetailView />
        </Route>
        <Route path="/student/">
          <StudentInfo />
        </Route>
        <Route>
        <div className='first'>
        <div>
            <a href="https://www.mtsu.edu/urc/soar.php" target="_blank">
              <img src="https://www.mtsu.edu/urc/images/SOAR_Logo_small.png" className="logo" alt="SOAR logo" />
            </a>
            <a href="https://www.mtsu.edu" target="_blank">
              <img src="https://mcdn.wallpapersafari.com/medium/37/16/C97idc.jpg" className="logo" alt="SOAR logo" />
            </a>
            
          </div>
          <Link href='/login'><button className='firstPage'>Professor</button></Link> 
          <Link href='/back'><button className='firstPage'>Student</button></Link>
          </div>
        </Route>
      </Switch>
    </div>
  )
}

export default App
