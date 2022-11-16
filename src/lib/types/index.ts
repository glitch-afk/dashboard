export type Delimiter = '.' | '@' | '-';

export interface Provider {
  id: string;
  delimiter: Delimiter;
  owner: string;
  dataSource: number;
}
