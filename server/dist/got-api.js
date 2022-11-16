import { RESTDataSource } from '@apollo/datasource-rest';
export class GotAPI extends RESTDataSource {
    constructor() {
        super(...arguments);
        this.baseURL = 'https://anapioficeandfire.com/api/';
    }
    async getCharacter(id) {
        return this.get(`characters/${encodeURIComponent(id)}`);
    }
}
