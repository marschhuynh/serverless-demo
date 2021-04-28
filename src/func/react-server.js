const React = require('react')
const ReactDOMServer = require ('react-dom/server');

const { div, button, input, form, label, fieldset, legend } = require('../util/react')

const ReactApp = ({ source_link, result_link }) => {
    let ResultComponent = null
    if (result_link) {
        ResultComponent = React.createElement('a', {target:"_blank", href: result_link}, result_link)
    } else {
        ResultComponent = div({ children: 'Invalidate link'})
    }
    return div({
        children: [
            div({key: '1', children: 'Get drop box link', style: { fontSize: '2rem' }}),
            form({
                key: '2',
                children: fieldset({
                    style: {
                        width: '30vw'
                    },
                    children: [
                        legend({children: 'Your dropbox link',}),
                        input({ key: 'input', id: 'dropboxLink', name: 'link', value: source_link, style: {
                            display: 'block',
                            width: '100%',
                            marginBottom: '0.5rem'
                        } }),
                        button({ key: 'button', children: 'OK', type: 'submit' })
                    ]
                }),
                style: {
                    'margin': '1rem 0'
                }
            }),
            div({
                key: '3',
                children: ResultComponent
            }),
        ]
    })
}

module.exports.handler = async event => {
    const { link } = event.queryStringParameters || {}

    const app = ReactDOMServer.renderToString(
        React.createElement(ReactApp, { link })
    );
    return {
        statusCode: 200,
        headers: { "Content-Type": "text/html" },
        body: app,
    };
};

module.exports.handler = async event => {
    const { link } = event.queryStringParameters || {}
    let directLink = link && link.replace('www.dropbox.com', 'dl.dropboxusercontent.com')
    if (directLink && !directLink.match(/dl.dropboxusercontent.com/g)) {
        directLink = null;
    }
    const app = ReactDOMServer.renderToString(
        React.createElement(ReactApp, {
            source_link: link,
            result_link: directLink
        })
    );
    return {
        statusCode: 200,
        headers: { "Content-Type": "text/html" },
        body: app,
    };
};
