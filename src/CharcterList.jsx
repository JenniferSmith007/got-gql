import {gql} from '@apollo/client';
import {useQuery} from '@apollo/client';

const CHARACTER = gql`
  # Query goes here
  query GetCharacter {
    getCharacter{
    name
	gender
	culture
	born
	died
     
    }
  }
`;

export const CharacterList = () => {
    const {loading, error, data} = useQuery(CHARACTER);

  if (loading) return 'Loading...';

  if (error) return `Error! ${error.message}`;
    return(
        <div>
            <p>{JSON.stringify(data)}</p>
        </div>
    )
}