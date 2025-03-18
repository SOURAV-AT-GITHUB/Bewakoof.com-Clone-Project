const defaultUser = {
  token: null,
  first_name: null,
  last_name: null,
  email: null,
};
export default function authReducer(state = defaultUser, { type, payload }) {
  switch (type) {
    default:
      return state;
  }
}
