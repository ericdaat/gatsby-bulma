import React from 'react';
import Layout from '../components/layout';
import Access from '../components/access';
import Teachers from '../components/teachers';
import Blog from '../components/blog';

const IndexPage = () =>
<Layout>
    <Access/>
    <Teachers/>
    <Blog/>
</Layout>;

export default IndexPage;
