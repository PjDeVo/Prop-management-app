import {
  CHANGE_SELECTED_REQUEST_TYPE

} from './types';

export function changeSelectedRequestType(boxType) {
  return (
    {
      type: CHANGE_SELECTED_REQUEST_TYPE,
      paylaod: boxType
    }
  )
};  