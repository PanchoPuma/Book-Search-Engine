import gql from 'graphql-tag';


export const GET_ME = gql`
{
    me {
      _id
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