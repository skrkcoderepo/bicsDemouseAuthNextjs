'use client'
import { useContext } from "react";
import userContext from "@/context/usersContext";
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import Fingerprint from '@mui/icons-material/Fingerprint';

export default function UserPage(props){
    const {userlist} = useContext(userContext)

const FindUser = (props)=>{
    let Profile;
      userlist.find((val)=>{
        if(parseInt(val.id)==parseInt(props.id)){
           Profile= (
                <>
                    <div className="card p-3 py-4">
                        <div className="text-center">
                            <Image
                                src="https://random.imagecdn.app/100/100"
                                width={100} height={100} alt="profile image"
                                className="rounded-circle"
                            />
                            {/* <Image src="https://random.imagecdn.app/100/100" width={100} className="rounded-circle"/> */}
                            <h3 className="mt-2">{val.username}</h3>
                            <span className="mt-1 clearfix">
                                {val.Jobtitle}
                            </span>
                            <div className="row mt-3 mb-3">
                                <div className="col-md-4">
                                    <h5>Age</h5>
                                    <span className="num">{val.age}</span>
                                </div>
                                <div className="col-md-4">
                                    <h5>purchased</h5>
                                    <span className="num">{val.purchased}</span>
                                </div>
                                <div className="col-md-4">
                                    <h5>Total Spend</h5>
                                    <span className="num">
                                        {val.totalsales}
                                    </span>
                                </div>
                            </div>
                            <hr className="line" />
                            <small className="mt-4">
                                I am an android developer working at google Inc
                                at california,USA
                            </small>
                            <div className="social-buttons mt-5">
                                <button className="neo-button">
                                    <i className="fa fa-facebook fa-1x" />{' '}
                                </button>
                                <button className="neo-button">
                                    <i className="fa fa-linkedin fa-1x" />
                                </button>
                                <button className="neo-button">
                                    <i className="fa fa-google fa-1x" />{' '}
                                </button>
                                <button className="neo-button">
                                    <i className="fa fa-youtube fa-1x" />{' '}
                                </button>
                                <button className="neo-button">
                                    <i className="fa fa-twitter fa-1x" />{' '}
                                </button>
                            </div>
                            <div className="profile mt-5">
                                <Button className="profile_button px-5">
                                    <Link href="/admin">       <IconButton aria-label="fingerprint" color="secondary">
        <Fingerprint />
      </IconButton>Go back to Admin</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </>
            );
            return Profile;
        } else {
            Profile =<>
            <h5>No user Found</h5>
            <br />
            <h6>For the given id : {props.id}</h6>
        </>;
        }
    })
    return Profile;
}

    return<>
    <section id="about" className="about">
        <div className="container aos-init aos-animate" data-aos="fade-up">
            <div className="section-title">
                <h2>User Detail </h2>
                <p>This page will get the dynamic value from url and search for the user inside userContext
                </p>
            </div>
            <div className="container d-flex justify-content-center">
            <FindUser id={props.params.userID}/>
            </div>
        </div>
      </section>
    </>
}