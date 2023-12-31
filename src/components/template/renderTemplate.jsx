import { useState, forwardRef, useContext, useEffect } from 'react';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Slide from '@mui/material/Slide';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import Swal from 'sweetalert2';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CurdPopupTemplate from './popup_CurdMessage';
import userContext from '@/context/usersContext';
import Style from '@/app/styles/render.module.css'

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const GenerateDialogModal = (props) => {
    const { userlist, curdMode, setUserlist, setCurdMode } =
        useContext(userContext);
    const checkid = parseInt(curdMode.userID);
    let Profile;
    userlist.find((val) => {
        if (val.id == checkid) {
            Profile = val;
        }
    });

    const [form, setForm] = useState();
    if (!form) {
        setForm({
            id: '',
            username: '',
            age: '',
            Jobtitle: '',
            purchased: '',
            totalsales: '',
        });
    }
    const [edit, setEdit] = useState(true);

    const openModal = () => {
        setCurdMode({ ...curdMode, modalCurdDialog: true });
    };

    const closeModal = () => {
        setCurdMode({ ...curdMode, modalCurdDialog: false });
    };

    useEffect(() => {
        setForm(Profile);
    }, [Profile]);

    useEffect(() => {
        if (curdMode?.c) {
            createMode();
        }
        if (curdMode?.d) {
            editingMode(true);
        } else {
            editingMode(false);
        }
    }, [curdMode]);

    function editingMode(val) {
        setEdit(val);
    }

    function createMode() {
        setForm({
            ...form,
            id: '',
            username: '',
            age: '',
            Jobtitle: '',
            purchased: '',
            totalsales: '',
        });
    }

    const inputTextSize = '100%';

    function updateUser(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function updating() {
        console.log(checkid)
        userlist.find((val) => {
            if (val.id == checkid) {
                val.username = form.username;
                val.age = form.age;
                val.Jobtitle = form.Jobtitle;
                val.purchased = form.purchased;
                val.totalsales = form.totalsales;
            }
        });
        setUserlist([...userlist]);
        closeModal();
    }

    function addNewUser() {
        form.id = Date.now();
        setUserlist([...userlist, form]);
        closeModal();
    }

    function deleteUser() {
        const delteID = userlist.findIndex((val) => {
            return checkid == val.id;
        });
        const newuser = userlist;
        delteID !== -1 && newuser.splice(delteID, 1);
        setUserlist([...newuser]);
        Swal.fire({
            title: `User : ${form.username}`,
            text: `Deleted successfully`,
            icon: 'success',
            confirmButtonText: 'go Back',
        });
        closeModal();
    }
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Dialog
                    open={curdMode.modalCurdDialog}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={closeModal}
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle>
                        <div className={Style.context}>
                            <div className={Style.area}>
                                <ul className={Style.circles}>
                                    <li></li><li></li><li></li><li></li>
                                    <li></li><li></li><li></li><li></li>
                                    <li></li><li></li><li></li><li></li>
                                    <li></li><li></li><li></li><li></li>
                                    <li></li><li></li><li></li><li></li>
                                </ul>
                            </div>
                            <Chip
                                style={{
                                    fontSize: '1.5em',
                                    width: '100%',
                                    height: 'auto',
                                    padding: '15px',
                                    backgroundColor: "#1c1c1c",
                                }}
                                label="User Details"
                                variant="contained"
                                color="primary"
                            />
                            <hr />
                        </div>
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description"></DialogContentText>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <Grid container>
                                    <Grid item xs={12}>
                                        <TextField
                                            id="filled-multiline-flexible"
                                            label="username"
                                            variant="filled"
                                            disabled={edit}
                                            required= {true}
                                            name="username"
                                            style={{ width: inputTextSize }}
                                            type="text"
                                            onChange={(e) => updateUser(e)}
                                            value={form?.username}
                                        />
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item xs={12}>
                                        <TextField
                                            id="filled-multiline-flexible"
                                            label="age"
                                            variant="filled"
                                            disabled={edit}
                                            required= {true}
                                            name="age"
                                            style={{ width: inputTextSize }}
                                            onChange={(e) => updateUser(e)}
                                            type="number"
                                            value={form?.age}
                                        />
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item xs={12}>
                                        <TextField
                                            id="filled-multiline-flexible"
                                            label="Job Title"
                                            variant="filled"
                                            disabled={edit}
                                            required= {true}
                                            name="Jobtitle"
                                            style={{ width: inputTextSize }}
                                            onChange={(e) => updateUser(e)}
                                            type="text"
                                            value={form?.Jobtitle}
                                        />
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item xs={12}>
                                        <TextField
                                            id="filled-multiline-flexible"
                                            label="Purchased"
                                            variant="filled"
                                            disabled={edit}
                                            required= {true}
                                            name="purchased"
                                            style={{ width: inputTextSize }}
                                            onChange={(e) => updateUser(e)}
                                            type="number"
                                            value={form?.purchased}
                                        />
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item xs={12}>
                                        <TextField
                                            id="filled-multiline-flexible"
                                            label="Total Sales"
                                            variant="filled"
                                            disabled={edit}
                                            required= {true}
                                            name="totalsales"
                                            style={{ width: inputTextSize }}
                                            onChange={(e) => updateUser(e)}
                                            type="number"
                                            value={form?.totalsales}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Grid item xs={12}>
                                    <CurdPopupTemplate />
                                </Grid>
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <div>
                            {curdMode?.u ? (
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
                            {curdMode?.c ? (
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
                            {curdMode?.d ? (
                                <Button
                                    variant="contained"
                                    color="error"
                                    onClick={() => deleteUser()}
                                >
                                    Delete
                                </Button>
                            ) : (
                                ''
                            )}
                            <Button
                                variant="outlined"
                                color="error"
                                onClick={closeModal}
                                style={{ marginLeft: '8px' }}
                            >
                                close
                            </Button>
                        </div>
                    </DialogActions>
                </Dialog>
            </Box>
        </>
    );
};

export default GenerateDialogModal;
