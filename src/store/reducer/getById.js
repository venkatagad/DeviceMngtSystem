export default function (state, payload) {
    let data = [];
    data.push(payload);
    state.cars = state.cars.concat(data);
    return {
        ...state
    }
}
