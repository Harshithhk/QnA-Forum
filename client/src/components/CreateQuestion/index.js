import React, { useState } from 'react'

// import {useForm} from 'react-hook-form'

import styles from './CreateQuestion.module.css'
import TextField from '@material-ui/core/TextField'

import axios from 'axios'

export default function MultilineTextFields() {

  const [value, setValue] = React.useState({title:``,description:``})

  const handleChange = (event) => {
      if(event.target.name === "title"){
        setValue({...value,title:event.target.value})
      }
      if(event.target.name === "description"){
        setValue({...value,description:event.target.value})
      }
  };


  // Submitting Question
  var questionId;
  const submitQuestion =async()=>{
      try{
        // TEXT
      let token = localStorage.getItem("auth-token")
      const res = await axios.post('http://localhost:5000/api/questions/',value,{headers:{"authorization": token}})
      questionId = res.data.questionId
      console.log(questionId)
      console.log(res)
      setValue({title:``,description:``})

      await imgSubmit()
      window.location='/'
    }catch(err){
          console.log(err)
      }
  }

  //______________ UPLOADING IMAGES_______________________

  const [ picture , setPicture] = useState()

  const fileHandler=(e)=>{
    console.log(e.target.files[0])
    setPicture (e.target.files[0])
    // console.log(picture)
  }
  const imgSubmit=async()=>{
    const formData = new FormData()
    formData.append("picture",picture)

    let token = localStorage.getItem("auth-token")
    const res = await axios.post(`http://localhost:5000/api/questions/image/${questionId}`,formData,{headers:{"authorization": token}})
    console.log(res)
    alert(JSON.stringify(res))
  }

  return (
      
  
      <div className={styles.cqHeader}>
          <div className={styles.switch}> Create Question</div>
           
      
        <TextField
          id="standard-multiline-flexible"
          label="Title"
          multiline
          rowsMax={4}
          name="title"
          value={value.title}
          onChange={handleChange}
          fullWidth={70}
          style={{marginTop:"20px"}}
          variant="outlined"
        />
        <br/> 
        <br/> 
        <input type="file" name = "picture" onChange={fileHandler}/>
        <TextField
          id="standard-multiline-static"
          label="Description"
          multiline
          rows={4}
          rowsMax={18}
          fullWidth={70}
          style={{marginTop:"20px"}}
          variant="outlined"
          name="description"
          value={value.description}
          onChange={handleChange}
        />
        <button  onClick={submitQuestion} className={styles.post}>Post</button>
        
        </div>
       
        )
  }
