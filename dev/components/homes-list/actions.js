import { 
  REQUEST_LIST_DATA, 
  RECEIVE_LIST_DATA,
  ERR_LIST_DATA
 } from './action-const'

let requestListData = () => {
  return {
    type: REQUEST_LIST_DATA
  }
}

let recieveListData = (listData) => {
  return {
    type: RECEIVE_LIST_DATA,
    listData
  }
}

let errListData = (err) => {
  return {
    type: ERR_LIST_DATA,
    err
  }
}

let fetchAPI = () => {
  const URL = 'http://www.onerent.co/api/Property/availableProperties'
  return fetch(URL,{method: 'POST'})
    .then(response => Promise.all([response, response.json()]))
}

export let fetchListData = (params) => {
  return (dispatch) => {
    dispatch(requestListData())
    return fetchAPI()
      .then(([response, json]) => {
        dispatch(recieveListData(json))
      })
      .catch(error => {
        if (error) {
          dispatch(fetchOrdersFailure('Fetching orders failed.'))
        }
        dispatch(fetchOrdersFailure(error))
      })
  }
}
