import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';
import './Index.css';
import './utils/i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient();

root.render(
    <HelmetProvider>
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>
    </HelmetProvider>
);
