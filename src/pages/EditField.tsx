import React,{useState , useEffect} from "react";
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import { IonTextarea } from "@ionic/react";
import './EditField.css'

const EditField: React.FC = () => {
    const[description , setDesciption] = useState('');
    const[area , setArea] = useState('');//Table Field

    return(
        <div className="container">
            <div>
                <h1>Edit Your Field</h1>
            </div>
            <div className="desciption">
                <label htmlFor="">Description</label>
                        <textarea name="description" 
                        rows={5}
                        cols={30}
                        >
                    </textarea>
            </div>
            <div className="area">
                <label htmlFor="area">Area</label>
                <input type="number" name="" id="" placeholder="area" />
            </div>
        </div>
    )
};
export default EditField;