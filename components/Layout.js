import Head from 'next/head';
import Sidebar from './Sidebar';
import '../style.scss';

const Layout = props => (
  <div>
    <Head>
      <title>Dionisio | EpsiDev</title>
    </Head>
    <Sidebar />
    <div className="content">
      {props.children}
    </div>
  </div>
)

export default Layout;