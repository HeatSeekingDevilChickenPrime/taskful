import * as types from '../constants/actionTypes';

export const AcceptChoreCreator = choreAccepted => ({
  type: types.ACCEPT_CHORE,
  payload: choreAccepted,
});

export const CreateChoreCreator = choreCreated => ({
  type: types.CREATE_CHORE,
  payload: choreCreated,
});

export const CompleteChoreCreator = choreCompleted => ({
  type: types.COMPLETE_CHORE,
  payload: choreCompleted,
});

