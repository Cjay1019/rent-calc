import { USER_INPUT, USER_SELECT, SUBMIT } from "./actions";
import { Map } from "immutable";

const initialState = Map({
  bills: Map({
    rent: { amount: null, paidBy: null },
    electric: { amount: null, paidBy: null },
    renters: { amount: null, paidBy: null }
  }),
  people: Map({
    katherine: Map({
      name: "Katherine",
      amountPaid: 0
    }),
    conner: Map({
      name: "Conner",
      amountPaid: 0
    })
  }),
  total: 0
});

function submit(state = initialState, person) {
  let conTotal = 0;
  let katTotal = 0;
  let total = 0;
  Object.keys(state.toJS().bills).forEach(e => {
    total += parseFloat(state.toJS().bills[e].amount);
    state.toJS().bills[e].paidBy === "Katherine"
      ? (katTotal += parseFloat(state.toJS().bills[e].amount))
      : (conTotal += parseFloat(state.toJS().bills[e].amount));
  });
  return state
    .setIn(["people", "katherine", "amountPaid"], katTotal)
    .setIn(["people", "conner", "amountPaid"], conTotal)
    .setIn(["total"], total);
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case USER_INPUT:
      return state.setIn(
        ["bills", Object.keys(action.payload)[0], "amount"],
        Object.values(action.payload)[0]
      );
    case USER_SELECT:
      return state.setIn(
        ["bills", Object.keys(action.payload)[0], "paidBy"],
        Object.values(action.payload)[0]
      );
    case SUBMIT:
      return submit(state);
    default:
      return state;
  }
}

export default reducer;
