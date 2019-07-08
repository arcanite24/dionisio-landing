import Sidebar from './Sidebar';

const Layout = props => (
  <div>
    <Sidebar />
    <div className="content">
      {props.children}
    </div>
  </div>
)

export default Layout;