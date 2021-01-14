import React from 'react';
import Layout from '@theme/Layout';
import Redocusaurus from '../components/Redocusaurus';

function APIDocs() {
  return (
  <Layout
    title={`API Docs`}
    description={`Open API Reference Docs for the API`}
  >
    <Redocusaurus spec="https://openbankapiargentina.azurewebsites.net/swagger/v1/swagger.json" />
  </Layout>
  );
}

export default APIDocs;

