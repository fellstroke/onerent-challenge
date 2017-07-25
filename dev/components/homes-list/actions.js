import { 
  REQUEST_LIST_DATA, 
  RECEIVE_LIST_DATA,
  ERR_LIST_DATA
 } from './action-const'

const requestListData = () => {
  return {
    type: REQUEST_LIST_DATA
  }
}

const recieveListData = (items) => {
  return {
    type: RECEIVE_LIST_DATA,
    items
  }
}

const errListData = (err) => {
  return {
    type: ERR_LIST_DATA,
    err
  }
}

const fetchAPI = () => {
  const URL = 'http://www.onerent.co/api/Property/availableProperties'
  return fetch(URL,{method: 'POST'})
    .then(response => Promise.all([response, response.json()]))
}

export const fetchListData = (params) => {
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
