import counterSaga from 'features/counter/counterSaga';
import {all} from 'redux-saga/effects';

function* helloSaga() {
    console.log('hello Saga');
}

export default function* rootSaga() {
    console.log('check root saga');
    yield all([
        helloSaga(),
        counterSaga(),
    ])
}
