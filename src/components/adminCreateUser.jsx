import AdminTabel from '@/components/tableAdmin';
import { Button, Grid } from '@mui/material';
import { useState, forwardRef, useContext } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import userContext from '@/context/usersContext';
import { RenderTemplate } from '@/components/userUpdateModal';
import GenerateDialogModal from './template/renderTemplate';
export default function CreateUser() {
  return (
    <>
      <div className="row">
        <div className="col-xl-8 col-lg-7">
          <div className="card shadow mb-4">
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h4 className="m-0 font-weight-bold text-primary">
                <span style={{color : "black"}}>
                <b className="textHeaderCurdTextColor">D</b>elete&nbsp; 
                <b className="textHeaderCurdTextColor">U</b>pdate&nbsp; 
                <b className="textHeaderCurdTextColor">V</b>iew&nbsp;  Demo</span>
              </h4>
            </div>
            {/* Card Body */}
            <div className="card-body">
              <AdminTabel />
              <GenerateDialogModal />
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
        <div className="col-xl-4 col-lg-5 text-center">
          <div className="card shadow mb-4">
            {/* Card Header - Dropdown */}
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h4 className="m-0 font-weight-bold text-primary">
                <span style={{color : "black"}}>
                <b className="textHeaderCurdTextColor">C</b>reate&nbsp;  Demo</span>
              </h4>
            </div>
            {/* Card Body */}
            <div className='createUserbox' style={{ height: 100 }}>
              <Grid container >
                <Grid item xs={12}>
                  <br />
                  <CreateModal />
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function CreateModal() {
  const [open, setOpen] = useState(false);
  // UpdateState = 1(readonly), 2(create), 3(update)
  const { userlist, setUserlist , curdMode, setCurdMode} = useContext(userContext);
  const handleClickOpen = () => {
    setCurdMode({u:false, c:true, d:false, r:false, modalCurdDialog: true})
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const Profile = { id: 23 };
  return (
    <>
    <div>
      <Button variant="contained" color="success" onClick={() => handleClickOpen()}>
        <i className="bi bi-pencil" /> &nbsp;&nbsp;Create USER
      </Button>
    </div>
    </>
  );
}
