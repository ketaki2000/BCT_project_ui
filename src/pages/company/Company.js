import React from "react";
import Table from "react-bootstrap/Table";
function InsuranceCompany() {
  return (
    <div className="App">
      <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Sr No.</th>
              <th>Patient Name</th>
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
              <td>@mdo</td>
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
              <td>@fat</td>
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
              <td>@twitter</td>
              <td>
                <div className="formField">
                  <button type="submit" className="formFieldButton">
                    Pay
                  </button>{" "}
                  
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
    </div>
  );
}
export default InsuranceCompany;
