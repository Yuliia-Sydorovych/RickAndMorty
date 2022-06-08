import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import routes from '../../configs/routes';
import styles from './Character.module.scss';

const Character = () => {

    const location = useLocation();
    const { person } = location.state;

    return (
        <div className={styles.profile}>
            <Link to={`${routes.pathToCharactersPage}`} className={styles.profile__back}>
                Back
            </Link>
            <div className={styles.profile__title}>
                {person.name}
            </div>
            <div className={styles.profile__content}>
                <div className={styles.profile__img}>
                    <img src={person.image} alt='character' />
                </div>
                <div className={styles.profile__info}>
                    <div>
                        Status: {person.status}
                    </div>
                    <div>
                        Species: {person.species}
                    </div>
                    <div>
                        Gender: {person.gender}
                    </div>
                    <div>
                        Origin: {person.origin.name}
                    </div>
                    <div>
                        Location: {person.location.name}
                    </div>
                    <div>
                        First episode: {person.episode[0].slice(-1)} episode
                    </div>
                    <div>
                        Created: {new Date(person.created).toLocaleDateString()}
                    </div>
                </div>  
            </div>  
        </div>
    );
}

export default Character;
