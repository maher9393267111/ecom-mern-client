import React from 'react';
import {useState,useEffect} from 'react';
const Category = () => {

const [name,setName] = useState('');
const [file,setFile] = useState('');



const imageUpload = async ()=>{
    console.log(file)
     const data =  new FormData()
     data.append('file',file)
     data.append('upload_preset',"mystory123")
     data.append('cloud_name',"maher9911133")
     const res = await fetch("	https://api.cloudinary.com/v1_1/maher9911133/image/upload",{
       method:"POST",
       body:data
     })
     const res2  = await res.json()
     console.log(res2,'rss------------------>')
     return res2.url
}



    return (

        <div>
            category

<div>


<input type="file" 
              accept="image/*"

              onChange={(e)=>setFile(e.target.files[0])}
            />



</div>



<button type="submit"    onClick={imageUpload}>upload</button>



        </div>
    );
}

export default Category;
