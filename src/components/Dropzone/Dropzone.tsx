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

  const { getRootProps, getInputProps } = useDropzone({ onDrop });
  const { onClick, ...rootProps } = getRootProps({ className: 'dropzone' });

  return (
    <div>
      <div className="dropzone-top" />
      <div {...rootProps}>
        <input {...getInputProps()} />
        <span className="comment mb-2">
          {'# فایل‌ها را اینجا رها نمایید، یا '}
          <button className="browse-link" onClick={onClick} type="button">
            {'مرور فایل‌ها'}
          </button>
          {' را انتخاب کنید'}
        </span>
        {files.map(f => (
          <File file={f} key={`${f.id}`} />
        ))}
      </div>
    </div>
  );
}
