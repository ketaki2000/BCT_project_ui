import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import "C:/Users/Ketaki/Desktop/bctprojectui-main/src/App.css";
import data from "./mock-data.json";
function HospitalStaff() {
  const[staff,setStaff]= useState(data);
  return (
    <div>
      <div className="App">
        <Table striped bordered hover >
          <thead>
            <tr>
              <th>Sr No.</th>
              <th>Name </th>
              <th>Claim Date</th>
              <th>Insurance Company Name </th>
              <th>Images</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {staff.map((s)=>
            <tr>
              <td>{s.id}</td>
              <td>{s.name}</td>
              <td>{s.date}</td>
              <td>{s.hospitalname}</td>
              
              <td>
                <button type="submit" className="formFieldButton">
                  View Image
                </button>
              </td>
              <td>
                <div className="formField">
                  <button type="submit" className="formFieldButton">
                    Accept
                  </button>{" "}
                  <button type="submit" className="formFieldButton ">
                    Reject
                  </button>
                </div>
              </td>
            </tr>
            )}
          </tbody>
        </Table>
      </div>
      );
    </div>
  );
}
export default HospitalStaff;


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
                    Accept
                  </button>{" "}
                  <button type="submit" className="formFieldButton ">
                    Reject
                  </button>
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
                </button>
              </td>
              <td>
                <div className="formField">
                  <button type="submit" className="formFieldButton">
                    Accept
                  </button>{" "}
                  <button type="submit" className="formFieldButton ">
                    Reject
                  </button>
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
                    Accept
                  </button>{" "}
                  <button type="submit" className="formFieldButton ">
                    Reject
                  </button>
                </div>
              </td>
            </tr> */}