import { actions } from './actions'
const initialState = (() => {

    return {
        commitee: {
            Name: "", start_date: "", end_date: "", saving_amount: ""
        },
        committee_arr: [],
        obj: {
            month:
            {
                member:
                {

                    day: []

                }

            }
        }
    }
})()
function committeeReducer(state = initialState, action) {
    switch (action.type) {
        case actions.addCommittee.type:
            state.committee_arr.push(action.payload);
            return state;

        case actions.delCommittee.type:
            return Object.assign(
                {},
                state,
                {
                    committee_arr: [
                        ...state.committee_arr]

                }
            );
        case actions.upCommittee.type:
            return Object.assign(
                {},
                state,
                {
                    committee_arr: action.committee_arr


                }
            );
        case actions.addMember.type:
            return Object.assign(
                {},
                state,
                {

                }
            );
        case actions.removeMember.type:
            return Object.assign(
                {},
                state,
                {

                }
            );
        case actions.markAtt.type:
            return Object.assign(
                {},
                state,
                {

                }
            );
        default:
            return state;
    }
}

export default committeeReducer;