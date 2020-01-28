import Link from "next/link";

export default () => (
  <div className="main-wrapper">
    <div className="main-link">
      <Link href="/about">
        <a>about</a>
      </Link>
    </div>
    <div className="main-link">
      <Link href="/portfolio">
        <a>portfolio</a>
      </Link>
    </div>
    <div className="main-link">
      <Link href="/contact">
        <a>contact</a>
      </Link>
    </div>
    <style jsx>{`
      .main-wrapper {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        height: 100vh;
        text-align: center;
      }

      .main-link {
        background: black;
      }

      a {
        font-size: 4.2em;
        text-decoration: none;
        font-family: "Arial";
        color: white;
        position: relative;
        top: 30%;
      }

      .main-link:nth-child (2) {
        background: white;
      }

      .main-link:nth-child (2) > a {
        color: black;
      }
    `}</style>
  </div>
);
