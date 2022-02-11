/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useRouter } from "next/dist/client/router";
import { useState } from 'react';
import styles from './styles.module.scss';
import { GoogleLogin } from '../GoogleLogin/Index';

export default function Header() {
    const { asPath } = useRouter();

    const [logged, setSelected] = useState(0);
    
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
                    
                    {(logged === 1) && <li className={(asPath.includes('/perfil') || asPath.includes('/entrar')) ? styles.activeLink : null}><Link href="/perfil" onClick={() => window.location.reload()}>Perfil</Link></li>}
                    {(logged === 0) && <li className={(asPath.includes('/perfil') || asPath.includes('/entrar')) ? styles.activeLink : null}><Link href="/entrar" onClick={() => window.location.reload()}>Perfil</Link></li>}
                </ul>
                <div className={styles.gambiarra}>
                    {(logged === 0) && <button className={styles.logoutbtn} onClick={() => {setSelected(1); window.location= '/'}}>Sair</button>}
                    {(logged === 1) && <GoogleLogin/>}
                </div>
            </div>
        </div>
    )

}

