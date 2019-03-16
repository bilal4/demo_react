import React from 'react';
import './add-client.css';

export const AddClient = () => {
return (
<React.Fragment>
  <div class="add-client">
    <h3>Add a client</h3>
  </div>
  <div class="container" id="rcorners1">
    <div class="col-md-6">
      <h3><b>Client Information</b></h3>
      <br/>
        <h5>Client details</h5>
      <br/>
      <form>
        <div id="rcorners2">
          <div class="form-group">
            <label>Company Name</label>
            <input type="text" class="form-control" id="email" name="email" />
          </div>
          <div class="form-group">
            <label>Company Registration Number</label>
            <input type="text" class="form-control" id="email" name="email" name="companyRegNo" />
          </div>
        </div>
        <br/>
        <h5>Client configuration</h5>
        <br/>
        <div id="rcorners2">
          <div class="form-group">
            <label>Permitted Limit (GBP)</label>
            <input type="text" class="form-control" id="email" name="email" />
          </div>
          <div class="form-group">
            <label>Funding tenor (Days)</label>
            <input type="text" class="form-control" id="email" name="email"  />
          </div>
          <div class="form-group">
            <label for="sel1">Netting Process:</label>
            <select class="form-control" id="sel1" name="nettingProcess" >
              <option vaule="">Please Select</option>
              <option vaule="2">2</option>
              <option vaule="3">3</option>
              <option vaule="4">4</option>
            </select>
          </div>
          <div class="form-group">
            <label>Discount Rate(%)</label>
            <input type="text" class="form-control" id="email" name="email"  />
          </div>
        </div>
        <br/>
        <h5>Address Details</h5>
        <br/>
        <div id="rcorners2">
          <h5>Registered address</h5>
          <div class="form-group">
            <label>Street Address</label>
            <input type="text" class="form-control" id="email" name="email"  />
          </div>
          <div class="form-group">
            <label>Town or city</label>
            <input type="text" class="form-control" id="email" name="email"  />
          </div>
          <div class="form-group">
            <label>Postcode</label>
            <input type="text" class="form-control" id="email" name="email"  />
          </div>
          <button type="button" class="button buttonlogin">Add</button>
        </div>
      </form>
    </div>
  </div>
</React.Fragment>
);
}