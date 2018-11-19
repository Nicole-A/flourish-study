import React                from 'react';
import ReactDOM             from 'react-dom';
import App                  from './components/App';
import * as serviceWorker   from './serviceWorker';

import { 
    BrowserRouter
}                           from 'react-router-dom';

import { ApolloProvider }   from 'react-apollo'
import { ApolloClient }     from 'apollo-client'
import { createHttpLink }   from 'apollo-link-http'
import { InMemoryCache }    from 'apollo-cache-inmemory'

import config               from './config/config';

import                           './assets/fonts/gotham/htf/gotham-htf.css'
import                           './assets/fonts/gotham/condensed/gotham-condensed.css'
import                           './themes/bootstrap-theme.scss'

// TODO : Add .yaml configuration
const httpLink = createHttpLink({
    uri: "your-api-endpoint"
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
});

ReactDOM.render(
    <BrowserRouter>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();