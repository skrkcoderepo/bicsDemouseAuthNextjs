'use client'
import { useContext } from "react";
import userContext from "@/context/usersContext";
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@mui/material";
import Fingerprint from '@mui/icons-material/Fingerprint';

export default function UserPage(props) {
    const { userlist } = useContext(userContext)

    const FindUser = (props) => {
        let Profile;
        userlist.find((val) => {
            if (parseInt(val.id) == parseInt(props.id)) {
                Profile = (
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
                                    <div className="col-md-3">
                                        <div>
                                            <p style={{textSize: "10px"}}><b>Age</b></p>
                                            <span className="num">{val.age}</span>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div>
                                            <p style={{textSize: "8px"}}><b>purchased</b></p>
                                            <span className="num">{val.purchased}</span>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div>
                                            <p style={{textSize: "8px"}}><b>Spend</b></p>
                                            <span className="num">
                                                ₹ {val.totalsales}
                                            </span>
                                        </div>

                                    </div>
                                </div>
                                <hr className="line" />
                                <div className="mt-4">
                                    <p>This is a sample User Detail Page </p>
                                    <p>Profile Image  are Random on every render </p>
                                </div>
                               
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
                                   <Link href="/admin" style={{color: 'black'}}> 
                                    <Button variant='outlined' color="success" className="profile_button px-5">
                                            <Fingerprint />
                                            Go back to Admin
                                    </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </>
                );
                return Profile;
            } else {
                Profile = <>
                    <div>
                    <h5>No user Found</h5>
                    <br />
                    <h6>For the given id : {props.id}</h6>
                    </div>
                </>;
            }
        })
        return Profile;
    }

    return <>
        <section id="about" className="about">
            <div className="container aos-init aos-animate" data-aos="fade-up">
                <div className="section-title">
                    <h2>User Detail </h2>
                    <p>This page will get the dynamic value from url and search for the user inside userContext
                    </p>
                </div>
                <div className="container d-flex justify-content-center">
                    <FindUser id={props.params.userID} />
                </div>
            </div>
        </section>
    </>
}