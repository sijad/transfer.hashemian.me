import React from 'react';

interface Props {
  url: string;
}

export function Url({ url }: Props) {
  return (
    <a href={url} target="_blank">
      {url}
    </a>
  );
}
