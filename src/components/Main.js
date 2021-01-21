import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import covid from '../services/covidApiCalls';
import 'react-circular-progressbar/dist/styles.css';
import { CasesBox } from './CasesBox';
import { OverallCasesWithFilter } from './OverallCasesWithFilter';
import { StateCasesTable } from './StateCasesTable';
import { CasesProgressBar } from './CasesProgressBar';
import { Header } from './Header';
import { DailyCasesWithFilter } from './DailyCasesWithFilter';

const Main = (props) => {
    // All the endpoints are being called at the load of the page
    useEffect(() => {
        props.get_covid_summary();
        props.get_overall_report();
        props.get_state_report();
        props.daily_incidence_report()
    }, []);

    // Constants for the circular progress bar percentage values
    const percentageRecovery = props.data.totalConfirmed ? ((props.data.totalRecovered / props.data.totalConfirmed) * 100).toFixed(2) : 0;
    const percentageDeath = props.data.totalConfirmed ? ((props.data.totalDeaths / props.data.totalConfirmed) * 100).toFixed(2) : 0;
    const percentageActive = props.data.totalConfirmed ? ((props.data.activeCases / props.data.totalConfirmed) * 100).toFixed(2) : 0;

    return (
        <>
            {/* Top bar */}
            <Header text='COVID-19 DAHSBOARD FOR NIGERIA' />

            <Container className='mt-5' fluid>
                <Row className='text-center'>
                    <Col lg='7' className='ml-lg-5'>
                        {/* Overall summary boxes components */}
                        <Row>
                            <Col lg='3'>
                                {props.data.totalConfirmed && <CasesBox text={props.data.totalConfirmed} title='Overall Cases' style='overall-cases' />}

                            </Col>
                            <Col lg='3'>
                                {props.data.totalDeaths && <CasesBox text={props.data.totalDeaths} title='Total Deaths' style='overall-deaths' />}

                            </Col>
                            <Col lg='3'>
                                {props.data.activeCases && <CasesBox text={props.data.activeCases} title='Active Cases' style='overall-active' />}

                            </Col>
                            <Col lg='3'>
                                {props.data.totalRecovered && <CasesBox text={props.data.totalRecovered} title='Total Recovered' style='overall-recovered' />}
                            </Col>
                        </Row>

                        <Row className='text-white font-weight-bold'>
                            {/* Progress bar components */}
                            <Col lg='3'>
                                <CasesProgressBar rate={percentageRecovery} text='Recovery Rate' color='blue' />
                                <p className='mt-3'>Recovery rate of total overall cases against total recovered cases</p>
                            </Col>
                            <Col lg='1'></Col>
                            <Col lg='3'>
                                <CasesProgressBar rate={percentageDeath} text='Death/ Fatality Rate' color='red' />
                                <p className='mt-3'>Death rate of total overall cases against total death cases</p>
                            </Col>
                            <Col lg='1'></Col>
                            <Col lg='3'>
                                <CasesProgressBar rate={percentageActive} text='Active' color='green' />
                                <p className='mt-3'>Percentage of active cases against overall cases</p>
                            </Col>

                        </Row>
                    </Col>
                    <Col lg='4'>
                        <h4 className='text-white font-weight-bolder'>TOTAL TEST CARRIED OUT: {props.stateReport.tested} </h4>
                        <img src='/images/covid2.svg' alt='covid' className='img-fluid' />
                    </Col>
                </Row>
            </Container>


            <Container className='mt-5' fluid>
                <Row className='text-center align-items-center'>
                    <Col lg='4' className='mt-5'>
                        <img src='/images/covid.svg' alt='covid' className='img-fluid' />
                    </Col>
                    <Col lg='7' className='ml-lg-5 bg-white p-lg-5 mt-5'>
                        <p className='font-weight-bolder'>A graphical representation of overall cases </p>
                        {/* Graph containing overall cases with filter */}
                        <OverallCasesWithFilter {...props} />
                    </Col>
                </Row>
            </Container>

            <Container className='mt-5' fluid>
                <Row className='text-center align-items-center'>
                    <Col lg='7' className='ml-lg-5 bg-white p-lg-5 mt-5'>
                        <p className='font-weight-bolder'>A graphical representation of daily incidence report </p>
                        {/* Graph containing daily cases report with filter */}
                        <DailyCasesWithFilter {...props} />
                    </Col>

                    <Col lg='4' className='mt-5'>
                        <img src='/images/covid4.svg' alt='covid' className='img-fluid' />
                    </Col>

                </Row>
            </Container>

            <Container className='mt-5' fluid>
                <Row>
                    <Col lg='2'></Col>
                    <Col lg='8' sm='12' xs='12' md='12' className='mt-5 p-lg-5'>

                        {/* A paginated table containing overall report for each state. You can also search for a state */}
                        {props.stateReport.regions && <StateCasesTable {...props} />}

                    </Col>
                    <Col lg='2'></Col>
                </Row>
            </Container>
        </>
    )
};

const mapStateToProps = (state) => {
    return {
        loading: state.covidSummary.isLoading,
        data: state.covidSummary.data,
        details: state.overallReport.data,
        stateReport: state.stateReport.data,
        dailyReport: state.dailyReport.data
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        get_covid_summary: () => dispatch(covid.get_covid_summary()),
        get_overall_report: () => dispatch(covid.get_overall_report()),
        filter_report_by_date: (start, end) => dispatch(covid.filter_report_by_date(start, end)),
        get_state_report: () => dispatch(covid.get_state_report()),
        daily_incidence_report: () => dispatch(covid.daily_incidence_report()),
        filter_daily_report_by_date: (start, end) => dispatch(covid.filter_daily_report_by_date(start, end)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main)
