import React from 'react'

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

  const submitQuestion =async()=>{
      try{
      let token = localStorage.getItem("auth-token")
      const res = await axios.post('http://localhost:5000/api/questions/',value,{headers:{"authorization": token}})
      console.log(res)
      setValue({title:``,description:``})
        window.location='/'
    }catch(err){
          console.log(err)
      }
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
