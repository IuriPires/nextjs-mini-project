import '../styles/global.css'

import Menu from './components/Menu';

function App({ Component, pageProps }) {
    return (
        <>
            <header>
                <Menu />
            </header>
            <Component {...pageProps} />
        </>
    );
}

export default App;
