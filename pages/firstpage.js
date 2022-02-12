import Head from "next/head";
import style from "../styles/Firstpage.module.css";

const FirstPage = () => {
    return (
        <>
            <Head>
                <title>First Next App</title>
            </Head>
            <h1 className={style.h1}>This is my first page</h1>
        </>
    );
};
 
export default FirstPage;