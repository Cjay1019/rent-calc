import { USER_INPUT } from "./actions";
import { Map } from "immutable";

const initialState = Map({
  bills: Map({
    rent: { amount: null, paidBy: "Katherine" },
    electric: { amount: null, paidBy: "Conner" },
    renters: { amount: null, paidBy: "Katherine" }
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

function reducer(state = initialState, action) {
  switch (action.type) {
    case USER_INPUT:
      return state.setIn(
        ["bills", Object.keys(action.payload)[0], "amount"],
        Object.values(action.payload)[0]
      );
    default:
      return state;
  }
}

export default reducer;
