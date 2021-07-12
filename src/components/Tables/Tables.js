import axios from "axios";
import config from "config";
import React from "react";

// reactstrap components
import { Button, Table } from "reactstrap";
import swal from "sweetalert";

function SimpleTable(props) {
    const {header,data,...rest} = props
  return (
    <>
      <Table {...rest}>
        <thead>
          <tr>
            <th className=" text-center">#</th>
            {
              header.map((val,index)=>(
                <th className={val.style} key={index}>{val.title}</th>
              ))
            }
          </tr>
        </thead>
        <tbody>
            {
              data.map((val,index)=>(
                <tr key={index}>
                <td className="text-center">{index+1}</td>
                <td className="text-center">{val.name}</td>
                <td className="text-center">{new Date(val.doa).toLocaleString() }</td>
                <td className="text-center">{val.message === ""?"No Message":val.message}</td>
                <td className=" td-actions text-right">
                  <Button
                    className=" btn-icon"
                    color="info"
                    size="sm"
                    type="button"
                    onClick={()=>{
                      axios.delete("appointment/"+val.id,config)
                      .then(()=>{
                        swal("Congrats","Appointment delete successfully","success")
                        window.location.reload();
                      })
                      .catch((err)=>{swal("Alert!",err.message,"warning")})
                    }}
                  >
                    <i className="now-ui-icons ui-1_calendar-60 mr-1"></i>
                  </Button>

                  <Button
                    className=" btn-icon"
                    color="success"
                    size="sm"
                    type="button"
                  >
                    <i className="now-ui-icons ui-1_calendar-60 mr-1"></i>
                  </Button>

                  <Button
                    className=" btn-icon"
                    color="danger"
                    size="sm"
                    type="button"
                  >
                    <i className="now-ui-icons ui-1_calendar-60 mr-1"></i>
                  </Button>
                </td>
              </tr>
              ))
            }

            
        </tbody>
      </Table>
    </>
  );
}

export default SimpleTable;