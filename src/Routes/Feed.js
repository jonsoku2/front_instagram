import React from 'react';
import styled from 'styled-components';
import { gql } from 'apollo-boost';
import { useQuery } from 'react-apollo-hooks';
import Loader from '../Components/Loader';

const FEED_QUERY = gql`
  {
    seeFeed {
      id
      location
      caption
      user {
        id
        avatar
        username
      }
      files {
        id
        url
      }
      likeCount
      isLiked
      comments {
        id
        text
        user {
          id
          avatar
          username
        }
      }
      createAt
    }
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 50vh;
`;

export default () => {
  const { data, loading } = useQuery(FEED_QUERY);
  console.log(data, loading);
  return <Wrapper>{loading && <Loader />}</Wrapper>;
};
