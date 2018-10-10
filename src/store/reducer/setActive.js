export default function (state, payload) {
    state.activeDevice = payload;
    return {
        ...state
    }
}
