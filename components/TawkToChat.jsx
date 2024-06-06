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
            s1.src='https://embed.tawk.to/66604f5f981b6c564778c6f9/1hvk3c3p3';
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
