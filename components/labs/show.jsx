// the following file allows you to see details of the labs 
import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'wouter';
import fb from '../../firebase';
const DB = fb.firestore()
const Labslist = DB.collection('labs');

const LabDetailView = () => {
    const {id} = useParams();
    const [labs, Setlabs] = useState([]);
    Labslist.doc(id).get().then((snapshot) => {
        const data = snapshot.data()
        // initialize variable with data
        Setlabs(data);
    });

    return (
        <div> 
            <div>
            <Link href={"/back"}> 
                        <button> Back to Browse </button>
            </Link>
            </div>
            <div>
            <p> Title: {labs.Title}</p>
            <p> Overview: {labs.Overview} </p>
            <p> Professor: {labs.Prof}</p>
            <p> Body: {labs.Body} </p>
            <p> Skills: {labs.Skills}</p>
            <p> Semesters: {labs.Semester} </p>
            </div>
            
            <div> 
            <Link to = {"/student/"}> 
                        <button> Apply </button>
            </Link>
            </div>
           

        </div>
    );
};

export default LabDetailView;