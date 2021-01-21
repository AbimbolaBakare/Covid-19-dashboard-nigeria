import axios from 'axios';
import { appActions } from "../actions/creators.js";


const covid = {
    // To get  the summary of COVID19 in Nigeria
    get_covid_summary: () => {
        return async dispatch => {
            dispatch(appActions.covidSummaryRequest());

            await axios.get('https://api.coronatracker.com/v3/stats/worldometer/country?countryCode=NG')
                .then(res => {
                    dispatch(appActions.covidSummarySuccess(res.data[0]));
                })
                .catch(error => {
                    dispatch(appActions.covidSummarySuccess());
                });
        }
    },

    get_overall_report: () => {
        return async dispatch => {
            dispatch(appActions.overallReportRequest());

            await axios.get('https://api.coronatracker.com/v5/analytics/trend/country?countryCode=NG&startDate=2021-01-01&endDate=2021-01-21')
                .then(res => {
                    dispatch(appActions.overallReportSuccess(res.data));
                })
                .catch(error => {
                    dispatch(appActions.overallReportSuccess());
                });
        }
    },

    filter_report_by_date: (start, end) => {
        return async dispatch => {
            dispatch(appActions.overallReportRequest());

            await axios.get(`https://api.coronatracker.com/v5/analytics/trend/country?countryCode=NG&startDate=${start}&endDate=${end}`)
                .then(res => {
                    dispatch(appActions.overallReportSuccess(res.data));
                })
                .catch(error => {
                    dispatch(appActions.overallReportSuccess());
                });
        }
    },

    get_state_report: () => {
        return async dispatch => {
            dispatch(appActions.stateReportRequest());

            await axios.get(`https://api.apify.com/v2/key-value-stores/Eb694wt67UxjdSGbc/records/LATEST?disableRedirect=true`)
                .then(res => {
                    dispatch(appActions.stateReportSuccess(res.data));
                })
                .catch(error => {
                    dispatch(appActions.stateReportSuccess());
                });
        }
    },


    daily_incidence_report: () => {
        return async dispatch => {
            dispatch(appActions.dailyReportRequest());

            await axios.get('https://api.coronatracker.com/v5/analytics/newcases/country?countryCode=NG&startDate=2021-01-01&endDate=2021-01-22')
                .then(res => {
                    dispatch(appActions.dailyReportSuccess(res.data));
                })
                .catch(error => {
                    dispatch(appActions.dailyReportSuccess());
                });
        }
    },
    
    filter_daily_report_by_date: (start, end) => {
        return async dispatch => {
            dispatch(appActions.dailyReportRequest());

            await axios.get(`https://api.coronatracker.com/v5/analytics/newcases/country?countryCode=NG&startDate=${start}&endDate=${end}`)
                .then(res => {
                    dispatch(appActions.dailyReportSuccess(res.data));
                })
                .catch(error => {
                    dispatch(appActions.dailyReportSuccess());
                });
        }
    },  
}

export default covid; 