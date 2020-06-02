import * as React from 'react';
import { Item } from './Item';
import { Schedule } from './Schedule';

function genSchedule(k: number) {
  return { key: k, length: 0, text: '' };
}
function swap<T>(arr: T[], from: number, to: number): T[] {
  const newArr = [...arr];
  newArr[to] = { ...arr[from] };
  newArr[from] = { ...arr[to] };
  return newArr;
}
export function Root(): React.ReactElement {
  const [schedules, setSchedules] = React.useState([genSchedule(0)]);
  console.log(schedules);
  return (
    <div>
      <div>
        {schedules.map((v, i) => (
          <Item
            {...v}
            setState={(v: { length?: number; text?: string }) =>
              setSchedules((s) => {
                const new_s = [...s];
                new_s.splice(i, 1, { ...s[i], ...v });
                return new_s;
              })
            }
            showUp={i !== 0}
            showDown={i !== schedules.length - 1}
            onMove={(v: number) => setSchedules((s) => swap(s, i, i + v))}
          />
        ))}
      </div>
      <button
        type="button"
        onClick={() =>
          setSchedules((s) => [...s, genSchedule(s[s.length - 1].key + 1)])
        }
      >
        Add
      </button>
      <Schedule schedules={schedules} />
    </div>
  );
}
