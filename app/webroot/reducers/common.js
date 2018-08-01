
const initialState = [
  {
    openSubmen: false,
    text: 'Use Redux',
    completed: false,
    id: 0,
  }
]

export default function commonStore(state = initialState, action) {
  switch (action.type) {
    case "OPEN_SUBMEN":
      return {...state, openSubmen: action.status}
      break;
    case "INDEX_TIT":
      return action.data;
      break;
    default:
      return state
  }
}
