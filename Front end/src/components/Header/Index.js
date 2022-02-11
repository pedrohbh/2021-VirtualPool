/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useRouter } from "next/dist/client/router";
import { useContext, useState } from 'react';
import styles from './styles.module.scss';
import { GoogleLogin } from '../GoogleLogin/Index';
import { AuthContext } from '../../contexts/auth';

export default function Header() {
    const { asPath } = useRouter();
    
    return (
        <div className={styles.header}>
            <div className={styles.content}>
                <div>
                    <Link href="/" passHref>
                        <img src="./images/vpool2.png" alt="Logo Virtual Pool" />
                    </Link>
                </div>
                <ul className={styles.navItems}>
                    <li className={asPath === '/ranking' ? styles.activeLink : null}><Link href="/ranking" onClick={() => window.location.reload()}>Ranking</Link></li>
                    <li><div className={styles.divisor} /></li>
                    <li className={(asPath === '/jogar' || asPath === '/pegarOp') ? styles.activeLink : null}><Link href="/jogar" onClick={() => window.location.reload()}>Jogar</Link></li>
                    <li><div className={styles.divisor} /></li>
                    <li className={(asPath === '/perfil') ? styles.activeLink : null}><Link href="/perfil" onClick={() => window.location.reload()}>Perfil</Link></li>
                    
                </ul>
                <div className={styles.gambiarra}>
                    <GoogleLogin/>
                </div>
            </div>
        </div>
    )

}

