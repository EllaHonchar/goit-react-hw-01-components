import PropTypes from 'prop-types';
import s from '../TransactionHistory/Transaction.module.scss';

export function TransactionHistory({ items }) {
  return (
    <table className={s.transaction}>
      <thead>
        <tr className={s.header}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id} className={s.child}>
              <td className={s.string}>{type}</td>
              <td className={s.string}>{amount}</td>
              <td className={s.string}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string.isRequired,
    })
  ),
};
