import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionsCreators from "../redux/actions";
import store from "../redux/store";
import { fetchPost } from "../redux/actions";

const Counter = ({ counter, increment, decrement, reset, fetchPost }) => (
  <p>
    Clicked: {counter} times
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
    <button onClick={reset}>Reset</button>
    <button onClick={() => fetchPost(counter)}>Fetch</button>
  </p>
);

const mapStateToProps = (state) => ({
  counter: state.count,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionsCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
