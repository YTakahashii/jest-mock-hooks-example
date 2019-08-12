# jest-mock-hooks-example

## TD;DR

```App.test.tsx
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from './App';
import { useRandom } from './useRandom';
jest.mock('./useRandom');

const useRandomMock = useRandom as jest.MockedFunction<typeof useRandom>;

afterEach(cleanup);

it('value===7のとき "Lucky 7" と表示される', () => {
  useRandomMock.mockReturnValue([7, () => {}]);
  const { getByTestId } = render(<App />);

  const value = getByTestId('value');
  expect(value.textContent).toEqual('Lucky 7');
});
```
