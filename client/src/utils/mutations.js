import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation loginUser($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      username
    }
  }
}
`;


export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;


export const REMOVE_BOOK = gql`
    mutation removeBook($bookId: ID!) {
        removeBook(bookId:$bookId) {
            username
            email
            bookCount
            savedBooks {
              # _id
              authors
              description
              title
              bookId
              image
              link
            }
        }
}
`;


export const SAVE_BOOK = gql`
    mutation saveBook($input: savedBook!) {
    saveBook (input: $input)
        {
            username
            email
            bookCount
            savedBooks {
              # _id
              authors
              description
              title
              bookId
              image
              link
            }
        }
    }
`;

