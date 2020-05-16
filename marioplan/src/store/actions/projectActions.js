export const createProject = (project) => {
{/* 

This works fine: 
  return {
    type: 'CREATE_PROJECT', project 
  }
But we are using it now beacuse we want to use Thunk to make async call to the DB before the action created or send to the reducer

*/}
  return (dispatch, getState) => {
    // make async call to database
    dispatch({ type: 'CREATE_PROJECT', project });
  }
};