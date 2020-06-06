import * as React from 'react';
import styled from 'styled-components';
export const Item = styled(
  ({
    className,
    setState,
    length,
    text,
    showUp,
    showDown,
    onMove,
    onDelete,
  }: {
    className?: string;
    setState(v: { text?: string; length?: number }): void;
    length: number;
    text: string;
    onMove(v: number): void;
    onDelete?(): void;
    showUp: boolean;
    showDown: boolean;
  }): React.ReactElement => (
    <div className={className}>
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
      {onDelete && (
        <button type="button" onClick={onDelete}>
          Delete
        </button>
      )}
    </div>
  )
)`
  display: flex;

  & > input:first-child {
    margin-right: 12px;
  }
  & > input:nth-child(2) {
    flex-grow: 1;
  }
  & > button {
    margin-left: 4px;
  }
`;
