import React from 'react';

interface Props {
  url: string;
}

export function Url({ url }: Props) {
  return (
    <a href={url} rel="noopener noreferrer" target="_blank">
      {url}
    </a>
  );
}
