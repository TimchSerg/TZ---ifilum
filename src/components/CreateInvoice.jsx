import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button, Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class CreateInvoice extends Component {
  constructor(props) {
    super();
  }

  render(){
    return (
      <div className="create-invoice">

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
            .jumbotron-custom form{
                border: 1px solid #e9ecef;
                padding: 10px;
            }
            .form-control-custom{
                width: 100%;
                border-radius: 5px;
            }
            .form-group{
              width: 49%;
              min-width: 250px;
            }
            .form-group-textarea-custom{
              width: 100%;
            }
            textarea.form-control {
              height: 40px;
              border-radius: 5px;
            }
          `}
        </style>


        <header className="headers">
          <h1>Create Invoice</h1>
          <span className="header-line"></span>
        </header>
        <Jumbotron bsStyle="custom">
            <form className="form">
              <FieldGroup
                id="formControlsText"
                type="text"
                label="Number: "
                placeholder="INV - 0000002"
                bsStyle="custom"
              />
              <FieldGroup
                id="formControlsEmail"
                type="date"
                label="Invoice Date: "
                placeholder="Select date"
                bsStyle="custom"
              />
              <FieldGroup
                id="formControlsEmail"
                type="date"
                label="Supply Date: "
                placeholder="Select date"
                bsStyle="custom"
              />

              <FormGroup controlId="formControlsTextarea" bsStyle="textarea-custom">
                <ControlLabel>Comment:</ControlLabel>
                <FormControl
                  componentClass="textarea"
                  rows="1"
                />
              </FormGroup>
              <div style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
                <Link to='/'>
                  <Button type="submit" bsStyle="primary">Save</Button>
                </Link>
              </div>
            </form>
        </Jumbotron>
      </div>
    );
  }
}

export default CreateInvoice;


function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}
