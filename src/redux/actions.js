export function increment() {
  return {
    type: "INCREMENT",
  };
}
export function decrement() {
  return {
    type: "DECREMENT",
  };
}
export function reset() {
  return {
    type: "RESET",
  };
}

export function getPost() {
  return {
    type: "GET_POST",
  };
}

export function receivePost(post) {
  return {
    type: "RECEIVE_POST",
    payload: post,
  };
}

export function fetchPost(valor) {
  return function (dispatch) {
    dispatch(getPost());
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => dispatch(receivePost(json)));
  };
}
