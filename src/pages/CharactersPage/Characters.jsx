import React, { useEffect, useState } from 'react';
import axios from '../../hooks/useAxios';
import routes from '../../configs/routes';
import { Link } from 'react-router-dom';
import Cross from '../../assets/images/cross.png';
import Logo from '../../assets/images/logo.png';
import Pagination from './Pagination/Pagination';
import styles from './Characters.module.scss';

const getCurrentPage = () => {
    
    let currentPage = localStorage.getItem('currentPage');

    if (currentPage) {
        return JSON.parse(localStorage.getItem('currentPage'));
    } else {
        return;
    }
};

const Characters = () => {

    const [filtred, setFiltred] = useState([]);
    const [choose, setChoose] = useState('');
    const [parameter, setParameter] = useState();
    const [page, setPage] = useState(getCurrentPage());
    const [totalPage, setTotalPage] = useState(0);

    const handleClick = num => {
        setPage(num);  
    }

    useEffect(() => {
        axios
            .get(`?page=${page}&${parameter}=${choose}`)
            .then(response => {
                setFiltred(response.data.results);
                setTotalPage(response.data.info.pages);
                localStorage.setItem('currentPage', page);
            })
            .catch(err => {
                console.log(err);
            });
    }, [parameter, choose, page]);

    const filterElements = (el) => {
        setChoose(el);
        setParameter('name');
    }

    const filterHandle = (e) => {
        let value = e.target.value;
        setPage(1);
        setFiltred(filterElements(value, e.target.name));
    }

    const resetFilters = () => {
        if(parameter || page !== 1) {
            setParameter('');
            setFiltred([]);
            setPage(1);
            setChoose('');
        }
    }

    return (
        <div className={styles.characters}>
            <div className={styles.characters__logo}>
                <img src={Logo} alt='logo'/>
            </div>
            <div className={styles.characters__list}>
                <div className={styles.characters__content}>
                    <div className={styles.characters__nameFilter}>
                        Search
                    </div>
                    <input
                        type="text"
                        name='search'
                        placeholder="type name ..."
                        onChange={filterHandle}
                        value={choose}
                    />
                    <div className={styles.characters__nameFilter}>
                        Reset
                    </div>
                    <img src={Cross} onClick={resetFilters} alt='reset' className={styles.characters__cross}/>
                </div>
                <div className={styles.characters__character}>
                    {filtred &&
                        filtred.map(c => 
                            <div key={c.id}>
                                <Link 
                                    style={{ textDecoration: 'none' }}
                                    to={{ pathname: `${routes.pathToCharacterPage}` }}
                                    state={{ person: c }}
                                >
                                    <div className={styles.characters__card}>
                                        <div className={styles.characters__img}>
                                            <img src={c.image} alt='avatar' />
                                        </div>
                                        <div className={styles.characters__nameCharacter}>
                                            {c.name}
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    }
                </div>
                <Pagination totalPage={totalPage} handleClick={handleClick}/>
            </div>
        </div>
    ); 
}

export default Characters;
