export default function commonStore(state = '上面一旦重新填我就变了', action) {
  switch (action.type) {
    case "INDEX_TIT":
      return action.data;
      break;
    default:
      return state
  }
}
