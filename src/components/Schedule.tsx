import * as React from 'react';
export function Schedule({
  schedules,
}: {
  schedules: { text: string; length: number }[];
}): React.ReactElement {
  return <textarea readOnly value={genSchedule(schedules)}></textarea>;
}
function genSchedule(schedules: { text: string; length: number }[]): string {
  const time = new Date();
  return schedules
    .map(({ text, length }) => {
      const scheduleText = `${time.getHours()}:${time.getMinutes()} - ${text}`;
      time.setMinutes(time.getMinutes() + length);
      return scheduleText;
    })
    .join('\n');
}
