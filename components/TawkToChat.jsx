// TawkToChat.jsx

import React from 'react';
import Head from 'next/head';

const TawkToChat = () => (
  <Head>
    <script
      type="text/javascript"
      dangerouslySetInnerHTML={{
        __html: `
          var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
          (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src=process.env.REACT_APP_TAWK_TO_SRC;
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
          })();
        `,
      }}
    />
  </Head>
);

export default TawkToChat;
