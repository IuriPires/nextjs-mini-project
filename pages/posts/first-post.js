import Link from "next/link";
import Image from "next/image";
import Head from 'next/head';


export default function FirstPost() {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <p>
        <Link href="/">Get back to Main page</Link>
      </p>
      <Image src="/images/profile.jpeg" alt="Iuri Pires" height={720} width={560} />
    </>
  )
}
