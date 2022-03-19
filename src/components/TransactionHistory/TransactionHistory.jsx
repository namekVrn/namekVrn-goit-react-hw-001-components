import css from '../TransactionHistory/TransactionHistory.module.css'
export const Transaction = ({items}) => {
    return (<table className={css.table}>
    <thead>
      <tr>
        <th className={css.th}>Type</th>
        <th className={css.th}>Amount</th>
        <th className={css.th}>Currency</th>
      </tr>
    </thead>
  
    <tbody>
        {items.map(elem=>
            <tr className={css.tr} key={elem.id}>
                <td className={css.td}>{elem.type}</td>
                <td className={css.td}>{elem.amount}</td>
                <td className={css.td}>{elem.currency}</td>
            </tr>
            )}
    
    </tbody>
  </table>)
}
