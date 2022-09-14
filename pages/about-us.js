import { useEffect } from 'react';
import { server } from './api/graphql';

function AboutUs({ aboutMe }) {
  
  useEffect(() => {
    letsConsole();
  }, []);

  return (
    <div style={{ marginTop: '120px' }}>
      <ul>
        { aboutMe.map((user) => (
          <>
            <li>Name: {user.name}</li>
            <li>Email: {user.email}</li>
            <li>Age: {user.age}</li>
          </>
        ))}
      </ul>
    </div>
  );
}

export default AboutUs;

export async function getStaticProps() {
  const GET_USERS = `
    query {
      users {
        name
        email
        age
      }
    }
  `
  const { data } = await server.executeOperation({
    query: GET_USERS,
    variables: {}
  })
  
  return {
    props: {
      aboutMe: data.users,
    },
  };
}