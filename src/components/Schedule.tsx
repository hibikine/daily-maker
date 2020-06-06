import * as React from 'react';
export function Schedule({
  schedules,
}: {
  schedules: { text: string; length: number }[];
}): React.ReactElement {
  return (
    <textarea
      readOnly
      value={genSchedule(schedules)}
      rows={10}
      cols={100}
    ></textarea>
  );
}
function genSchedule(schedules: { text: string; length: number }[]): string {
  const time = new Date();
  return `${getTodayDateAsStr(time)}
${schedules
  .map(({ text, length }) => {
    const scheduleText = `${zeroFill(`${time.getHours()}`)}:${zeroFill(
      `${time.getMinutes()}`
    )} - ${text}`;
    time.setMinutes(time.getMinutes() + length);
    return scheduleText;
  })
  .join('\n')}`;
}
function zeroFill(s: string): string {
  return s.padStart(2, '0');
}
function getTodayDateAsStr(time: Date): string {
  return `${time.getFullYear()}/${zeroFill(`${time.getMonth()}`)}/${zeroFill(
    `${time.getDate()}`
  )}(${dayToStr(time.getDay())})`;
}
function dayToStr(day: number): string {
  const dayTable = {
    0: '日',
    1: '月',
    2: '火',
    3: '水',
    4: '木',
    5: '金',
    6: '土',
  };
  return dayTable[day];
}
