import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DroppedFile } from './DroppedFile';
import { Url } from './Url';
import { ProgressBar } from './ProgressBar';

interface Props {
  file: DroppedFile;
}

export function File({ file }: Props) {
  const [finished, setFinished] = useState(false);
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
          'content-type': file.type,
        },
      })
      .then(resp => {
        setFinished(true);
        setUrl(resp.data);
      })
      .catch(error => {
        /* eslint-disable-next-line */
        console.log(error);
        setFailed(true);
        setFinished(true);
      });

    return () => cancelSource.cancel();
  }, [file]);

  if (failed) {
    return (
      <div className="failed-upload mb-1">{`خطایی در آپلود ${file.name} رخ داد.`}</div>
    );
  }

  return (
    <div className="mb-1">
      {finished ? (
        <Url url={url!} />
      ) : (
        <>
          <span>{`آپلود ${file.name}…`}</span>
          <ProgressBar progress={progress * 100} />
        </>
      )}
    </div>
  );
}
