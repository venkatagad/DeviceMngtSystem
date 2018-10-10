import types from "../types";

export default function setSelected(data) {
    return {
        type: types.SET_SELECTED,
        payload: data
    }
}
