export default function usePostsFilter(state, filter) {
  if (filter) {
    return state.filter((p) => p?.title.toLowerCase().includes(filter.toLowerCase()))
  } else {
    return state
  }
}