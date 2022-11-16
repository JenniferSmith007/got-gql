import { RESTDataSource } from '@apollo/datasource-rest';

export class GotAPI extends RESTDataSource {
  override baseURL = 'https://anapioficeandfire.com/api/';

  async getCharacter(id): Promise <string> {
    return this.get<string>(`characters/${encodeURIComponent(id)}`);
  
  }
 
}