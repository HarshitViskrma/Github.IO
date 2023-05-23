import { Fragment } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

import hobbies from '../data/hobbies.data.json';

import HobbyCard from '../components/pages/hobbies/hobby-card/hobby-card.component';

import styles from '../styles/hobbies.module.scss';

const Hobbies: NextPage = () =>
{

    return (
        <Fragment>
            <Head>
                <meta name='Classification' content='Portfolio Hobbies'/>
                <meta name='subject' content='Portfolio Hobbies'/>
                <meta name='description' content='Aenosh Rajora Hobbies'/>
                <meta name='keywords' content='Aenosh Rajora, AR, Aenosh, Rajora, Hobbies'/>
                <meta name='author' content='Aenosh Rajora'/>

                <meta property='og:type' content='website'/>
                <meta property='og:url' content='https://aenoshrajora.netlify.app/hobbies'/>
                <meta property='og:title' content='Aenosh Rajora'/>
                <meta property='og:description' content='Aenosh Rajora Hobbies'/>
                <meta property='og:image' content='https://aenoshrajora.netlify.app/favicon.png'/>

                <meta property='twitter:card' content='summary'/>
                <meta property='twitter:url' content='https://aenoshrajora.netlify.app/hobbies'/>
                <meta property='twitter:title' content='Aenosh Rajora'/>
                <meta property='twitter:description' content='Aenosh Rajora Hobbies'/>

                <title>Aenosh Rajora &mdash; Hobbies</title>
            </Head>

            <section className={styles.hobbies}>
                <h2 className={styles.hobbiesHeading}>Hobbies</h2>

                <div className={styles.hobbiesBoxes}>
                    {
                        hobbies.map(hobby =>
                        {
                            return (
                                <HobbyCard
                                    key={hobby.id}
                                    src={hobby.src}
                                    title={hobby.title}
                                    description={hobby.description}
                                    width={hobby.width}
                                    height={hobby.height}
                                />
                            );
                        })
                    }
                </div>
            </section>
        </Fragment>
    );
};

export default Hobbies;
