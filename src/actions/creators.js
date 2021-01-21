import { appConstants } from "./types";

export const appActions = {
    covidSummaryRequest,
    covidSummarySuccess,
    overallReportRequest,
    overallReportSuccess,
    stateReportRequest,
    stateReportSuccess,
    dailyReportRequest,
    dailyReportSuccess,
}


function covidSummaryRequest() {
    return {
        type: appConstants.COVID_SUMMARY_REQUEST,
    };
};

function covidSummarySuccess(payload) {
    return {
        type: appConstants.COVID_SUMMARY_SUCCESS,
        payload,
    };
};

function overallReportRequest() {
    return {
        type: appConstants.OVERALL_REPORT_REQUEST,
    };
};

function overallReportSuccess(payload) {
    return {
        type: appConstants.OVERALL_REPORT_SUCCESS,
        payload,
    };
};

function stateReportRequest() {
    return {
        type: appConstants.STATE_REPORT_REQUEST,
    };
};

function stateReportSuccess(payload) {
    return {
        type: appConstants.STATE_REPORT_SUCCESS,
        payload,
    };
};

function dailyReportRequest() {
    return {
        type: appConstants.DAILY_REPORT_REQUEST,
    };
};

function dailyReportSuccess(payload) {
    return {
        type: appConstants.DAILY_REPORT_SUCCESS,
        payload,
    };
};