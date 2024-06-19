import type { AppProps } from "next/app";
import { useEffect } from "react";
// import { appWithTranslation } from 'next-i18next'
// import nextI18NextConfig from '../next-i18next.config.js'

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    function setVh() {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    }
    // 初始设置
    setVh();
    // 监听窗口大小变化
    window.addEventListener("resize", setVh);
    // 清除事件监听器
    return () => window.removeEventListener("resize", setVh);
  }, []);

  return <Component {...pageProps} />;
};

// https://github.com/i18next/next-i18next#unserializable-configs
export default MyApp; /*, nextI18NextConfig */
