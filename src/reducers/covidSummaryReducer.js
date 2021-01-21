import { appConstants } from '../actions/types'

const initialState = {
    isLoading: false,
    data: [],
}
 
function covidSummary(state = initialState, action) {
    switch (action.type) {
        case appConstants.COVID_SUMMARY_REQUEST:
            return {
                ...state,
                isLoading: true,
            
            };
        case appConstants.COVID_SUMMARY_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.payload, 
            };
        default:
            return state
    }
}

export default covidSummary;