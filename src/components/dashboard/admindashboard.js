import React, { useEffect, useState } from 'react';
import { Line } from "react-chartjs-2";
import './admin.css';
import profile from "../../assets/images/profile/male/image_1.png";
import { connect } from "react-redux";
import axios from 'axios'
import { useHistory } from "react-router-dom"
import { logoutuser } from '../../actions/index'


function Admindashboard(props) {

    var history = useHistory();

    const [alldatas, setalldatas] = useState('');
    const [changeper, setchangeper] = useState('')
    var [htmlq, sethtmlq] = useState('');
    var [cplusplusq, setcplusplusq] = useState('')
    var [jsq, setjsq] = useState('')
    var [pythonq, setpythonq] = useState('');
    var [isdone, setisdone] = useState(false);
    var [donemsg, setdonemsg] = useState(false);








    var fetchdata = () => {

        axios.get('http://localhost:4000/alluserkeyvalue').then(e => e.data ? setalldatas(e.data) : [])

    }


    var chage = () => {
        if (changeper) {
            sethtmlq(changeper.htmlquiz.status);
            setcplusplusq(changeper.cplusplusquiz.status);
            setjsq(changeper.jsquiz.status);
            setpythonq(changeper.pythonquiz.status);

        } else {

        }
    }

    var changepermisstion = () => {
        setisdone(true)
        axios({
            method: "POST",
            data: {
                htmlq, cplusplusq, jsq, pythonq, username: changeper.username

            },
            withCredentials: true,
            url: `http://localhost:4000/setpermission`,
        }).then((res) => {

            setisdone(!res.data.done);
            fetchdata();

            let count = 0;
            var tt = setInterval(() => {
                count = +1;
                setdonemsg(true);
            }, 1000);

            var cl = setInterval(() => {
                clearInterval(tt);
                setdonemsg(false);
                clearInterval(cl);
            }, 3000);

        })
    }





    useEffect(() => {


        fetchdata();
        chage();

    }, [changeper]);



    var logout = () => {
        localStorage.clear();

        try {
            props.logoutuser();
        } catch (error) {
            console.log(error)
        }

        history.push('/login'); localStorage.clear();
    }


    return (
        <div>

            <nav class="t-header">

                <div style={{ background: '#f3f3f3' }} class="t-header-content-wrapper">
                    <div class="t-header-content">
                        <img src='https://www.drupal.org/files/Capgemini_Logo_2COL_RGB.png' style={{ width: '170px' }} alt='loading' />

                        <ul class="nav ml-auto">
                            <li class="nav-item dropdown">




                                <a type="button" class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="mdi mdi-apps mdi-1x"></i>
                                </a>
                                <ul style={{ backgroundColor: 'white', borderRadius: '10px', border: 'none' }} class="dropdown-menu navbar-dropdown dropdown-menu-right" aria-labelledby="appsDropdown">
                                    <div style={{ background: 'none' }} class="dropdown-header">
                                        <h6 class="dropdown-title">Dashboard</h6>
                                        <p class="dropdown-title-text mt-2">Explore your test performance</p>

                                        <a style={{ cursor: 'pointer' }} onClick={() => logout()} class="dropdown-grid">

                                            <button style={{ background: '#459DF9' }} type="button" class="btn btn-info btn-sm">LogOut</button>
                                        </a>
                                    </div><center>
                                        <div style={{ background: 'none' }} class="dropdown-body border-top pt-0">
                                            <a style={{ cursor: 'pointer' }} class="dropdown-grid">
                                                <i class="mdi mdi-gauge link-icon"></i>
                                                <span class="grid-tittle">Dashboard</span>
                                            </a>

                                        </div></center>

                                </ul>  </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div class="page-body">

                <div style={{ background: '#f3f3f3' }} class="sidebar">
                    <div class="user-profile">
                        <div class="display-avatar animated-avatar">
                            <img class="profile-img img-lg rounded-circle"
                                alt="profile image" src={profile} />
                        </div>
                        <div class="info-wrapper">
                            <p class="user-name">sumit</p>

                        </div>
                    </div>
                    <ul class="navigation-menu">
                        <li style={{ background: '#f3f3f3' }} class="nav-category-divider">MAIN</li>
                        <li>
                            <a style={{ cursor: 'pointer' }} >
                                <span class="link-title">Dashboard</span>
                                <i class="mdi mdi-gauge link-icon"></i>
                            </a>
                        </li>

                        <li>
                            <a style={{ cursor: 'pointer' }} onClick={() => logout()} class="dropdown-grid">

                                <button style={{ background: '#459DF9' }} type="button" class="btn btn-info w-full">LogOut</button>
                            </a>
                        </li>


                    </ul>

                </div>


                <div style={{ backgroundColor: '#' }} class="page-content-wrapper">

                    <div class='md:flex sm-block wrapper w-100 '>
                        <div style={{ position: 'relative' }} class="col-6 col-md-6 equel-grid ">
                            <div class="grid">
                                <div style={{ backgroundColor: 'white', borderRadius: '10px' }} class="grid-body d-flex flex-column h-100">
                                    <div class="wrapper">
                                        <div class="d-flex justify-content-between">
                                            <div class="split-header">
                                                <img class="img-ss mt-1 mb-1 mr-2" src="https://image.flaticon.com/icons/png/512/216/216877.png"
                                                    alt="instagram" />
                                                <p class="card-title">User Register Growth</p>
                                            </div>

                                        </div>
                                        <div class="d-flex align-items-end pt-2 mb-4">

                                            <p class="ml-2 text-muted">Total <span className='font-weight-bold text-primary'>{alldatas ? alldatas.alldata.length : 0}</span> User Registered</p>
                                        </div>
                                    </div>
                                    <div class="mt-auto">

                                        <Line class='linebar' data={{
                                            labels: alldatas ? Object.keys(alldatas.count).reverse() : [],
                                            datasets: [{
                                                label: 'Regsiter per day Growth',
                                                data: alldatas ? Object.values(alldatas.count).reverse() : [],
                                                fill: false,
                                                borderColor: 'rgb(84, 108, 242)',
                                                tension: 0.1
                                            }]

                                        }}
                                            width={'20%'}
                                            height={30}

                                            options={{
                                                maintainAspectRatio: false, scales: {
                                                    yAxes: [{ ticks: { beginAtZero: true } }]
                                                },
                                                animations: {
                                                    tension: {
                                                        duration: 1000,
                                                        easing: 'linear',
                                                        from: 1,
                                                        to: 0,
                                                        loop: true
                                                    }
                                                },
                                            }} />



                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* modal */}

                        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="staticBackdropLabel">Permissions <span>   <small>{changeper.username}</small></span> </h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">

                                        {isdone ? <div class="d-flex justify-content-center">
                                            <div class="spinner-border" role="status">
                                                <span class="visually-hidden">Loading...</span>
                                            </div>
                                        </div> : <div>

                                            {donemsg ? <div class="alert alert-success">
                                                <strong>Success</strong>
                                            </div> : ''}

                                            <div class="custom-control custom-switch mb-3">
                                                <input type="checkbox" class="custom-control-input" id="customSwitch1" checked={htmlq} onChange={(e) => sethtmlq(e.target.checked)} />
                                                <label class="custom-control-label" for="customSwitch1">Html Exam</label>
                                            </div>
                                            <div class="custom-control custom-switch mb-3">
                                                <input type="checkbox" class="custom-control-input" id="customSwitch2" checked={cplusplusq} onChange={(e) => setcplusplusq(e.target.checked)} />
                                                <label class="custom-control-label" for="customSwitch2">C++ Exam</label>
                                            </div>
                                            <div class="custom-control custom-switch mb-3">
                                                <input type="checkbox" class="custom-control-input" id="customSwitch3" checked={jsq} onChange={(e) => setjsq(e.target.checked)} />
                                                <label class="custom-control-label" for="customSwitch3">JavaScript Exam</label>
                                            </div>
                                            <div class="custom-control custom-switch mb-3">
                                                <input type="checkbox" class="custom-control-input" id="customSwitch4" checked={pythonq} onChange={(e) => setpythonq(e.target.checked)} />
                                                <label class="custom-control-label" for="customSwitch4">Python Exam</label>
                                            </div>

                                        </div>}
                                        <small>After saved wait for a few second for saved data will  reflect</small>
                                    </div>
                                    <div class="modal-footer">

                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" onClick={() => changepermisstion()} class="btn btn-primary">Save Changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* modal end */}

                        <div class="col-6 col-md-6 equel-grid">
                            <div class="grid">
                                <div style={{ backgroundColor: 'white', borderRadius: '10px' }} class="grid-body">
                                    <div class="split-header">
                                        <p class="card-title"> Recent Activity Log</p>

                                    </div>
                                    <div class="vertical-timeline-wrapper">
                                        <div class="timeline-vertical dashboard-timeline">

                                            {alldatas ? alldatas.alldata.map(e => {
                                                return (

                                                    <div class="activity-log">
                                                        <p class="log-name">{e.username}</p>
                                                        <div class="log-details">Analytics dashboard has been created</div>
                                                        <small class="log-time">{new Date().getMinutes() - new Date(e.date).getMinutes()} Min Ago</small>
                                                    </div>


                                                )
                                            }) : ''}



                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>


                    </div>


                    <div class="col-lg-12">
                        <div class="grid">
                            <p class="grid-header">User Performances</p>
                            <div style={{ overflowX: 'scroll' }} class="item-wrapper">
                                <div class="table-responsive overflow-auto">
                                    <table class="table border-none">
                                        <thead>
                                            <tr>
                                                <th>Profile Pic</th>
                                                <th>Detail</th>
                                                <th>Total Points</th>
                                                <th>Html Points</th>
                                                <th>JavaScript Points</th>
                                                <th>C++ Points</th>
                                                <th>Python Points</th>
                                                <th>Joining date</th>
                                                <th>Edit</th>






                                            </tr>
                                        </thead>
                                        <tbody>

                                            {alldatas ? alldatas.alldata.map(e => {
                                                return (

                                                    <tr>

                                                        <td class="pr-0 pl-4">
                                                            <img class="profile-img img-sm" src={profile}
                                                                alt="profile image" />
                                                        </td>
                                                        <td class="pl-md-0">
                                                            <small class="text-black font-weight-medium d-block">{e.username}</small>
                                                            <span class="text-gray">
                                                                <span class="status-indicator rounded-indicator small bg-primary"></span>Activated
                                                            </span>
                                                        </td>

                                                        <td class="text-success text-center">{e.test.map(e => e.point).reduce(function (acc, val) { return acc + val; }, 0)} </td>
                                                        <td class="text-success">{e.test.filter(ht => ht.type === 'html').map(e => e.point).reduce(function (acc, val) { return acc + val; }, 0)} &nbsp;    {e.test.filter(ht => ht.type === 'html').length > 1 ? '+' + (((e.test.filter(ht => ht.type === 'html')[e.test.filter(ht => ht.type === 'html').length - 1].point - e.test.filter(ht => ht.type === 'html')[e.test.filter(ht => ht.type === 'html').length - 2].point) / e.test.filter(ht => ht.type === 'html')[e.test.filter(ht => ht.type === 'html').length - 2].point) * 100).toFixed(1) + '%' + "" + e.htmlquiz.status ? 'On' : 'OFF' : `+0%`}</td>
                                                        <td class="text-success">{e.test.filter(ht => ht.type === 'js').map(e => e.point).reduce(function (acc, val) { return acc + val; }, 0)} &nbsp;    {e.test.filter(ht => ht.type === 'js').length > 1 ? '+' + (((e.test.filter(ht => ht.type === 'js')[e.test.filter(ht => ht.type === 'js').length - 1].point - e.test.filter(ht => ht.type === 'js')[e.test.filter(ht => ht.type === 'js').length - 2].point) / e.test.filter(ht => ht.type === 'js')[e.test.filter(ht => ht.type === 'js').length - 2].point) * 100).toFixed(1) + '%' + "" + e.jsquiz.status ? 'On' : 'OFF' : `+0%`}</td>

                                                        <td class="text-success">{e.test.filter(ht => ht.type === 'cplusplus').map(e => e.point).reduce(function (acc, val) { return acc + val; }, 0)} &nbsp;    {e.test.filter(ht => ht.type === 'cplusplus').length > 1 ? '+' + (((e.test.filter(ht => ht.type === 'cplusplus')[e.test.filter(ht => ht.type === 'cplusplus').length - 1].point - e.test.filter(ht => ht.type === 'cplusplus')[e.test.filter(ht => ht.type === 'cplusplus').length - 2].point) / e.test.filter(ht => ht.type === 'cplusplus')[e.test.filter(ht => ht.type === 'cplusplus').length - 2].point) * 100).toFixed(1) + '%' + "" + e.cplusplusquiz.status ? 'On' : 'OFF' : `+0%`}</td>

                                                        <td class="text-success">{e.test.filter(ht => ht.type === 'python').map(e => e.point).reduce(function (acc, val) { return acc + val; }, 0)} &nbsp;    {e.test.filter(ht => ht.type === 'python').length > 1 ? '+' + (((e.test.filter(ht => ht.type === 'python')[e.test.filter(ht => ht.type === 'python').length - 1].point - e.test.filter(ht => ht.type === 'python')[e.test.filter(ht => ht.type === 'python').length - 2].point) / e.test.filter(ht => ht.type === 'python')[e.test.filter(ht => ht.type === 'python').length - 2].point) * 100).toFixed(1) + '%' + "" + e.pythonquiz.status ? 'On' : 'OFF' : `+0%`}</td>

                                                        {/* <td class="text-danger">86 &nbsp; 23.05% <i class="mdi mdi-arrow-down"></i> </td>
                                                    */}    <td>{new Date(e.date).getDate()} - {new Date(e.date).getMonth()} - {new Date(e.date).getFullYear()} </td>

                                                        <button type="button" onClick={() => setchangeper(e)} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                                            <td style={{ cursor: 'pointer' }} class="actions">
                                                                <img style={{ width: '15px' }} src='https://maxcdn.icons8.com/Share/icon/Dusk_Wired/Editing/edit1600.png' />
                                                            </td>
                                                        </button>

                                                    </tr>


                                                )

                                            }) : ''}

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <footer class="footer">
                        <div class="row">
                            <div class="col-sm-6 text-center text-sm-right order-sm-1">
                                <ul class="text-gray">
                                    <li><a href="#">Terms of use</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                </ul>
                            </div>
                            <div class="col-sm-6 text-center text-sm-left mt-3 mt-sm-0">
                                <small class="text-muted d-block">Copyright © 2021 . All rights reserved</small>
                                <small class="text-gray mt-2">Handcrafted With <i class="mdi mdi-heart text-danger"></i> for Capgemini task</small>
                            </div>
                        </div>
                    </footer>

                </div>

            </div>





        </div>
    )
}



function mapStateToProps(state) {

    return {
        profile: state.data.profile.data,
        msg: state.data.registererror
    }
}

const mapDispatchToProps = ({
    logoutuser: logoutuser
})



export default connect(mapStateToProps, mapDispatchToProps)(Admindashboard)