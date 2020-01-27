import React from 'react';
import Layout from '../../components/Layout';
import Contact from '../../components/Contact';
import withAPILocale from '../../hocs/withAPILocale'

const contact = () => (
  <Layout
    title="Biscui.Tech"
    description="Biscui.Tech Home page">
    <Contact />
  </Layout>
);

export default withAPILocale('contact')(contact);