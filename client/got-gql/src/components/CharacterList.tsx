import { Character } from './Character';
import {useQuery, gql} from '@apollo/client';
import {QueryResult} from '../components/query-result';
const CHARACTER = gql `
query GetCharacter($id: Int) {
  
  getCharacter(id: Int) {
    name
    born
    gender
    died
    culture
  }
 
}


`

 export const CharacterList : any = () => {


    const{loading, error, data} = useQuery(CHARACTER)

return (
  <>
    <h1>hello</h1>
    <QueryResult error={error} loading={loading} data={data}>
    {data?.getCharacter?.map((character: { id: any; })  => (
        <Character key={character.id} character={character} />
    ))}
    </QueryResult>
    </>
)
}

