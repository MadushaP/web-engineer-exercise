import {
    APPS_REQUEST,
    APPS_SUCCESS,
    APPS_ERROR,
    APPS_UPDATE_ITEM
} from '../actions/apps';

const initialState = {
    requesting: null,
    items: [],
    error: null
};

export default function apps (state = initialState, action) {
    const { type, payload, index, value } = action;

    switch (type) {
        case APPS_UPDATE_ITEM:
            return { ...state,
                    items: state.items.map((item, i) =>
                        i === index ? {...item, name: value} : item
                    )};
        case APPS_REQUEST:
            return Object.assign({}, state, { requesting: true });
        case APPS_SUCCESS:
            return Object.assign(
                {},
                state,
                {
                    requesting: false,
                    items: payload
                }
            );
        case APPS_ERROR:
            return Object.assign(
                {},
                state,
                {
                    requesting: false,
                    error: true
                }
            );
        default:
            return state;
    }
}
