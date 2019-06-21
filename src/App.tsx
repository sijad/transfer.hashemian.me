import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import './App.css';

export function App() {
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="d-flex flex-column h-100">
      <main className="flex-shrink-0" role="main">
        <div className="container">
          <h1 className="mt-3">{'آپلود فایل'}</h1>
          <div {...getRootProps({ className: 'dropzone' })}>
            <input {...getInputProps()} />
            {isDragActive ? (
              <span>{'فایل‌ها را اینجا رها کنید...'}</span>
            ) : (
              <span>
                {'فایل‌ها را اینجا رها کنید یا برای انتخاب اینجا کلیک کنید'}
              </span>
            )}
          </div>
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
