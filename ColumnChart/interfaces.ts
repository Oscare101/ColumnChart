export interface ColumnChartData {
  value: number;
  title?: string;
}

export interface ColumnChartProps {
  data: ColumnChartData[];
  containerStyles?: any;
  columnStyles?: any;
  titleStyles?: any;
}
