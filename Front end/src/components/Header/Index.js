/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useRouter } from "next/dist/client/router";

import styles from './styles.module.scss';

export default function Header() {
    const { asPath } = useRouter();


    const isLoggedIn = true;

    function login(){
        if (isLoggedIn) {
            window.location.href = "/perfil";
        } else {
            window.location.href = "/cadastro";
        }    
    }

    
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
                    <li className={asPath === '/perfil' ? styles.activeLink : null}><Link href="/perfil" onClick={() => window.location.reload()}>Perfil</Link></li>
                </ul>
                <div className={styles.gambiarra}>
                    {isLoggedIn ?
                        (
                            <p className={styles.session}>Sair</p>
                        )
                        :
                        (
                            <Link href="/entrar" className={styles.session}>Entrar / Registrar</Link>
                        )
                    }
                </div>
            </div>
        </div>
    )

}

