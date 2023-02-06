import PropTypes from 'prop-types';
import React from 'react';

export function Statistics({title, stats}) {
 return (
  <section class="statistics">
  <h2 className="title">{title}</h2>
  <ul className="stat-list">

   {stats.map(stat => (
   
        <li  key = {stat.id}>
        <span className="label">{stat.label}</span>
        <span className="percentage"> {stat.percentage} %</span>
        </li>
    
       )
)} 

{/* 
{stats.map(({id, label, percentage}) => (
  <li  key = {id}>
  <span className="label">{label}</span>
  <span className="percentage"> {percentage} %</span>
  </li>
 )
)} */}

  </ul>
</section>
)}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    )
}
