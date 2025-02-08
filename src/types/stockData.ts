
export interface StockData {
  isin: string;
  date: Date;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  ma7?: number;    // Moving average 7 days
  ma20?: number;   // Moving average 20 days
  ma50?: number;   // Moving average 50 days
  // Add more technical indicators as needed
}

