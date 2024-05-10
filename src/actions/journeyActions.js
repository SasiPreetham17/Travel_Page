import { FETCH_JOURNEYS, FETCH_JOURNEYS_SUCCESS, FETCH_JOURNEYS_FAILURE } from './actionTypes';

export const fetchJourneys = () => ({
  type: FETCH_JOURNEYS,
});

export const fetchJourneysSuccess = (journeys) => ({
  type: FETCH_JOURNEYS_SUCCESS,
  payload: journeys,
});

export const fetchJourneysFailure = (error) => ({
  type: FETCH_JOURNEYS_FAILURE,
  payload: error,
});
