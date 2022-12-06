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
    const placeHolder = {
      name: "Johnny",
      age: 99,
    };

    dispatch(getPost());
    fetch(`https://jsonplaceholder.typicode.com/todos/${valor}`)
      .then((res) => res.data)
      .then((data) => dispatch(receivePost(data || placeHolder)))
      .catch((e) => console.log(e));
  };
}
