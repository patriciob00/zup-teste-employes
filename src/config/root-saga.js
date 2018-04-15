import { all } from 'redux-saga/effects';

import MainContainer from '../App/containers/main-container/main-container.saga';

export default function* rootSaga() {
    yield all([
        MainContainer()
    ]);
}