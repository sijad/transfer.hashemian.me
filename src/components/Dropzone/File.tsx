import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DroppedFile } from './DroppedFile';

interface Props {
  file: DroppedFile;
}

export function File({ file }: Props) {
  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState<string | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const cancelSource = axios.CancelToken.source();

    axios
      .request({
        method: 'PUT',
        url: file.name,
        data: file,
        cancelToken: cancelSource.token,
        onUploadProgress: (p: ProgressEvent) => {
          setProgress(p.loaded / p.total);
        },
        headers: {
          X_FILENAME: file.name,
        },
      })
      .then(resp => setUrl(resp.data))
      .catch(error => {
        /* eslint-disable-next-line */
        console.log(error);
        setFailed(true);
      });

    return () => cancelSource.cancel();
  }, [file]);

  if (failed) {
    return <div className="failed-upload">{'خطایی در آپلود رخ داد.'}</div>;
  }

  return (
    <p>
      {file.name} {progress}
      {url}
    </p>
  );
}
