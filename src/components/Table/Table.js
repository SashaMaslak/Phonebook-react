import css from './Table.module.css';

const Table = () => {
  return (
    <table className={css.table}>
      <thead>
        <tr className={css.rowHead}>
          <th className={css.rowHeadItem}>TYPE</th>
          <th className={css.rowHeadItem}>AMOUNT</th>
          <th className={css.rowHeadItem}>CURRENCY</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ type, amount, currency, id }, index) => (
          <tr key={id} className={css.row}>
            <td className={css.rowItem}>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
