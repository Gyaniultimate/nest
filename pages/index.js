import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from 'react'
import Link from "next/link"
import {signIn,signOut, useSession} from "next-auth/client"
import Translate from './translate'

export default function Home() {
  const [session, loading] = useSession();
  return (
    <div className={styles.container}>
      <Head>
        <title>Auth Examples</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {!session && (
          <>
            <h1 style={{color:"red"}}>Not signed in!</h1> <br />
            <button className="rajuoo" onClick={signIn}>Sign In</button>
          </>
        )}
        {session && (
          
           
            
             <Translate>
            <button className="bar" onClick={signOut}>Sign Out</button>
            </Translate>
        )}
      </main>
    </div>
  );
}
