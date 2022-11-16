import { Character } from './Character';
import {useQuery, gql} from '@apollo/client';
import {QueryResult} from '../components/query-result';
const CHARACTER = gql `
    
query GetCharacters {
    getCharacters {
      born
      culture
      died
      gender
      id
      name
      
    }
  }

`

 export const CharacterList : any = () => {


    const{loading, error, data} = useQuery(CHARACTER)

return (
  <>
    <h1>hello</h1>
    <QueryResult error={error} loading={loading} data={data}>
    {data?.getCharacters?.map((character: { id: any; })  => (
        <Character key={character.id} character={character} />
    ))}
    </QueryResult>
    </>
)
}

