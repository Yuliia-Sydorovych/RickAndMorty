import React from 'react';
import styles from './Pagination.module.scss';

const Pagination = ({totalPage, handleClick}) => {
    const pages = [...Array(totalPage).keys()].map(num => num+1);

    return (
        <div className={styles.pagination}>
            {pages.map(num => (
                <div key={num}>
                    <button 
                        key={num}
                        onClick={() => handleClick(num)}
                        className={styles.pagination__button}>
                            {num}
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Pagination;
