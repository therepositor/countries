import { gql } from 'apollo-boost'

const getCountriesQuery = gql`
    query Countries{
        countries{
            name
            id
            currency
            emoji
            emojiu
            continent{
                name
                id
            }
        }
    }
`

export { getCountriesQuery }