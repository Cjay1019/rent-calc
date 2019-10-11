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
      amountPaid: 0,
      paidMore: false
    }),
    conner: Map({
      name: "Conner",
      amountPaid: 0,
      paidMore: false
    })
  })
});

function submit(state = initialState) {
  let total = 0;
  let conTotal = 0;
  let katTotal = 0;
  Object.keys(state.toJS().bills).forEach(e => {
    total += parseFloat(state.toJS().bills[e].amount);
    state.toJS().bills[e].paidBy === "Katherine"
      ? (katTotal += parseFloat(state.toJS().bills[e].amount))
      : (conTotal += parseFloat(state.toJS().bills[e].amount));
  });
  console.log(total, conTotal, katTotal);
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
      submit(state);
    default:
      return state;
  }
}

export default reducer;
