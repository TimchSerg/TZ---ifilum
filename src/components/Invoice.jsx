import React, { Component } from 'react';
import { Jumbotron, Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import '../css/style.css'

class Invoice extends Component {
  constructor(props) {
    super();
  }

  render(){
    return (
      <div className="invoice">

        <style type="text/css">
          {`
            .jumbotron-custom {
                padding: 10px 25px;
                background: white;
                border-radius: 0;
                border: 1px solid #b3dfff;
                margin-bottom: 35px;
            }
            .jumbotron-custom p{
                font-weight: bold;
                margin-bottom: 5px;
                font-size: 18px;
            }
            .btn-primary{
              border-radius: 5px;
              padding-left: 30px;
              padding-right: 30px;
              font-weight: bold;
            }
            .table-custom thead{
                background-color: #e9ecef;
                color: #656565;
            }
            .table-custom tbody tr{
                border-bottom: 2px solid #e9ecef;
            }
          `}
        </style>

        <header className="headers">
          <h1>Invoice</h1>
          <span className="header-line"></span>
        </header>
        <Jumbotron bsStyle="custom">
          <p>Actions</p>
          <p>
            <Link to='/createInvoice'>
              <Button bsStyle="primary">Add new</Button>
            </Link>
          </p>
        </Jumbotron>
        <Jumbotron bsStyle="custom">
          <p>Invoices</p>
          <Table responsive bsStyle="custom">
            <thead>
            <tr>
              <th>Create</th>
              <th>No</th>
              <th>Supply</th>
              <th>Comment</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
            </tbody>
          </Table>
        </Jumbotron>
      </div>
    );
  }
}

export default Invoice;
