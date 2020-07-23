import {delay,takeLatest,takeEvery, put} from 'redux-saga/effects'
// Worker: Increase Counter
function* increaseCountAsync(){
  try{
//delay in millis
yield delay(500);
//dispatch ation to reducer store
yield put({
  type:"INCREASE_COUNTER_ASYNC",
  value: 1
});
  }catch(error){
console.log(error);
  }
}

// Watcher: Increase Counter Async
export function* watchIncreaseCounter(){
yield takeLatest("INCREASE_COUNTER",increaseCountAsync);
}
// Worker: Decrease Counter
function* decreaseCountAsync(){
  //delay in millis
  yield delay(500)
  try{
    yield put({
      type :"DECREASE_COUNTER_ASYNC",
      value: 1
    });
  }catch(error){
    console.log(error);
  }
}
// Watcher: Decrease Counter Async
export function* watchDecreaseCounter(){
yield takeLatest("DECREASE_COUNTER",decreaseCountAsync);
}