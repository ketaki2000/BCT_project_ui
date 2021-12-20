import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import data from "./mock-data.json";
function InsuranceCompany() {
  const[users,setUsers]=useState(data);
  return (
    <div className="App">
      <Table striped bordered hover >
        <thead>
          <tr>
            <th>Sr No.</th>
            <th>Patient Name</th>
            <th>Price</th>
            <th>Images</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u)=><tr>
            <td>{u.id}</td>
            <td>{u.name}</td>
            <td>{u.price}</td>
            <td>
              <button type="submit" className="formFieldButton">
                View Image
              </button>
            </td>
            <td>
              <div className="formField">
                <button type="submit" className="formFieldButton">
                  Pay
                </button>{" "}
              </div>
            </td>
          </tr>)}
        </tbody>
      </Table>
    </div>
  );
}
export default InsuranceCompany;

{/* <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>
              <button type="submit" className="formFieldButton">
                View Image
              </button>
            </td>
            <td>
              <div className="formField">
                <button type="submit" className="formFieldButton">
                  Pay
                </button>{" "}
              </div>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>
              <button type="submit" className="formFieldButton">
                View Image
              </button>{" "}
            </td>
            <td>
              <div className="formField">
                <button type="submit" className="formFieldButton">
                  Pay
                </button>{" "}
              </div>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan="2">Larry the Bird</td>
            <td>
              <button type="submit" className="formFieldButton">
                View Image
              </button>
            </td>
            <td>
              <div className="formField">
                <button type="submit" className="formFieldButton">
                  Pay
                </button>{" "}
              </div>
            </td>
          </tr> */}