import types from "../types";

export default function getById(data) {
    return {
        type: types.GET_BY_ID,
        payload: data
    }
}
