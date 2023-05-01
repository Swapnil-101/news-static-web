import getConfig from 'next/config';

import Layout from '@/components/Layout';
import Header from '../components/Home/Header';
import MainSection from '../components/Home/MainSection';

const { publicRuntimeConfig } = getConfig();
const { name } = publicRuntimeConfig.site;

const Home = () => {
  return (
    <Layout>
      <Header/>
      <MainSection/>
    </Layout>
  );
};

export default Home;
