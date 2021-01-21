import { combineReducers } from "redux";
import covidSummary from './covidSummaryReducer';
import overallReport from './overallReportReducer';
import stateReport from './stateReportReducer';
import dailyReport from './dailyReportReducer';

const rootReducer = combineReducers({
    covidSummary,
    overallReport,
    stateReport,
    dailyReport
});

export default rootReducer;
