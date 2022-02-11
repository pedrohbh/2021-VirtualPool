import Link from 'next/link';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';

import styles from './styles.module.scss';

export function GoogleLogin() {
    const { signInUrl, user } = useContext(AuthContext);

    console.log(user);

    return (
        <Link href={signInUrl}>
        <button className={styles.loginwithgooglebtn} >
            {user ? "Sair" : "Entrar"}
        </button>
        </Link>
    )
}