import { Character } from './Character';
import {useQuery, gql} from '@apollo/client';
import {QueryResult} from '../components/query-result';
const CHARACTERS = gql `
query GetCharacters {
  getCharacters {
    gender
    born
    died
    culture
    name
  }
}


`

 export const CharacterList : any = () => {


    const{loading, error, data} = useQuery(CHARACTERS)

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

