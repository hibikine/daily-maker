import * as React from 'react';
export function Item({
  setState,
  length,
  text,
  showUp,
  showDown,
  onMove,
}: {
  setState(v: { text?: string; length?: number }): void;
  length: number;
  text: string;
  onMove(v: number): void;
  showUp: boolean;
  showDown: boolean;
}): React.ReactElement {
  return (
    <div>
      <input
        type="number"
        value={length}
        onChange={({ target: { value } }) =>
          setState({ length: parseInt(value, 10) })
        }
      />
      <input
        value={text}
        onChange={({ target: { value } }) => setState({ text: value })}
        type="text"
      />
      {showUp && (
        <button type="button" onClick={() => onMove(-1)}>
          Up
        </button>
      )}
      {showDown && (
        <button type="button" onClick={() => onMove(1)}>
          Down
        </button>
      )}
    </div>
  );
}
