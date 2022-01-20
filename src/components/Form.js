import React from 'react'

function Form() {
    return (
        <div>

        <div className="container">
        <h3>Product Details</h3>
        <form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Product Name</label>
    <input type="text" className="form-control" id="exampleInputProduct" aria-describedby="emailHelp"/>
 
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">discription</label>
    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
  </div>
  <div className="mb-3 ">   
  <label className="form-label"> Category</label>
  <select class="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
        <option selected>Select category</option>
        <option value="1">Old phone</option>
        <option value="2">New mobile</option>
        <option value="3">Replace new phone</option>
      </select>

<br/>
      <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Price Value</label>
    <input type="text" className="form-control" id="exampleInputProduct" aria-describedby="emailHelp"/>
 
  </div>
      <div className="form-group my-4">
  <label for="productPic" className="form-label mx-3"> UPLOAD PRODUCT IMAGE</label>
      <br />
        <input type="file"  name="productPic" required />
      </div>
<div className="container text-center">
  <button className="btn btn-outline-primary">Add Product Image</button>
</div>

  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
        </div>
          
        </div>
    )
}

export default Form;
