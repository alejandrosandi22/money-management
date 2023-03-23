import LineChart from './LineChart';
import PieChart from './PieChart';

export default function ChartSection() {
  return (
    <div className='grid-chart gap-2.5'>
      <LineChart />
      <PieChart />
    </div>
  );
}
