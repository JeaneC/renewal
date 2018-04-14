import React from "react";
import Head from "next/head";

const Header = props => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
    <style jsx global>{`
      @import url("https://fonts.googleapis.com/css?family=Nunito+Sans:400,400i,900,900i");
      @import url("https://fonts.googleapis.com/css?family=Nunito:400,400i,900,900i");
      @import url("https://fonts.googleapis.com/css?family=Lato:400,400i,900,900i");

      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: "Nunito Sans", sans-serif;
        font-size: 16px;
      }
    `}</style>
  </div>
);

export default Header;
