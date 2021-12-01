import { gql, useQuery } from '@apollo/client';

const GET_DOGS = gql`
  query GetDogs {
    dogs {
      id
      breed
    }
  }
`;


const MyPage = () => {
  const { loading, data } = useQuery(GET_DOGS);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <div>{JSON.stringify(data)}</div>;
};

export default MyPage;