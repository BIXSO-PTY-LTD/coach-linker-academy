import type { ReactNode } from 'react';

export * from '../layouts/main/nav/types';
export * from './auth';
export * from './custom-popover';
export * from './language';
export * from './loading';
export * from './nav-section';

export type T_Any =
    | {
          [key: string]: Object | string | number | boolean | null | undefined;
      }
    | Object
    | string
    | number
    | boolean
    | null
    | undefined;

export interface I_Children {
    children: ReactNode;
}
