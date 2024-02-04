import React, { useEffect } from 'react'
import Swal from 'sweetalert2'

function NewProduct() {
 


  const { value: ipAddress } = Swal.fire({
    title: "Enter your IP address",
    input: "text",
    inputLabel: "Your IP address",
    inputValue:"vf",
    showCancelButton: true,
    inputValidator: (value) => {
      if (!value) {
        return "You need to write something!";
      }
    }
  });
  if (ipAddress) {
    Swal.fire(`Your IP address is ${ipAddress}`);
  }



  return (
    <div>{}</div>
  )
}

export default NewProduct