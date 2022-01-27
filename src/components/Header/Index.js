/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useRouter } from "next/dist/client/router";

import styles from './styles.module.scss';

export default function Header() {
    const {asPath} = useRouter();
    console.log(asPath);

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
                    <li><div className={styles.divisor}/></li>
                    <li className={asPath === '/jogar' ? styles.activeLink : null}><Link href="/jogar" onClick={() => window.location.reload()}>Jogar</Link></li>
                    <li><div className={styles.divisor}/></li>
                    <li className={asPath === '/perfil' ? styles.activeLink : null}><Link href="/perfil" onClick={() => window.location.reload()}>Perfil</Link></li>
                </ul>
                <div className={styles.gambiarra}/>
            </div>
        </div>
    )

}

