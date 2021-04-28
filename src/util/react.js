const React = require('react')

function div(props) {
    const { children, ...restProp } = props || {}
    return React.createElement('div', restProp, children)
}

function button(props) {
    const { children, ...restProp } = props || {}
    return React.createElement('button', restProp, children)
}

function input(props) {
    const { children, ...restProp } = props || {}
    return React.createElement('input', restProp, children)
}

function form(props) {
    const { children, ...restProp } = props || {}
    return React.createElement('form', restProp, children)
}

function label(props) {
    const { children, ...restProp } = props || {}
    return React.createElement('label', restProp, children)
}

function fieldset(props) {
    const { children, ...restProp } = props || {}
    return React.createElement('fieldset', restProp, children)
}
function legend(props) {
    const { children, ...restProp } = props || {}
    return React.createElement('legend', restProp, children)
}

module.exports = {
    div,
    button,
    input,
    form,
    label,
    fieldset,
    legend
}