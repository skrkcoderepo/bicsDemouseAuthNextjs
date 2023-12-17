import AdminTabel from '@/components/tableAdmin';
import { Button , Grid} from '@mui/material';
import {useState, forwardRef, useContext}  from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import userContext from '@/context/usersContext';
import * as React from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import {RenderTemplate} from '@/components/userUpdateModal'

export default function CreateUser() {
  return <>
    <div className="row">
      <div className="col-xl-8 col-lg-7">
        <div className="card shadow mb-4">
          {/* Card Header - Dropdown */}
          <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 className="m-0 font-weight-bold text-primary">User Details Overview</h6>
          </div>
          {/* Card Body */}
          <div className="card-body">
            <AdminTabel />
            <div className="chart-area">
              <div className="chartjs-size-monitor">
                <div className="chartjs-size-monitor-expand">
                  <div className="" />
                </div>
                <div className="chartjs-size-monitor-shrink">
                  <div className="" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      {/* Pie Chart */}
      <div className="col-xl-4 col-lg-5">
        <div className="card shadow mb-4">
          {/* Card Header - Dropdown */}
          <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 className="m-0 font-weight-bold text-primary">Create User</h6>
          </div>
          {/* Card Body */}
          <div  style={{height:100}}>
            <Grid container >
              <Grid item xs={12}>
                <Button>Create User</Button>
                <CreateModal/>
              </Grid>
            </Grid>
            
          </div>
          
        </div>
      </div>
    </div>

  </>
}
function UpdateMode(val){
  setUpdatestate(parseInt(val))
  handleClickOpen()
}
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function CreateModal(){
  const [open, setOpen] = useState(false);
  const[updateState, setUpdatestate]= useState(1)
  // UpdateState = 1(readonly), 2(create), 3(update)
  const {userlist, setUserlist} =useContext(userContext)
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
const Profile= {id: 23}
  return <>
  <Button variant="warning" onClick={()=>handleClickOpen()}>
  <i className="bi bi-pencil" />
  </Button>
  <Button variant="warning" onClick={()=>handleClickOpen()}>
  <i className="bi bi-eye"/>
  </Button>{JSON.stringify(userlist)}
  <Dialog
    open={open}
    TransitionComponent={Transition}
    keepMounted
    onClose={handleClose}
    aria-describedby="alert-dialog-slide-description"
  >
    <DialogTitle>{"User Details"}</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-slide-description">
         User Details are given below: This is just a demo for Next js USE CLIENT
         <br />
      </DialogContentText>
      
      {/* <FindUser id={props.id} modal={handleClose}/> */}
      {/* <RenderTemplate val={{id:null, username:null}} userlist={userlist} setUserlist={setUserlist} create={true}/> */}
      <RenderTemplate val={Profile} modal={handleClose} updateState={{create: true, update:false}} userlist={userlist}
     setUserlist={setUserlist}/>
    </DialogContent>
  </Dialog>
</>
}