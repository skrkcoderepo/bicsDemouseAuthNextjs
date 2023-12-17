import { useState, forwardRef, useContext } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import userContext from '@/context/usersContext';
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Link from 'next/link';

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const ModalText1 = (props) => {
    return <>{props.text}</>;
};

const RenderTemplate = (props) => {
    const [form, setForm] = useState(props.val);
    const inputTextSize = 150;
    const edit = true;
    function updateUser(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
        console.log(form);
    }
    function updating() {
        props.userlist.find((val) => {
            if (val.id == props.val.id) {
                console.log('matchedvalue', val);
                val.username = form.username;
                val.age = form.age;
                val.Jobtitle = form.Jobtitle;
                val.purchased = form.purchased;
                val.totalsales = form.totalsales;
            }
        });
        props.setUserlist([...props.userlist]);
        // console.log(userlist)
        props.modal();
    }
    function addNewUser() {
        form.id = Date.now();
        console.log('create users', form);
        props.setUserlist([...props.userlist, form]);
        props.modal();
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
          <br />
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Grid container>
                        <Grid item xs={7}>
                            <span>
                                <ModalText1 text="username" />
                            </span>
                        </Grid>
                        <Grid item xs={5}>
                            <input
                                name="username"
                                style={{ width: inputTextSize }}
                                type="text"
                                onChange={(e) => updateUser(e)}
                                value={form.username}
                            />
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={7}>
                            <ModalText1 text="age" />
                        </Grid>
                        <Grid item xs={5}>
                            <input
                                name="age"
                                style={{ width: inputTextSize }}
                                onChange={(e) => updateUser(e)}
                                type="number"
                                value={form.age}
                            />
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={7}>
                            <ModalText1 text="Designation" />
                        </Grid>
                        <Grid item xs={5}>
                            <input
                                name="Jobtitle"
                                style={{ width: inputTextSize }}
                                onChange={(e) => updateUser(e)}
                                type="text"
                                value={form.Jobtitle}
                            />
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={7}>
                        <ModalText1 text="Purchased" />
                        </Grid>
                        <Grid item xs={5}>
                            <input
                                name="purchased"
                                style={{ width: inputTextSize }}
                                onChange={(e) => updateUser(e)}
                                type="number"
                                value={form.purchased}
                            />
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={7}>
                        <ModalText1 text="spend" />
                        </Grid>
                        <Grid item xs={5}>
                            <input
                                name="totalsales"
                                style={{ width: inputTextSize }}
                                onChange={(e) => updateUser(e)}
                                type="number"
                                value={form.totalsales}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6}></Grid>
            </Grid>
            <DialogActions>
                {props.updateState.update ? (
                    <Button
                        variant="contained"
                        color="success"
                        onClick={updating}
                    >
                        Update
                    </Button>
                ) : (
                    ''
                )}
                {props.updateState.create ? (
                    <Button
                        variant="contained"
                        color="success"
                        onClick={addNewUser}
                    >
                        Create
                    </Button>
                ) : (
                    ''
                )}

                <Button variant="contained" color="error" onClick={props.modal}>
                    {!props.updateState.update && !props.updateState.create
                        ? 'Close'
                        : 'Close '}
                </Button>
            </DialogActions>
        </Box>
    );
};

export default function UserModal(props) {
    const [open, setOpen] = useState(false);
    const [updateState, setUpdatestate] = useState(1);
    // UpdateState = 1(readonly), 2(create), 3(update)
    const { userlist, setUserlist } = useContext(userContext);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const FindUser = (props) => {
        const checkid = parseInt(props.id);
        let Profile;
        userlist.find((val) => {
            if (val.id == checkid) {
                const template = <></>;
                Profile = val;
            }
        });
        console.log('this is the profile', Profile);
        return (
            <RenderTemplate
                val={Profile}
                modal={props.modal}
                updateState={{ create: false, update: true }}
                userlist={userlist}
                setUserlist={setUserlist}
            />
        );
    };
    function UpdateMode(val) {
        setUpdatestate(parseInt(val));
        handleClickOpen();
    }
    return (
        <>
            <Button
                variant="outlined"
                color="success"
                onClick={() => UpdateMode(3)}
            >
                Edit &nbsp;&nbsp;
                <i className="bi bi-pencil" />
            </Button>
            <Button variant="outlined" color="warning">
                <Link href={`/users/${props.id}`}>
                    View &nbsp;
                    <i className="bi bi-eye" />
                </Link>
            </Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{'User Details'}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        User Details are given below: This is just a demo for
                        Next js USE CLIENT
                        <br />
                    </DialogContentText>
                    <FindUser id={props.id} modal={handleClose} />
                </DialogContent>
            </Dialog>
        </>
    );
}
export { RenderTemplate };
