import { createRoot } from 'react-dom/client';

const App = () => {
    return <div><h1>React App</h1></div>;
};

const container = document.getElementById('app');
const root = createRoot(container);

root.render(<App />);