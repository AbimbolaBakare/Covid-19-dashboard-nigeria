import { appConstants } from '../actions/types'

const initialState = {
    isLoading: false,
    data: [],
}
 
function overallReport(state = initialState, action) {
    switch (action.type) {
        case appConstants.OVERALL_REPORT_REQUEST:
            return {
                ...state,
                isLoading: true,
            
            };
        case appConstants.OVERALL_REPORT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.payload, 
            };
        default:
            return state
    }
}

export default overallReport;