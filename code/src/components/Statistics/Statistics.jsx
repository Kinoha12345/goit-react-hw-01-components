import StatiscticsItem from './StatisticsItem';

const Statistics = ({percentage}) => {
    return (
        <section class="statistics">
  <h2 class="title">Upload stats</h2>
  <ul class="stat-list">
    <StatiscticsItem
    percentage={percentage}
    />
  </ul>
</section>
     );
}

export default Statistics;