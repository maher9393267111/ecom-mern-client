import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useState, useEffect, useRef } from "react";
import { Select, Input, Button } from "antd";
const { Option } = Select;

const Product = () => {
  const apiURL = "http://localhost:5000/api/product/add-product";

  // fetch from redux category
  const { allcategories } = useSelector((state) => state.category);

  const hiddenFileInput = useRef(null);
  const hiddencolorFileInput = useRef(null);

  const [name, setName] = useState("");
  const [discount, setDiscount] = useState(0);
  const [price, setPrice] = useState(0);
  const [media, setMedia] = useState(null);
  const [resImage, setResImage] = useState([]);

  const [showmainImages, setShowmainImages] = useState([]);
  console.log("showmainImages--->", showmainImages);
  const [showcolorImages, setShowcolorImages] = useState([]);

  const [files, setFiles] = useState("");
  const [colorsfiles, setcolorsFiles] = useState(""); // handle colorsimages files change
  const [info, setInfo] = useState({});

  const [colors, setColors] = useState([]);
  const [tags, setTags] = useState([]);
  const [category, setCategory] = useState([]);

  const [oldprice, setOldprice] = useState(0);

  // make mathrandom numbe

  const [selectedCategory, setSelectedCategory] = useState();

  const children1 = [
    "black",
    "red",
    "orange",
    "blue",
    "grey",
    "green",
    "white",
    "yellow",
    "brown",
    "beige",
    "purple",
    "pink",
    "silver",
    "gold",

  ];

  const children = [];

  var item;
  for (item in children1) {
    children.push(<Option key={children1[item]}>{children1[item]}</Option>);
  }

  const colorhere = [];

  function handleChange(value) {
    console.log(`selected ${value}`);

    // push selected colors to colors array

    colorhere.push(value);

    setColors(colorhere);
    console.log("colorhere-->", colorhere);
  }

  // ---tags----

  const tagsArray1 = [

    "Clocks",
    "Minimalism",
    " Lighting",
    "Accessories",
    "toys",
    "furniture",
    "Sweats",
    "shoes",
    "bags",
    "jewelry",
    "watches",
    "retail",
    "Cannabis",
    "tools",
    "gifts",
    "home",
    "beauty",
    "food",
    "health",
    "sports",
    "travel",
    "beauty",
  ];

  const tagsArray = [];

  var itemtag;
  for (itemtag in tagsArray1) {
    tagsArray.push(
      <Option key={tagsArray1[itemtag]}>{tagsArray1[itemtag]}</Option>
    );
  }

  const tagshere = [];

  function handleTagsChange(value) {
    console.log(`selected ${value}`);
    tagshere.push(value);

    console.log("tagshere", tagshere);
    console.log("tags-->", tags);
    console.log("tags length-->", tags.length, "colorhere", tagshere.length);
    setTags(tagshere);
    console.log("tags result-->", tags);
  }

  const handleClickUplaodicon = (event) => {
    hiddenFileInput.current.click();
  };

  const handleClickUplaodiconcolors = (event) => {
    hiddencolorFileInput.current.click();
  };

  const handleChangeImages = (event) => {
    const fileUploaded = event.target.files;
    console.log("fileUploaded", fileUploaded);
    setFiles(fileUploaded);
    console.log("files-main-images", files);
  };

  // handle colorsimages files change

  const handlecolorsChangeImages = (event) => {
    const colorsfileUploaded = event.target.files;
    setcolorsFiles(colorsfileUploaded);
    console.log("colorsfiles upload colors---->", files);
  };

  // send data to server

  const handleclick = async (event) => {
    event.preventDefault();
    try {
      const listimages = await Promise.all(
        // listimages is--> array of  objects --> object mainimgs = {secure_url:secure_url,public_id:public_id};
        Object.values(files).map(async (file) => {
          const data = new FormData();
          data.append("file", file);
          data.append("upload_preset", "mystory123");
          data.append("folder", "/products-main");
          const uploadRes1 = await axios.post(
            "https://api.cloudinary.com/v1_1/maher9911133/image/upload",
            data
          );

          const { url, secure_url, public_id } = uploadRes1.data;

          setShowmainImages(url)
          console.log("showimages------>", showmainImages);

       //   console.log("uploadRes mainnnnnnn", uploadRes1);



          let mainimgs = {};
          return (mainimgs = { secure_url: secure_url, public_id: public_id });
        })
      );




      // ---images colors upload to cloudinary----

// if  (colorsfiles.length !== null) {

      const colorslist = await Promise.all(
        // colorslist is--> array of  objects --> object mainimgs = {secure_url:secure_url,public_id:public_id};
        Object.values(colorsfiles).map(async (file) => {
          const datacolor = new FormData();
          datacolor.append("file", file);
          datacolor.append("upload_preset", "mystory123");
          datacolor.append("folder", "/products-colors");
          const uploadRes2 = await axios.post(
            "https://api.cloudinary.com/v1_1/maher9911133/image/upload",
            datacolor
          );

          console.log("uploadRes colorssssssssssssssssss", uploadRes2);

          const { url, secure_url, public_id } = uploadRes2.data;

          let colsmgs = {};
          return (colsmgs = { secure_url: secure_url, public_id: public_id });
        })
      );

    

      //--------------------------------------------------

      const newproduct = {
        price,
        name,
        discount,
        colorimages: colorslist.length > 0 ? colorslist : null,
        category: category,
        oldprice,
        tags: tags[0],
        colors: colors[0],
        images: listimages, // array of urls of images
      };
      console.log("new product--->", newproduct);

      await axios.post(apiURL, newproduct).then((res) => {
        console.log("respons name from post product-->", res);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container pb-[50px] mb-55px text-center">
      <div>
        <h1 className="text-xl w-[300px] mx-auto bg-blue-300 p-[6px] rounded-lg">
          Product Create   {showmainImages.length}
        </h1>
      </div>

      <div>
        <div className="form-container">
          <div className="w-[300px] mx-auto">
            <div className="pro-name">
              <h1 className="font-bold pb-[10px]"> product Name</h1>

              <Input
                type="text"
                id="name"
                onChange={(e) => setName(e.target.value)}
                placeholder="Productname"
              />
            </div>

            {/* ----------------- */}

            {/* -=categories-- */}

            <div>
              <div className=" w-[300px] p-[20px] p1 mt-[20px] mb-4
              
              ">
                {/* make caetegories in select inputs  */}
                {category}
                <select
                className="w-[100%]    border border-solid border-green-300
                p1
                rounded
                transition
                ease-in-out   focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  onChange={(e) => setCategory(e.target.value)}
                  value={category.name}
                >
                  {allcategories.map((category) => (
                    <option value={category._id}>{category.name}</option>
                  ))}
                </select>
              </div>
            </div>


{/* ---discount-- */}

<div>
              <h1 className="font-bold p1"> product discount</h1>

              <Input
                type="number"
                id="numberdiscount"
                onChange={(e) => setFiles(e.target.value)}
                placeholder="Product-discount"
              />
            </div>



            {/* ----price---- */}

            <div>
              <h1 className="font-bold p1"> product Price</h1>

              <Input
                type="number"
                id="number"
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Productprice"
              />
            </div>

            {/* ----------------- */}

            <div>
              <h1 className=" p1 font-bold">product OldPrice</h1>

              <Input
                type="number"
                id="number"
                onChange={(e) => setOldprice(e.target.value)}
                placeholder="Productoldprice"
              />
            </div>

            <div className="p-[22px]">
              <Select
                mode="multiple"
                allowClear
                style={{ width: "100%" }}
                placeholder="Please select"
                // defaultValue={['black', 'white']}
                onChange={handleChange}
              >
                {children}
              </Select>
            </div>

            {/* -colors-map */}

            <div>
              <h1 className=" text-[17px] text-blue-500 font-bold ">
                colors maping
              </h1>
              <div className="flex w-[222px] bg-red-300  justify-between  p-[13px]  mx-auto ">
                {colors &&
                  colors.map((color, index) => (
                    <div>
                      <div className="">{color}</div>
                    </div>
                  ))}
              </div>
            </div>

            {/* ----tags---- */}

            <div className="p-[22px]">
              <h1 className="p1 font-bold  text-2xl">Tags Select</h1>

              <Select
                mode="multiple"
                allowClear
                style={{ width: "100%" }}
                placeholder="Please select tags"
                // defaultValue={['black', 'white']}
                onChange={handleTagsChange}
              >
                {tagsArray}
              </Select>
            </div>

            {/* --upload images-- */}
            <div className="p-[44px] ">
              <>
                <Button
                  className="w-[189px] p-[12px]"
                  danger
                  onClick={handleClickUplaodicon}
                >
                  Upload Main Images
                </Button>
                <input
                  type="file"
                  multiple
                  ref={hiddenFileInput}
                  onChange={handleChangeImages}
                  style={{ display: "none" }}
                />
              </>
            </div>


{/* ---------main images show---- */}


<div>

<div>


{ showmainImages && showcolorImages.length > 0 &&  showmainImages.map((image, index) => (
  

<div>

<img src={image} alt="" />

</div>

))}







</div>








</div>





            <>
              <Button
                className="w-[189px] mb-[44px]"
                danger
                onClick={handleClickUplaodiconcolors}
              >
                Upload Colors Images
              </Button>
              <input
                type="file"
                multiple
                ref={hiddencolorFileInput}
                onChange={handlecolorsChangeImages}
                style={{ display: "none" }}
              />
            </>

            {/* ------ send product ---- */}

            <div>
              <Button className="w-[190px] bg-green-200" onClick={handleclick}>
                CreateProduct
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
