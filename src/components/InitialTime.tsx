import * as React from 'react';
export const InitialTime = ({
  time,
  setTime,
}: {
  time: string;
  setTime(t: string): void;
}) => (
  <div>
    <input
      type="time"
      value={time}
      onChange={({ target: { value } }) => setTime(value)}
    />
  </div>
);
