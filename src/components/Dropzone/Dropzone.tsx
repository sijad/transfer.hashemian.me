import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import './Dropzone.css';
import { ID } from '../../ID';
import { DroppedFile } from './DroppedFile';
import { File } from './File';

export function Dropzone() {
  const [files, setFiles] = useState<DroppedFile[]>([]);
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const newFiles = acceptedFiles.map(f => {
      (f as DroppedFile).id = ID();
      return f;
    }) as DroppedFile[];

    setFiles(files => [...files, ...newFiles]);
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
      {files.map(f => (
        <File file={f} key={`${f.id}`} />
      ))}
    </div>
  );
}
