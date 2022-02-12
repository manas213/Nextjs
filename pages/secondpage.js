import Head from "next/head";
import Image from "next/image";
// import Footer from "../components/footer";
// import Header from "../components/header";

const secondpage = () => {
    return ( <>
            <Head>
                <title>Second Page</title>
            </Head>
            {/* <Header /> */}
            <h1>This is my second page.</h1>
            <Image src="/rin.png" width="500px" height="300px" layout="fixed" alt="image"></Image>
            {/* <Footer /> */}
    </> )
}
 
export default secondpage;