import React from 'react';

interface Props {
  progress: number;
}

export function ProgressBar({ progress }: Props) {
  const percent = `${progress}%`;
  return (
    <div className="progress-bar">
      <div className="progress-bar_progress" style={{ width: percent }}>
        {'###################################################################'}
      </div>
      <div className="progress-bar_percent">{percent}</div>
    </div>
  );
}
