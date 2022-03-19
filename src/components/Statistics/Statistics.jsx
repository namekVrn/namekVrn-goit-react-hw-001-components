import css from '../Statistics/Statistics.module.css'
import {generatorBg} from "../../utils/generatorBg"
import PropTypes from 'prop-types';
export const Statistics = ({title,data}) => {
    console.log(data)
    return (
        <section className={css.statistics}>
           
           {title&&<h2>{title}</h2>}
            <ul className={css.statisticsStatList}>
                {data.map(elem=>
                (<li key = {elem.id} style={{backgroundColor:generatorBg()}}className={css.statisticsItem}>
                <span className={css.statisticsLabel}>{elem.label}</span>
                <span className={css.statisticsPercentage}>{elem.percentage}%</span>
                </li>))}
            </ul>
        </section>
    )
}
Statistics.prototype = {
    title: PropTypes.string,
    data: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string,
            label: PropTypes.number,
            percentage: PropTypes.number, 
          })
    )
}