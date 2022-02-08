/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useRouter } from "next/dist/client/router";
import { useState } from 'react';

import styles from './styles.module.scss';

export default function Header() {
    const { asPath } = useRouter();

    const [selected, setSelected] = useState(0);
    
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
                    {(selected === 1) && <li className={(asPath === '/perfil' || asPath === '/entrar') ? styles.activeLink : null}><Link href="/perfil" onClick={() => window.location.reload()}>Perfil</Link></li>}
                    {(selected === 0) && <li className={(asPath === '/perfil' || asPath === '/entrar') ? styles.activeLink : null}><Link href="/entrar" onClick={() => window.location.reload()}>Perfil</Link></li>}
                </ul>
                <div className={styles.gambiarra}>
                    {(selected === 1) && <Link href="/" className={styles.session} onClick={()=>setSelected(0)} >Sair</Link>}
                    {(selected === 0) && <Link href="/entrar" className={styles.session}>Entrar / Registrar</Link>}
                </div>
            </div>
        </div>
    )

}

