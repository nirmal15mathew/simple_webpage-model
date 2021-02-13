let store = {}

function getValue(name){
    return store[name]
}

function setValue(name, value){
    return store[name] = value
}

export default {
    getValue,
    setValue
}