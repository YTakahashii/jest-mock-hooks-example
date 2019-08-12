import { useState } from 'react';

// min以上max未満の乱数を使えるhooks
export function useRandom(initialValue?: number): [number, (min: number, max: number) => void] {
  const [value, setValue] = useState<number>(initialValue ? initialValue : 0);

  return [
    value,
    (min: number, max: number) => setValue(Math.floor(Math.random() * (max - min)) + min),
  ];
}
