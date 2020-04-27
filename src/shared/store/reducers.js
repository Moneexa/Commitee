import {actions} from './actions'
const initialState = (() => {
    /*let token;
    let isAuthenticated = false;
    try {
        token = JSON.parse(localStorage.getItem('token'));
        token.expiry = new Date(token.expiry)
        const currentDate = new Date();
        isAuthenticated = token && token.expiry > currentDate;
    } catch (error) {
        token = {
            expiry: undefined,
            jwt: undefined,
            setIsAuthenicated: function (value) {
                this.isAuthenticated = value;
            }
        };
    }*/
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
            localStorage.setItem('token', JSON.stringify(action.token));
            return Object.assign(
                {},
                state,
                {
                    isAuthenticated: true,
                    token: action.token
                }
            );
            case actions.delCommittee.type:
            localStorage.setItem('token', JSON.stringify(action.token));
            return Object.assign(
                {},
                state,
                {
                    isAuthenticated: true,
                    token: action.token
                }
            );
            case actions.upCommittee.type:
            localStorage.setItem('token', JSON.stringify(action.token));
            return Object.assign(
                {},
                state,
                {
                    isAuthenticated: true,
                    token: action.token
                }
            );
            case actions.addMember.type:
            localStorage.setItem('token', JSON.stringify(action.token));
            return Object.assign(
                {},
                state,
                {
                    isAuthenticated: true,
                    token: action.token
                }
            );
            case actions.removeMember.type:
            localStorage.setItem('token', JSON.stringify(action.token));
            return Object.assign(
                {},
                state,
                {
                    isAuthenticated: true,
                    token: action.token
                }
            );
            case actions.markAtt.type:
            localStorage.setItem('token', JSON.stringify(action.token));
            return Object.assign(
                {},
                state,
                {
                    isAuthenticated: true,
                    token: action.token
                }
            );
        default:
            return state;
    }
}

export default committeeReducer;