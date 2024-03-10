import React from 'react';
import styles from './SideAspecta.module.css';
import AspectaIconWhite from '../../assets/AspectaIconWhite.svg'
import { Link } from 'react-router-dom';

export const SideAspecta = () => {
  return (
  <div className={styles.container + ' col-4'}>
    <img src={AspectaIconWhite} alt="" />
    <p>A plataforma para você aprender com os melhores tutores, para um melhor aprendizado.</p>
    <Link to="/register/">Criar conta</Link>
    </div>
    );
};
