import { createRoot } from "react-dom/client";
import { ThemeProvider } from '../src/components/ThemeContext';

import './index.scss';
import App from "./components/App";

const domElement = document.getElementById('app');
const root = createRoot(domElement);
root.render(
    <ThemeProvider>
        <App />
    </ThemeProvider>
);