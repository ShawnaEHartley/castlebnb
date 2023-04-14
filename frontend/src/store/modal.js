  export const closeModalHandler = () => {
    return {type: "modalOff"}
  };

const ModalReducer = (state = {on:false, component:null}, action) => {
  //any component can ask for the current modal state
    switch (action.type) {
      case "modalOn":
        return {on: true, component: action.component, reviewId: action.reviewId, reservationId: action.reservationId};
      case "modalOff":
        return {on: false, component: null};
      default:
        return state;
    }

};

export default ModalReducer;