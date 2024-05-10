// reducers/authReducer.js
const initialState = {
    isAuthenticated: false,
    user: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      // Handle authentication actions here
      default:
        return state;
    }
  };
  
  export default authReducer;
  