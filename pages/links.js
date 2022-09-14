import React from 'react';

export default function Links() {
  return <h1>Links Page</h1>
}

export async function getStaticProps() {    
  
    
    return {
        props: {
            name: 'Iuri'
        }
    }
}
