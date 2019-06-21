import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import './Dropzone.css';

export function Dropzone() {
  // const [files, setFiles] = useState<File[]>([]);
  const onDrop = useCallback((acceptedFiles: File[]) => {
    alert(acceptedFiles[0].name);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
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
  );
}
