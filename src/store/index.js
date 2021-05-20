import { createStore } from 'redux';

const INITIAL_STATE = {
     data: [
         'To do Test'
     ],
}

function courses(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return { ...state, data: [...state.data, action.todo] };
        default:
            return state;
    }
}

const store = createStore(courses);

export default store;