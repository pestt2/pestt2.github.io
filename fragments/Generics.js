import { gql } from '@apollo/client';

export const GenericFields = gql`
  fragment GenericFields on Generic {
    title
    address
    googleMaps
    officeHours
    phone
    email
  }
`;
