import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

const myElement = <h1>I Love JSX!</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myElement);
root.render(<App/>);
