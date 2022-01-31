const StatiscticsItem = ({percentage}) => {
    return (
    <>
    {percentage.map(el => 
        <li class="item" key={el.id}>
        <span class="label">{el.label}</span>
        <span class="percentage">{el.percentage}</span>
      </li>
    )}
    </>)
}

export default StatiscticsItem;