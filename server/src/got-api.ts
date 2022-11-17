import { RESTDataSource } from '@apollo/datasource-rest';

class GotAPI extends RESTDataSource {
  override baseURL = 'https://anapioficeandfire.com/api/characters';

  async getCharacter(id): Promise<Character> {
    return this.get<Movie>(`movies/${encodeURIComponent(id)}`);
  }

  async getCharacters(limit = '10'): Promise<Character[]> {
    const data = await this.get('characters', {
      params: {
        per_page: limit,
        
      },
    });
    return data.results;
  }
}