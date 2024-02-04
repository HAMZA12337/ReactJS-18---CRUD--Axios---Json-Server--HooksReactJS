import React, { useState } from 'react'
import Swal from 'sweetalert2'

function NewProduct() {
 
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [checked, setChecked] = useState(false);
  


  return (
    <div className="row p-3">
      <div className="col-md-6">
        <div className="card">
          <div className="card-body">
            <form method="post">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="form-control"
                  value={name}
                  
                ></input>
              </div>
              <div className="mb-3">
                <label htmlFor="price" className="form-label">
                  Price
                </label>
                <input
                  id="price"
                  type="text"
                  className="form-control"
                  value={price}
                  
                ></input>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={checked}
                
                  id="checked"
                />
                <label className="form-check-label" htmlFor="checked">
                  Checked
                </label>
              </div>
              <button className="btn btn-primary">Save</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewProduct