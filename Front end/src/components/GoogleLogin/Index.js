import Link from 'next/link';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';

import styles from './styles.module.scss';

export function GoogleLogin() {
    const { signInUrl, user, signOut } = useContext(AuthContext);

    return (
        <Link href={user ? '' : signInUrl}>
        <button className={styles.loginwithgooglebtn} onClick={user ? signOut : null} >
            {user ? "Sair" : "Entrar"}
        </button>
        </Link>
    )
}