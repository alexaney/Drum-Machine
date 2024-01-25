
const changeSound = (inst, k) => {
    return {
        type: "CHANGESOUND",
        instrument: inst,
        key: k
    }
}

const changePower = (value) => {
    return {
        type: "CHANGEPOWER",
        payload: value
    }
}

const changeInstrument = (instrumentName, inst) => {
    return {
        type: "CHANGEINSTRUMENT",
        payload: instrumentName,
        instrument: inst
    }
}

const changeVolume = (value) => {
    return {
        type: "CHANGEVOLUME",
        payload: value
    }
}
export {changeSound, changePower, changeInstrument, changeVolume};