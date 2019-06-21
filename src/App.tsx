import React from 'react';
import './App.css';
import { Dropzone } from './components';

export function App() {
  return (
    <div className="d-flex flex-column h-100">
      <main className="flex-shrink-0" role="main">
        <div className="container">
          <h1 className="mt-3">{'آپلود فایل'}</h1>
          <Dropzone />
        </div>
      </main>
      <footer className="footer mt-auto py-3">
        <div className="container">
          <span>{'قدرت گرفته از '}</span>
          <a href="https://transfer.sh/">{'transfer.sh'}</a>
        </div>
      </footer>
    </div>
  );
}
