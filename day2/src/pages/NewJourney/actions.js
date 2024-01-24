import { ADD_NEW_JOURNEY } from "./constants";

export const addNewJourney = (token, formData, cb) => ({
  type: ADD_NEW_JOURNEY,
  token,
  formData,
  cb
});
