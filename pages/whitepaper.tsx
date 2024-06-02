import Link from 'next/link'
import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  Metadata,
} from 'next'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import  Header  from '../components/Header'
import { Footer } from '../components/Footer'
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });

type Props = {
  // Add custom props here
}

const WhitePaper = (
  _props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {

  return (
    <>
      <Header />
      <main className={'main-white '+montserrat.className}>
       
        <div className='box_white white_1'>
          <img src="images/icon_white.png" alt="" />
          <h3>中文：</h3>
          <h2>RGB++ Protocol 白皮书</h2>
          <Link className='link_white' href="https://github.com/ckb-cell/RGBPlusPlus-design/blob/main/docs/light-paper-cn.md "></Link>
        </div>
        <div className='box_white white_2'>
        <img src="images/icon_white.png" alt="" />
          <h3>English：</h3>
          <h2>RGB++ Protocol Light Paper</h2>
          <Link className='link_white' href="https://github.com/ckb-cell/RGBPlusPlus-design/blob/main/docs/light-paper-en.md"></Link>
        </div>
      </main>
      <Footer />
    </>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', [
      'second-page',
      'footer',
    ])),
  },
})

export default WhitePaper
