import React, { useEffect, useState } from 'react'
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheck,faCircle,faPlus ,faTrash, faXmark} from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import { checkProduct,deleteProduct, getProducts } from '../app/ProductRepository';





function Product() {

 const [products,setProducts]=useState([]);


 useEffect(() => {
 

  handleGetProducts(); 

  
}, []);

const handleGetProducts =  () => {
 
 getProducts().then(resp=>{
  setProducts(resp.data)
 })
  .catch(error => {
  // Handle error
  console.error(error);
 })
};


 const handleCheckProduct=(product)=>{


   checkProduct(product).then(resp=>{

    const newProducts=products.map(prd=>{
   
     if(prd.id===product.id){
       prd.checked =  !prd.checked;
     }
  return prd;
   }) 
   setProducts(newProducts)

   }).catch(err=>{
    console.log(err)
   })


 }



  const handleDeleteProduct=(product)=>{

     deleteProduct(product).then(resp=>{

      const newProducts=products.filter((prod)=>prod.id !=product.id)
      setProducts(newProducts)
         
     }).catch(err=>{
      console.log(err)
     })

  }

  return (
    
    <div className="p-1 m-1">
    <div className="card">
      <div className="card-body">
        <div className="d-flex justify-content-end mx-2 ">
          <button
            className="btn btn-outline-primary "
             // Assuming you have a function to handle adding a new product
          >
            <FontAwesomeIcon icon={faPlus} />
            
          </button>
        </div>
  
        <table className="table">
      <thead>
        <th scope="col">Id</th>
        <th scope="col">Name</th>
        <th scope="col">Price</th>
        <th scope="col">Checked</th>
      </thead>
      <tbody>

        {products.map(product=>(
                  <tr key={product.id}>
                  <th scope="row">{product.id}</th>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>
                  <button 
                  onClick={()=>handleCheckProduct(product)}
                  className={product.checked ? 'btn btn-outline-success mx-2 ' :'btn btn-outline-danger mx-2 '}
                  >
        
                  <FontAwesomeIcon
                            icon={product.checked ? faCheck :faXmark}
                            color={product.checked ? 'green' :'red'}
                          ></FontAwesomeIcon>

                  </button>
                    
                      <button className='btn btn-outline-danger'
                      
                      onClick={()=>handleDeleteProduct(product)}
                      
                      >
                        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                      </button>
                    </td>
                </tr>


        ))}
  
      </tbody>
      </table>
      </div>
    </div>
  </div>
  
  )
}

export default Product