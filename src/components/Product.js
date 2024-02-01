import React, { useState } from 'react'
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheck,faCircle,faTrash, faXmark} from "@fortawesome/free-solid-svg-icons";





function Product() {

 const [products,setProducts]=useState([
  {id:1,name:"Computer",price:12333,checked:false},
  {id:2,name:"Iphone",price:1232,checked:false},
  {id:3,name:"HeadPhone",price:12,checked:true},
  {id:4,name:"Battery",price:11,checked:true}
 ])


 


 const handleCheckProduct=(product)=>{

  const newProducts=products.map(prd=>{
   
    if(prd.id===product.id){
      prd.checked =  !prd.checked;
    }
 return prd;
  }) 

  setProducts(newProducts)
 }



  const handleDeleteProduct=(product)=>{

      const newProducts=products.filter(p=>p.id!=product.id);
      setProducts(newProducts)

  }

  return (
    
    <div className="p-1 m-1">
      <div className="card">
      <div className="card-body">
     <table className='table'>
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