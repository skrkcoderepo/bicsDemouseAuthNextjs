import { forwardRef, useContext } from 'react';
import Button from '@mui/material/Button';
import Slide from '@mui/material/Slide';
import userContext from '@/context/usersContext';
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Link from 'next/link';
import RenderTemplate from './template/renderTemplate';



export default function UserModal(props) {
    // UpdateState = 1(readonly), 2(create), 3(update), 4(Delete)
    const { userlist, setUserlist, setCurdMode, curdMode } =
        useContext(userContext);

    function UpdateMode(val) {
        setCurdMode({ ...val });
    }
    return (
        <>
            <Grid container>
                <Grid item xs={6}>
                    <div>
                        <Button
                            variant="outlined"
                            color="success"
                            style={{ width: '100%', marginRight: '2px' }}
                            onClick={() =>
                                UpdateMode({
                                    c: false,
                                    u: true,
                                    r: false,
                                    d: false,
                                    modalCurdDialog: true,
                                    userID: props.id,
                                })
                            }
                        >
                            <i className="bi bi-pencil">
                                <p style={{ fontSize: '5px', margin: '0px' }}>
                                    Update
                                </p>
                            </i>
                        </Button>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div>
                        <Link href={`/users/${props.id}`}>
                            <Button
                                style={{
                                    width: '100%',
                                    marginLeft: '2px',
                                    marginRight: '2px',
                                }}
                                variant="outlined"
                                color="warning"
                            >
                                <i
                                    className="bi bi-eye"
                                    style={{ marginBottom: '0px' }}
                                >
                                    <p
                                        style={{
                                            fontSize: '5px',
                                            margin: '0px',
                                        }}
                                    >
                                        View
                                    </p>
                                </i>
                            </Button>
                        </Link>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <Button
                        style={{
                            width: '100%',
                            marginTop: '2px',
                            marginLeft: '0px',
                            marginRight: '0px',
                        }}
                        variant="contained"
                        color="error"
                        onClick={() =>
                            UpdateMode({
                                c: false,
                                u: false,
                                r: false,
                                d: true,
                                modalCurdDialog: true,
                                userID: props.id,
                            })
                        }
                    >
                        Delete &nbsp;
                        <i className="bi bi-trash3" />
                    </Button>
                </Grid>
            </Grid>
        </>
    );
}
export { RenderTemplate };
