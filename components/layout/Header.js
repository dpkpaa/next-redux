import React from "react";
import Link from "next/link";
export default function Header() {
  return (
    <span className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link href="/">
        <a className="navbar-brand">Next Redux App</a>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link href="/">
            <a className="nav-item nav-link active">
              Home <span className="sr-only">(current)</span>
            </a>
          </Link>
          <Link href="/about">
            <a className="nav-item nav-link">About Us</a>
          </Link>
          <Link href="/counter">
            <a className="nav-item nav-link">Counter</a>
          </Link>
        </div>
      </div>
    </span>
  );
}
