export default function (state, payload) {
    state.selectedDevice = payload;
    return {
        ...state
    }
}
