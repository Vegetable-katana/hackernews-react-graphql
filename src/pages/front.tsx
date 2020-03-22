import * as React from 'react';

import { withDataAndRouter } from '../helpers/with-data';
import { MainLayout } from '../layouts/main-layout';

export const FrontPage = withDataAndRouter(props => (
  <MainLayout currentUrl={props.router.pathname}>
    <span>total</span>
  </MainLayout>
));

export default FrontPage;
