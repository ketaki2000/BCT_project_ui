import React from "react";
import Table from "react-bootstrap/Table";
import "C:/Users/Ketaki/Desktop/bctprojectui-main/src/App.css";
function HospitalStaff() {
  return (
    <div>
      <div className="App">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Sr No.</th>
              <th>Insurance Company Name </th>
              <th>Claim Date</th>
              <th>Images</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
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
            </tr>
          </tbody>
        </Table>
      </div>
      );
    </div>
  );
}
export default HospitalStaff;
