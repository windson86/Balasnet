import {AJAX_BEGIN, AJAX_END} from './action-types'

function beginAjax () {
  return {
    type: AJAX_BEGIN
  }
}

function endAjax () {
  return {
    type: AJAX_END
  }
}

export {
  beginAjax,
  endAjax
}