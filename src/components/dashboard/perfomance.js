import React, { useEffect, useState } from 'react'
import '../../assets/vendors/iconfonts/mdi/css/materialdesignicons.css';
import { Doughnut, Line } from 'react-chartjs-2';






export default function Perfomance(props) {

    const [state, setstate] = useState('');
    const [htmltest, sethtmltest] = useState('');
    const [jstest, setjstest] = useState('');
    const [cplusplustest, setcplusplustest] = useState('')
    const [pythontest, setpythontest] = useState('');
    const [totalpoint, settotalpoint] = useState(0);

    useEffect(() => {


        setstate(props.state.data.profile.data)



        if (state) {

            var htmldata = state.test.filter(ht => ht.type === 'html')
            if (htmldata) sethtmltest(htmldata)
            else sethtmltest(0)

            var jsdata = state.test.filter(ht => ht.type === 'js')
            if (jsdata) setjstest(jsdata)
            else setjstest(0)

            var cpdata = state.test.filter(ht => ht.type === 'cplusplus')
            if (cpdata) setcplusplustest(cpdata)
            else setcplusplustest(0)

            var pydata = state.test.filter(ht => ht.type === 'python')
            if (pydata) setpythontest(pydata)
            else setpythontest(0)






            var tt = state.test.map(e => e.point).reduce(function (acc, val) { return acc + val; }, 0)
            if (tt) {
                settotalpoint(tt)
            }


            if (htmltest) {
                var ht = htmltest.map(e => e.point).reduce(function (acc, val) { return acc + val; }, 0)
            }



        }





    }, [props, state])



    return (
        <div className='p-sm-2 p-lg-5'>
            <div class="page-content-wrapper-inner">
                <div class="content-viewport">
                    <div style={{ padding: '20px', borderRadius: '20px', backgroundImage: 'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)', color: 'white' }} class="row">
                        <div class="col-12 py-5">
                            <h4>Dashboard</h4>
                            <p class="text-white">Explore your performance out of the box</p>
                        </div>
                    </div>
                    <div class="row">
                        <small className='h6 pt-4 font-weight-bold' style={{ fontFamily: 'Roboto' }}>Your Points</small>
                        {/* html */}

                        <div class="col-md-3 col-sm-6 col-6 equel-grid">
                            <div style={{ background: '#f2f2f2', borderRadius: '10px' }} class="grid">


                                <div style={{ background: 'none' }} class="grid-body text-gray">

                                    <div class="d-flex justify-content-between">
                                        <p>{htmltest.length > 0 ? 'latest mark ' + htmltest[htmltest.length - 1].point : ''}</p>
                                        <p>{htmltest.length > 1 ? '+' + (((htmltest[htmltest.length - 1].point - htmltest[htmltest.length - 2].point) / htmltest[htmltest.length - 2].point) * 100).toFixed(1) + '%' : `+0%`}</p>
                                    </div>
                                    <p class="text-black">Html</p>
                                    <div style={{ position: 'relative' }} class="wrapper w-100 mt-4">
                                        <Line style={{ width: '20%' }}
                                            data={{

                                                labels: htmltest ? htmltest.map((e, index) => e.date) : [],
                                                datasets: [{
                                                    label: 'Html Points',
                                                    data: htmltest ? htmltest.map((e, index) => e.point) : [],
                                                    backgroundColor: [
                                                        'rgba(255, 99, 132, 0.2)',


                                                    ],
                                                    borderColor: [
                                                        'rgba(255, 99, 132, 1)',


                                                    ],
                                                    borderWidth: 1
                                                }]
                                            }}
                                            width={'20%'}
                                            height={100}
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
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* js */}
                        <div class="col-md-3 col-sm-6 col-6 equel-grid">
                            <div style={{ background: '#f2f2f2', borderRadius: '10px' }} class="grid">


                                <div style={{ background: 'none' }} class="grid-body text-gray">

                                    <div class="d-flex justify-content-between">
                                        <p>{jstest.length > 0 ? 'latest mark ' + jstest[jstest.length - 1].point : 'latest mark 0'}</p>
                                        <p>{jstest.length > 1 ? '+' + (((jstest[jstest.length - 1].point - jstest[jstest.length - 2].point) / jstest[jstest.length - 2].point) * 100).toFixed(1) + '%' : `+0%`}</p>
                                    </div>
                                    <p class="text-black">JavaScript</p>
                                    <div style={{ position: 'relative' }} class="wrapper w-100 mt-4">
                                        <Line style={{ width: '20%' }}
                                            data={{

                                                labels: jstest ? jstest.map((e, index) => e.date) : [],
                                                datasets: [{
                                                    label: 'JavaScript Points',
                                                    data: jstest ? jstest.map((e, index) => e.point) : [],
                                                    backgroundColor: [

                                                        'rgba(255, 206, 86, 0.2)',

                                                    ],
                                                    borderColor: [

                                                        'rgba(255, 206, 86, 1)',

                                                    ],
                                                    borderWidth: 1
                                                }]
                                            }}
                                            width={'20%'}
                                            height={100}
                                            options={{
                                                maintainAspectRatio: false, scales: {
                                                    yAxes: [{ ticks: { beginAtZero: true } }]
                                                }
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* c++ */}
                        <div class="col-md-3 col-sm-6 col-6 equel-grid">
                            <div style={{ background: '#f2f2f2', borderRadius: '10px' }} class="grid">


                                <div style={{ background: 'none' }} class="grid-body text-gray">

                                    <div class="d-flex justify-content-between">
                                        <p>{cplusplustest.length > 0 ? 'latest mark ' + cplusplustest[cplusplustest.length - 1].point : 'latest mark 0'}</p>
                                        <p>{cplusplustest.length > 1 ? '+' + (((cplusplustest[cplusplustest.length - 1].point - cplusplustest[cplusplustest.length - 2].point) / cplusplustest[cplusplustest.length - 2].point) * 100).toFixed(1) + '%' : `+$0%`}</p>
                                    </div>
                                    <p class="text-black">C++</p>
                                    <div style={{ position: 'relative' }} class="wrapper w-100 mt-4">
                                        <Line style={{ width: '20%' }}
                                            data={{

                                                labels: cplusplustest ? cplusplustest.map((e, index) => e.date) : [],
                                                datasets: [{
                                                    label: 'C++ Points',
                                                    data: cplusplustest ? cplusplustest.map((e, index) => e.point) : [],
                                                    backgroundColor: [

                                                        'rgb(99, 153, 207,0.2)',

                                                    ],
                                                    borderColor: [
                                                        'rgb(99, 153, 207,1)',

                                                    ],
                                                    borderWidth: 1
                                                }]
                                            }}
                                            width={'20%'}
                                            height={100}
                                            options={{
                                                maintainAspectRatio: false, scales: {
                                                    yAxes: [{ ticks: { beginAtZero: true } }]
                                                }
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* python */}
                        <div class="col-md-3 col-sm-6 col-6 equel-grid">
                            <div style={{ background: '#f2f2f2', borderRadius: '10px' }} class="grid">


                                <div style={{ background: 'none' }} class="grid-body text-gray">

                                    <div class="d-flex justify-content-between">
                                        <p>{pythontest.length > 0 ? 'latest mark ' + pythontest[pythontest.length - 1].point : 'latest mark 0'}</p>
                                        <p>{pythontest.length > 1 ? '+' + (((pythontest[pythontest.length - 1].point - pythontest[pythontest.length - 2].point) / pythontest[pythontest.length - 2].point) * 100).toFixed(1) + '%' : `+0%`}</p>
                                    </div>
                                    <p class="text-black">Python</p>
                                    <div style={{ position: 'relative' }} class="wrapper w-100 mt-4">
                                        <Line style={{ width: '20%' }}
                                            data={{

                                                labels: pythontest ? pythontest.map((e, index) => e.date) : [],
                                                datasets: [{
                                                    label: 'Python Points',
                                                    data: pythontest ? pythontest.map((e, index) => e.point) : [],
                                                    backgroundColor: [
                                                        'rgb(54, 110, 159,0.2)',

                                                    ],
                                                    borderColor: [
                                                        'rgb(54, 110, 159,1)',

                                                    ],
                                                    borderWidth: 1
                                                }]
                                            }}
                                            width={'20%'}
                                            height={100}
                                            options={{
                                                maintainAspectRatio: false, scales: {
                                                    yAxes: [{ ticks: { beginAtZero: true } }]
                                                }
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Doughnut chart */}
                        <div id="content2canvas" class="col-lg-4 col-md-6 equel-grid">
                            <div style={{ background: '#ededff' }} class="grid">
                                <div class="grid-body d-flex flex-column h-100">
                                    <div class="wrapper">
                                        <div class="d-flex justify-content-between">
                                            <div class="split-header">
                                                <img style={{ border: '2px solid black', padding: '10px', width: '40px', borderRadius: '20px' }} class=" mt-1 mb-1 mr-2" src="https://cdn4.iconfinder.com/data/icons/erp-software-icon-set-1/512/select_all-512.png"
                                                    alt="instagram" />
                                                <p class="card-title">All Test Performance</p>
                                            </div>
                                            <div class="wrapper">
                                                <button class="btn action-btn btn-xs component-flat pr-0" type="button"><img className='p-1' src='https://th.bing.com/th/id/OIP.bI8KDjd8-nDvzTX_Uok7FwHaHa?pid=ImgDet&rs=1' /></button>
                                                <button class="btn action-btn btn-xs component-flat pr-0" type="button"><img className='p-1' src='https://th.bing.com/th/id/OIP.qTXL2R06KCKuw09n4AvtygHaIU?pid=ImgDet&rs=1' /></button>
                                            </div>
                                        </div>
                                        <div class="d-flex align-items-end pt-2 mb-4">

                                            <p class="ml-2 mt-2 h5 text-muted">Total Marks - {totalpoint}</p>
                                        </div>
                                    </div>
                                    <div class="mt-auto">



                                        <Doughnut style={{ width: '20%' }} data={{

                                            labels: [
                                                'Html',
                                                'JavaScript',
                                                'C++',
                                                'Python'
                                            ],
                                            datasets: [{
                                                label: 'My First Dataset',
                                                data: [htmltest ? htmltest.map(e => e.point).reduce(function (acc, val) { return acc + val; }, 0) : 0, jstest ? jstest.map(e => e.point).reduce(function (acc, val) { return acc + val; }, 0) : 0, cplusplustest ? cplusplustest.map(e => e.point).reduce(function (acc, val) { return acc + val; }, 0) : 0, pythontest ? pythontest.map(e => e.point).reduce(function (acc, val) { return acc + val; }, 0) : 0],
                                                backgroundColor: [
                                                    'rgb(255, 99, 132)',
                                                    'rgb(255, 205, 86)',
                                                    '#6399CF',
                                                    '#366E9F',

                                                ],
                                                hoverOffset: 4,


                                            }]

                                        }} />
                                    </div>
                                </div>
                            </div>
                        </div>




                        <div class="col-lg-8 col-md-12 equel-grid px-0">
                            <div style={{ background: '#ededff' }} class="grid table-responsive px-5">
                                <div class="d-flex mt-5 mb-3">
                                    <small class="mb-0 text-black h6">Recent Top 6 Test Performance</small> &nbsp;
                                    <img className='img-ss' src='https://cdn2.iconfinder.com/data/icons/technology-outline-set/24/performance-two-512.png' />
                                </div>
                                <div class="d-flex justify-content-around border-bottom py-2">
                                    <p class=" h6 text-danger text-black">Test Technology</p>
                                    <p class=" h6 text-danger text-black">Date</p>
                                    <p class=" h6 text-danger text-gray">Point Gained</p>
                                </div>
                                {(state) ? state.test.slice(Math.max(state.test.length - 6, 0)).reverse().map((data, index) => {


                                    return (
                                        <div key={index} class="d-flex justify-content-around border-bottom py-2">
                                            <p class="text-black">{(data.type).toUpperCase()}</p>
                                            <p class="text-black">{data.date}</p>
                                            <p class="text-gray">{data.point}</p>
                                        </div>
                                    )
                                }) : <div style={{ display: 'flex', justifyContent: 'center' }}> <h4 class="mt-4 h4"> IT SEEM YOU HAVENT GAVE ANY EXAM </h4></div>}
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div >
    )
}
