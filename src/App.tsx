import React from 'react'

import GlobalStyles from './styles/GlobalStyles'

import Layout from './components/Layout/'

const App: React.FC = () => {
    return(
        <div className="App">
            <GlobalStyles />
            <Layout />
        </div>
    );
}

export default App