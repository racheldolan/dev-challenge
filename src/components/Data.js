import React from 'react';
import axios from 'axios';
// import Select from 'react-select';

class Data extends React.Component {

  state = {
    products: [],
    product: '',
    supplier: ''
  }

  componentDidMount() {
    axios.get('/api/products')
      .then(res => this.setState({products: res.data }))
      .then(() => console.log(this.state));
  }

  handleChange = ({ target: { name, value }}) => {
    this.setState({ [name]: value }, () => console.log(this.state));
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
                  <select className="form-control" onChange={this.handleChange} name="supplier" id="selSupplier">
                    <option>New Co Ltd</option>
                    <option>Old Co Ltd</option>
                  </select>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="selProduct">Product</label>
                  <select className="form-control" id="selProduct" onChange={this.handleChange} name="product">
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
                    <td>x</td>
                    <td>{this.state.supplier}</td>
                    <td>{this.state.product}</td>
                    {this.state.products.map(item => (
                      <td key={item._id}>
                        {item.price}
                      </td>
                    ))}
                    {/* // <td>xxxx</td> */}
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
