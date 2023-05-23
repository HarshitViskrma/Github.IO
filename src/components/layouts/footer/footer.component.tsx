import { BsGithub } from 'react-icons/bs';

import styles from './footer.module.scss';

const Footer = () =>
{
    return (
        <footer className={styles.footer}>
            <div className={styles.footerBox}>
                <span>© 2022 - { new Date().getFullYear() } Aenosh Rajora</span>
                <a
                    href='https://github.com/aenoshrajora/aenoshrajora.github.io'
                    target='_blank'
                    rel='noreferrer'
                >
                    <BsGithub />
                    Source Code
                </a>
            </div>
        </footer>
    );
};

export default Footer;
