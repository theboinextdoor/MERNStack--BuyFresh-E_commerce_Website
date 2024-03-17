import { BsCloudUpload } from "react-icons/bs";
import { ImageToBase64 } from "../utility/imageToBase64";
import { useRef, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";



const NewProducts = () => {
  const BACKEND_URL = import.meta.env.VITE_SERVER_URL
  const [imageData, setImageData] = useState("");
  const name = useRef();
  const category = useRef();
  const image = useRef();
  const price = useRef();
  const description = useRef();

  const uploadImage = async (e) => {
    const data = await ImageToBase64(e.target.files[0]);
    setImageData(data); // Update image data state
  };


  
  

  const handleSubmmitButton = async (e) => {
    e.preventDefault();
    const formData = {
      name: name.current?.value,
      category: category.current?.value,
      image: imageData,
      price: price.current?.value,
      description: description.current?.value,
    };

    try{
        const response = await axios.post(`${BACKEND_URL}/NewProducts`, formData)
        
        toast.success("Product uploaded succesfully")
    }catch(error) {
     
      toast.error("Something Went wrong")
    }

    

   
      setImageData('');

      (name.current.value = ""),
      // (category.current.value = ""),
      (image.current.value = ""),
      (price.current.value = ""),
      (description.current.value = "");
  };

  return (
    <div className="p-4 bg-gradient-to-r from-slate-100 to-slate-400 h-full text-lg">
      <form
        className="m-auto w-full max-w-md p-4 shadow-md flex flex-col bg-white rounded-lg"
        onSubmit={handleSubmmitButton}
      >
        <label htmlFor="name">Name</label>
        <input
          ref={name}
          type="text"
          name="name"
          required
          
          className="bg-slate-200 p-1 my-2 rounded-md outline-none "
        />

        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          className="bg-slate-200 p-2 my-2"
          ref={category}
          // value={category}
          // defaultValue="ice-Cream"
        >
          <option value="none">Select Category</option>
          <option value="fruit">Fruit</option>
          <option value="vegetable">Vegetable</option>
          <option value="ice-cream">Icec Cream</option>
          <option value="dosa">Dosa</option>
          <option value="pizza">Pizza</option>
          <option value="Rice">Rice</option>
          <option value="cake">Cake</option>
          <option value="burger">Burger</option>
          <option value="burger">Non-Veg</option>
          <option value="other">other</option>
        </select>

        <label htmlFor="image">
          Upload Image
          <div className="flex items-center justify-center h-40 w-full bg-slate-200 my-23 rounded-md  cursor-pointer">
            {imageData ? (
              <img
                src={imageData}
                // alt="product-image"
                className="h-full"
              />
            ) : (
              <span className="text-5xl ">
                <BsCloudUpload />
              </span>
            )}

            <input
              ref={image}
              name= 'image'
              accept="image/*"
              type="file"
              id="image"
              required
              // value={image}
              onChange={uploadImage}
              className="hidden"
            />
          </div>
        </label>

        <label htmlFor="price" className="">
          Price
        </label>
        <input
          type="text"
          name="price"
          id="price"
          ref={price}
          required
          // value={price}
          className="bg-slate-200 p-1 my-2 rounded-md outline-none "
        />

        <label htmlFor="decription">Description</label>
        <textarea
          ref={description}
          rows="10"
          className="bg-slate-200 p-1 my-2 rounded-md outline-none resize-none"
          name="description"
          // value={description}
        ></textarea>

        <button className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-md px-5 py-2.5 text-center my-2 drop-shadow-xl">
          Save
        </button>
      </form>
    </div>
  );
};

export default NewProducts;
