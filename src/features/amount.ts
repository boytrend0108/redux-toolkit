type AddAction = { type: 'amount/ADD', payload: number };
type TakeAction = { type: 'amount/TAKE', payload: number };
type ClearAction = { type: 'amount/CLEAR' };
type Action = AddAction | TakeAction | ClearAction;

const add = (value: number): AddAction => ({ type: 'amount/ADD', payload: value });
const take = (value: number): TakeAction => ({ type: 'amount/TAKE', payload: value });
const clear = (): ClearAction => ({ type: 'amount/CLEAR'});

export const amountReducer = (amount = 0, action: Action) => {
  switch (action.type) {
    case 'amount/ADD':
      return amount + action.payload;
    case 'amount/TAKE':
      return amount - action.payload;
    case 'amount/CLEAR':
      return 0;
    default:
      return amount;
  }
}

export default amountReducer;
export const actions = {add, take, clear};