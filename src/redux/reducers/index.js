import {combindReduders} from 'redux';
import courses from './courseReducer';

const rootReducer = combindReduders({
    courses
});

export default rootReducer;
