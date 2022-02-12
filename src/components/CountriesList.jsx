import React from 'react';
import { useState } from 'react';
import { graphql } from 'react-apollo';
import { getCountriesQuery } from '../queries/queries';

const CountriesList = ({data}) => {
    const [countriesArr, setCountriesArr] = useState([]);
    const displayCountriesList = () => {
        console.log(data)
        if (data?.loading) {
            return <option disabled>Countries loading....</option>
        } else {
            return data?.countries?.map(country => {
                return <option key={country.id} value={country.id}>
                    {country.name}
                </option>
            })
        }
    }
  return (
    <div className='countries-list'>
        <select>
            {displayCountriesList()}
        </select>
    </div>
  )
}
// export default CountriesList
export default graphql(getCountriesQuery)(CountriesList)