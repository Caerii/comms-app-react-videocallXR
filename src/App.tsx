import TranslationProvider from '@components/TranslationProvider';
import { ConferenceCreateProvider } from '@context/ConferenceCreateContext';
import { CommsProvider, ThemeProvider } from '@dolbyio/comms-uikit-react';
import { Navigator } from '@src/routes/Navigator';
import React, { useMemo } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, useLocation } from 'react-router-dom';

import './App.module.scss';

const App = () => {
  const location = useLocation();

  const urlToken = useMemo(() => {
    return encodeURIComponent(new URLSearchParams(window.location.search).get('token') || '');
  }, [location]);

  const YOUR_TOKEN = urlToken;

  return (
    <TranslationProvider>
      <ConferenceCreateProvider>
        <CommsProvider token={"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJkb2xieS5pbyIsImlhdCI6MTY3MzgyMzU0OCwic3ViIjoiWUpmRzJNejJNdFM1RnkwOVQ3RWVBUT09Iiwic2NvcGUiOiJzZXNzaW9uIiwib2lkIjoiNjExMmJlMTktYzNhZC00OTlmLWE0ODMtOGRiNmEwNDA3MWNlIiwiYmlkIjoiOGEzNjhjMWY4NTk0Njc1MTAxODViN2E2ZGY5ZTE0MmMiLCJhaWQiOiIyMTcyYTM2NS0yZWQ0LTRjOTUtYTcwNy0yNGYzNzI1ZGFjMjYiLCJhdXRob3JpdGllcyI6WyJST0xFX0NVU1RPTUVSIl0sImV4cCI6MTY3Mzg2Njc0OH0.JC4g1qDVDqGkex5CzLOrqxc1gAq4QJyK_723muoeXjEMM37Qi-ypC2BVrkAjXDw8rQ56SmDmiJPdQhno6EuiiQ"} packageUrlPrefix={`${window.location.origin}/assets/wasm`}>
          <ThemeProvider
            customThemes={{
              'My Theme': { colors: { white: 'yellow', primary: { 400: 'red' }, secondary: { 400: 'blue' } } },
            }}
          >
            <Navigator />
          </ThemeProvider>
        </CommsProvider>
      </ConferenceCreateProvider>
    </TranslationProvider>
  );
};

const container = document.getElementById('root');
// no-non-null-assertion comes from official react docs
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
