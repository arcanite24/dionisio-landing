import Link from 'next/link';

const Sidebar = () => (
  <div className="sidebar">
    <div className="side-title">
      <h1>dionisio</h1>
      <h3>By EpsiDev</h3>
    </div>

    <div className="side-links">
      <Link href="/">
        <a>Introduction</a>
      </Link>
      <Link href="/getting-started">
        <a>Getting Started</a>
      </Link>
      <Link href="/cli">
        <a>Dionisio CLI</a>
      </Link>
      <Link href="/docs">
        <a>Docs</a>
      </Link>
      <Link href="/api">
        <a>API</a>
      </Link>
      <Link href="/faq">
        <a>FAQ</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>

    <div className="side-footer">
      <button>
        download
      </button>
    </div>
</div>
);

export default Sidebar;