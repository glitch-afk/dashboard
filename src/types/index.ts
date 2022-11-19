import type { NextPage } from 'next';
import type { ReactElement, ReactNode } from 'react';

export type NextPageWithLayout<P = {}> = NextPage<P> & {
  authorization?: boolean;
  getLayout?: (page: ReactElement) => ReactNode;
};


export type Delimiter = "." | "@" | "-";

export interface Provider {
  id: string;
  delimiter: Delimiter;
  owner: string;
  dataSource: number;
}

export interface User {
  id?: string
  email: string
  apiKey?: string
  emailVerified: boolean
}