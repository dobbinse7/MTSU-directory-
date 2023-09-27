import React, {useState, useEffect} from 'react';
import { Link } from 'wouter';
import fb from '../firebase';
const DB = fb.firestore()
const Labslist = DB.collection('labs');

const LabslistView = () => {
    // list function to display 
    const [labs, Setlabs] = useState([]);
    // search query
    const [search, SetSearch] = useState ([""]);

    // catch and show data to users
    useEffect(() => {
        // Subscribe to query with onSnapshot
        const unsubscribe = Labslist.limit(100).onSnapshot(querySnapshot => {
            // Get all documents from collection - with IDs
            const data = querySnapshot.docs.map(doc => ({
              ...doc.data(),
              id: doc.id,
            }));
            // Update state
            Setlabs(data);
          });
  
          // Detach listener
          return unsubscribe;

    },[])

    const SearchLabs = (e)=> {
        e.preventDefault();
        Setlabs(labs.filter((labs)=>
            labs.Title.toLowerCase().includes(search.toLowerCase()) || labs.Title.toUpperCase().includes(search.toUpperCase())||
            labs.Overview.toLowerCase().includes(search.toLowerCase()) || labs.Overview.toUpperCase().includes(search.toUpperCase()) ||
            labs.Prof.toLowerCase().includes(search.toLowerCase()) || labs.Prof.toUpperCase().includes(search.toUpperCase())||
            labs.Body.toLowerCase().includes(search.toLowerCase()) || labs.Body.toUpperCase().includes(search.toUpperCase()) ||
            labs.Skills.toLowerCase().includes(search.toLowerCase()) || labs.Skills.toUpperCase().includes(search.toUpperCase())||
            labs.Semester.toLowerCase().includes(search.toLowerCase()) || labs.Semester.toUpperCase().includes(search.toUpperCase())
        ));
    };

    return (
        <div>
            
            <form onSubmit={(e)=> {SearchLabs(e)}}>
                <input placeholder="enter research field" onChange={(e)=> {SetSearch(e.target.value)}}/>
                <br></br> 
                <div className="card">
                    <button type="submit">Search</button>
                    <p>
                    MTSU's Lab Directory
                    </p>
                </div>
                <p className="read-the-docs">
                    Use the search bar or click the header at the top to navigate or click the logo to go to mtsu's website
                </p>
                <br></br><br></br>
                <div className='closer'>Or scroll to browse the full list</div>
                <br></br><br></br>
            </form>
          
            {labs.map(lab=> (
                <div key = {lab.id}>
                    <p> Title: {lab.Title}</p>
                    <p> Overview: {lab.Overview} </p>
                    <p> Professor: {lab.Prof}</p>
                    { /*<p> Body: {lab.Body} </p>
                    <p> Skills: {lab.Skills}</p> */}
                    <p> Semesters: {lab.Semester} </p>
                    <Link href={"/show/" + lab.id}> 
                        <button> View </button>
                    </Link>
                    <br></br><br></br>
                    <div className='ending'>why</div>
                    <br></br>
                </div>
            ))}

        </div>
    );

};
export default LabslistView;