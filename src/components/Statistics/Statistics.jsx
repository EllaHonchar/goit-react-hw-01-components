import PropTypes from 'prop-types';
import React from 'react';
import s from '../Statistics/Statistics.module.scss';

const randomColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;

export function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}
      <ul className={s.list}>
        {stats.map(({ id, label, percentage }) => (
          <li
            key={id}
            className={s.item}
            style={{
              backgroundColor: randomColor(),
              padding: '15px',
            }}
          >
            <span className={s.label}>{label}</span>
            <span className={s.percentage}> {percentage} %</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
