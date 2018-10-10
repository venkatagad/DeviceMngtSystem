import types from '../types';
import createDefaultReducer from './DefaultReducer'
import getById from './getById'
import getAll from './getAll'
import setSelected from './setSelected'
import setActive from './setActive'

const initialState = {
    devices: {
        "device A": [
            {
                name: 'Equiment A',
                device: 'device A',
                location: 'test location',
                vendor: 'test vendor',
                modal: '12345',
                serial: '123456',
                description: 'Test description'
            },
            {
                name: 'Equiment B',
                device: 'device B',
                location: 'test location',
                vendor: 'test vendor',
                modal: '12345',
                serial: '123456',
                description: 'Test description'
            }
        ],
        "device B": [
            {
                name: 'Equiment A',
                device: 'device A',
                location: 'test location',
                vendor: 'test vendor',
                modal: '12345',
                serial: '123456',
                description: 'Test description'
            },
            {
                name: 'Equiment B',
                device: 'device B',
                location: 'test location',
                vendor: 'test vendor',
                modal: '12345',
                serial: '123456',
                description: 'Test description'
            }
        ]
    },
    selectedDevice: '',
    activeDevice: {}
};

const actionMap = {
    [types.GET_BY_ID]: getById,
    [types.GET_ALL]: getAll,
    [types.SET_SELECTED]: setSelected,
    [types.SET_ACTIVE]: setActive
};

export default createDefaultReducer(actionMap, initialState)
