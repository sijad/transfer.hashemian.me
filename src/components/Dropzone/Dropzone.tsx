import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import './Dropzone.css';
import { ID } from '../../ID';
import { DroppedFile } from './DroppedFile';
import { File } from './File';
import { Url } from './Url';

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
  const { onClick, ...rootProps } = getRootProps({ className: 'dropzone' });

  return (
    <div {...rootProps}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <span className="note">{'فایل‌ها را اینجا رها کنید...'}</span>
      ) : (
        <span className="note">
          {'فایل‌ها را اینجا رها نمایید، یا '}
          <button className="browse-link" onClick={onClick} type="button">
            {'مرور فایل‌ها'}
          </button>
          {' را انتخاب کنید'}
        </span>
      )}
      {files.map(f => (
        <File file={f} key={`${f.id}`} />
      ))}
      <Url url="http://google.com" />
    </div>
  );
}
