import React from "react";
import axios from "axios";

    

import { useState, useEffect } from "react";
const Category = () => {
  const [name, setName] = useState("");
  const [file, setFile] = useState("");
  const [image, setImage] = useState({});

const apiURL = "http://localhost:5000/api/category/add-category";


  const imageUpload = async () => {
    console.log(file);
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "mystory123");
    data.append("cloud_name", "maher9911133");
    // sepecific folder

    data.append("folder", "category");
    const res = await fetch(
      "	https://api.cloudinary.com/v1_1/maher9911133/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const res2 = await res.json();
    const catimgObj = {};
    catimgObj.secure_url = res2.secure_url;
    catimgObj.public_id = res2.public_id;
    setImage(catimgObj);
    console.log("catimgobj--->", catimgObj);
    console.log(res2, "rss------------------>");
    return res2.url;
  };



// create category

const createCategory = async (e) => {

    const  obj ={
        name,
        image
    
    }



    e.preventDefault();

    try {
        let res = await axios.post(`${apiURL}`, (obj));
        return res.data;
      } catch (error) {
        console.log(error);
      }
   
}





  return (
    <div>
    Category Create


{/* -name-- */}

<div>
        <input
          type="text"
         
          onChange={(e) => setName(e.target.value)}
        />
      </div>


      <div>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
      </div>
      <button type="submit" onClick={imageUpload}>
        upload
      </button>


<div>

<button
onClick={createCategory}
className="btn"

>Create</button>


</div>

    </div>
  );
};

export default Category;
