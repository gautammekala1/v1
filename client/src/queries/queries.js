import { gql } from 'apollo-boost';

const BottleQuery = gql`
  {
    bottles {
      title,
      price
      id
      quantity
    }
  }
`;


const addBottleMutation = gql`
    mutation addBottle($title: String!, $price: Float!, $quantity: Int!){
        addBottle(title: $title, price: $price, quantity: $quantity){
            title
            id
        }
    }
`;



export { BottleQuery, addBottleMutation };
