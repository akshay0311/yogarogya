import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import {storage} from "../firebase.js";
import "./Setting.css";

function Setting() {
    const allInputs = {imgUrl: ''}
    const [imageAsFile, setImageAsFile] = useState('');
    const [imageAsUrl, setImageAsUrl] = useState(allInputs);
    const [email,setEmail] = useState('')
    const [fname,setFname] = useState('');
    const [lname,setLname] = useState('')
    const [phone,setPhone] = useState('')
    const [checked,setChecked] = useState(true)

    const handleImageAsFile = (e) => {
      const image = e.target.files[0]
      setImageAsFile(imageFile => (image))
    }

    const fireBaseUpload = e => {
        e.preventDefault();
        if(imageAsFile === '') {
          alert("Please select a file before uploading")
        }
        const uploadTask = storage.ref(`/images/${imageAsFile.name}`).put(imageAsFile)
        uploadTask.on('state_changed', 
            (snapShot) => {
            }, (err) => {
            }, () => {
              storage.ref('images').child(imageAsFile.name).getDownloadURL()
              .then(fireBaseUrl => {
                console.log("firebase")
              setImageAsUrl(prevObject => ({...prevObject, imgUrl: fireBaseUrl}))
            })
          })
        }
        return (
            <div className="setting">
                <Grid className="setting_gridContainer" container>
                  <Grid className="setting_gridItem" item xs={12} sm={4}>
                        <Paper className="setting_paper">
                          <h1>Image Uploads</h1>
                          <br/>
                          <img src= {imageAsUrl.imgUrl} className="setting_image"/>
                          <br/>
                          <form onSubmit= {fireBaseUpload}>
                              <input 
                                type="file"
                                onChange = {handleImageAsFile}
                              />
                              <br/>
                              <Button type="submit" variant="contained">Upload</Button>
                            </form>
                        </Paper>  
                  </Grid>
                  <Grid className="setting_gridItem" item xs={12} sm={8}>
                        <Paper className="setting_paper">
                          <h1>Change your personal info</h1>
                          <br/>
                          <form>
                            <h4>Email</h4>
                            <input
                            type = "text"
                            value = {email}
                            className="setting_input"
                            onChange = {e=>setEmail(e.target.value)}
                            />
                            <h4>First Name</h4>
                            <input
                            type = "text"
                            value = {fname}
                            className="setting_input"
                            onChange = {e=>setFname(e.target.value)}
                            />
                            <br/>
                            <h4>Last Name</h4>
                            <input
                            type = "text"
                            value = {lname}
                            className="setting_input"
                            onChange = {e=>setLname(e.target.value)}
                            />
                            <br/>
                            <h4>Phone Number</h4>
                            <input
                            type = "text"
                            value = {phone}
                            className="setting_input"
                            onChange = {e=>setPhone(e.target.value)}
                            />
                          </form>
                        </Paper>
                  </Grid> 
                  <Grid className = "setting_gridItem" item xs={12} sm={4}>

                  </Grid>
                  <Grid className="setting_gridItem" item xs={12} sm={8}>
                        <Paper className="setting_paper">
                              <h1>Geolocation</h1>
                              <label for="location">Give your current location</label>
                              <input 
                              id="location" 
                              type="checkbox"
                              onChange={e=>console.log(e)}
                              />
                        </Paper>
                  </Grid>        
                </Grid>
            </div>
        )
    }
export default Setting;
