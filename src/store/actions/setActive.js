import types from "../types";

export default function setActive(data) {
    return {
        type: types.SET_ACTIVE,
        payload: data
    }
}
