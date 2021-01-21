import { appConstants } from '../actions/types'

const initialState = {
    isLoading: false,
    data: [],
}
 
function stateReport(state = initialState, action) {
    switch (action.type) {
        case appConstants.STATE_REPORT_REQUEST:
            return {
                ...state,
                isLoading: true,
            
            };
        case appConstants.STATE_REPORT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.payload, 
            };
        default:
            return state
    }
}

export default stateReport;