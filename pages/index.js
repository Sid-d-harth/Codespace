// import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import styles from '../styles/Home.module.css'
import Navigation from "./Component/Navigation";

export default function Home() {
    const router = useRouter();
    useEffect(() => {
      router.push("/Home");
    }, [router]);
  return (
    
    <div className={styles.container}>
            <Navigation/>
    </div>
    
  )
}

