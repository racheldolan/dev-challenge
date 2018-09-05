import React from 'react';
import axios from 'axios';

class Data extends React.Component {

  state = {
    products: [],
    item: '',
    supplier: ''
  }

  componentDidMount = () => {
    axios.get('/api/products')
      .then(res => this.setState({ products: res.data }))
      .catch(err => console.log(err));
  }

  findPrices = () => {
    const obj = this.state.products.find(element => (element.productType === this.state.item) && (element.supplier === this.state.supplier));
    return obj.price;
  };

  findProductNumber = () => {
    const obj = this.state.products.find(element => (element.productType === this.state.item) && (element.supplier === this.state.supplier));
    return obj.productNumber;
  }

  handleChange = ({ target: { name, value }}) => {
    this.setState({ [name]: value });
  }

  uniqueSuppliers = () => {
    return [...new Set(this.state.products.map(product => product.supplier))];
  }


  render(){
    return(
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-12 main">
            <h1 className="page-header">Product pricing</h1>

            <form>
              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="selSupplier">Supplier</label>
                  <select value="Please choose" className="form-control" onChange={this.handleChange} name="supplier" id="selSupplier">
                    <option disabled>Please choose</option>
                    {this.state.products && this.uniqueSuppliers().map(supplier => (
                      <option key={supplier}>{supplier}</option>
                    ))}
                  </select>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="selProduct">Product</label>
                  <select value="Please choose" className="form-control" id="selProduct" onChange={this.handleChange} name="item">
                    <option disabled>Please choose</option>
                    {this.state.products.map(item => (
                      (this.state.supplier === 'New Co Ltd' && item.supplierIsNewCoLtd === true && <option key={item._id}>
                        {item.productType}
                      </option>)
                    ))}
                    {this.state.products.map(item => (
                      (this.state.supplier === 'Old Co Ltd' && item.supplierIsNewCoLtd === false && <option key={item._id}>
                        {item.productType}
                      </option>)
                    ))}
                  </select>
                </div>
              </div>
            </form>

            <h2 className="sub-header">Product details</h2>
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Supplier</th>
                    <th>Product</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{this.state.supplier && this.state.item && this.findProductNumber()}</td>
                    <td>{this.state.supplier}</td>
                    <td>{this.state.item}</td>
                    <td>{this.state.supplier && this.state.item && this.findPrices()}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Data;
