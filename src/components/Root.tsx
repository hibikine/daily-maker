import * as React from 'react';
import { Item } from './Item';
import { Schedule } from './Schedule';
import styled, { createGlobalStyle } from 'styled-components';

function genSchedule(k: number) {
  return { key: k, length: 0, text: '' };
}
function swap<T>(arr: T[], from: number, to: number): T[] {
  const newArr = [...arr];
  newArr[to] = { ...arr[from] };
  newArr[from] = { ...arr[to] };
  return newArr;
}
export const Root = styled(
  ({ className }: { className?: string }): React.ReactElement => {
    const [schedules, setSchedules] = React.useState([genSchedule(0)]);
    console.log(schedules);
    return (
      <div className={className}>
        <GlobalStyle />
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
              onDelete={
                schedules.length === 1
                  ? undefined
                  : () =>
                      setSchedules((s) => {
                        const new_s = [...s];
                        new_s.splice(i, 1);
                        return new_s;
                      })
              }
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
)`
  display: flex;
  max-width: 800px;
  flex-direction: column;
  margin: 24px auto;

  & > div:first-child {
    margin-bottom: 12px;
  }
  & > div:first-child > div {
    margin-bottom: 4px;
  }
  & > button {
    height: 40px;
    font-size: 1.5rem;
    margin-bottom: 12px;
  }
`;
const GlobalStyle = createGlobalStyle`
html,body {
  margin: 0;
  padding: 0;
}
`;
