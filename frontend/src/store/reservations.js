import { closeModalHandler } from './modal';
import { LISTING_META } from './staticData';

export const RECEIVE_RESERVATIONS = 'reservations/RECEIVE_RESERVATIONS';
export const RECEIVE_RESERVATION  = 'reservations/RECEIVE_RESERVATION';
export const REMOVE_RESERVATION   = 'reservations/REMOVE_RESERVATION';

const receiveReservations = reservations => ({ type: RECEIVE_RESERVATIONS, payload: reservations });
const receiveReservation  = reservation  => ({ type: RECEIVE_RESERVATION,  payload: reservation  });
const removeReservation   = id           => ({ type: REMOVE_RESERVATION,   payload: id           });

export const getReservations = state =>
  state.reservations ? Object.values(state.reservations) : [];

export const getReservation = reservationId => state =>
  state.reservations?.currentReservations?.[reservationId] ?? null;

const LS_KEY = 'castlebnb_reservations';
const loadStored = () => JSON.parse(localStorage.getItem(LS_KEY) || '[]');
const saveStored = (arr) => localStorage.setItem(LS_KEY, JSON.stringify(arr));

let _nextId = 1000;

const buildReservationWithMeta = (r) => {
  const meta = LISTING_META[r.listing_id] || {};
  return { ...r, listing: meta, reserver: { name: r.reserver_name || 'You' } };
};

export const fetchReservations = () => async dispatch => {
  const all = loadStored();
  const today = new Date().toISOString().slice(0, 10);
  const current = {};
  const past    = {};
  all.forEach(r => {
    const rich = buildReservationWithMeta(r);
    if (r.end_date >= today) current[r.id] = rich;
    else                       past[r.id]    = rich;
  });
  dispatch(receiveReservations({ currentReservations: current, pastReservations: past }));
};

export const fetchReservation = (reservationId) => async dispatch => {
  const all = loadStored();
  const r = all.find(r => r.id === Number(reservationId));
  if (!r) return;
  dispatch(receiveReservation(buildReservationWithMeta(r)));
};

export const createReservation = (history, reservation) => async _dispatch => {
  const all  = loadStored();
  const newR = { ...reservation, id: _nextId++, reserver_name: 'Demo User' };
  saveStored([...all, newR]);
  history.push(`/reservations/${newR.id}/confirmation`);
};

export const updateReservation = (reservation) => async dispatch => {
  const all     = loadStored();
  const updated = all.map(r => r.id === reservation.id ? { ...r, ...reservation } : r);
  saveStored(updated);
  dispatch(fetchReservations());
  dispatch(closeModalHandler());
};

export const deleteReservation = (reservationId) => async dispatch => {
  const all = loadStored();
  saveStored(all.filter(r => r.id !== Number(reservationId)));
  dispatch(removeReservation(reservationId));
  dispatch(fetchReservations());
  dispatch(closeModalHandler());
};

const reservationsReducer = (state = { currentReservations: {}, pastReservations: {} }, action) => {
  switch (action.type) {
    case RECEIVE_RESERVATIONS:
      return { ...state, ...action.payload };
    case RECEIVE_RESERVATION: {
      const cur = { ...state.currentReservations, [action.payload.id]: action.payload };
      return { ...state, currentReservations: cur };
    }
    case REMOVE_RESERVATION: {
      const cur  = { ...state.currentReservations };
      const past = { ...state.pastReservations };
      delete cur[action.payload];
      delete past[action.payload];
      return { ...state, currentReservations: cur, pastReservations: past };
    }
    default:
      return state;
  }
};

export default reservationsReducer;
