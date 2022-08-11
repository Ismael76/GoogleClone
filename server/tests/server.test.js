const request = require ('supertest');
const app = require("../server");

describe ('API server', () => {
    let api;

    beforeAll( () => {
        api = app.listen(3001, () => {
            console.log("Test sever is running on 3001")
        })
    })

    afterAll( (done) => {
        console.log("Gracefully stoping test server");
        api.close(done);
    })

    it('respondes to get / with a status of 200', (done) => {
        request(api).get('/').expect(200, done);
    })

    it('respondes to get /google with a status of 200', (done) => {
        request(api).get('/google').expect(200, done);
    })

    it('respondes to get /search with a status of 200 ', (done) => {
        request(api).get('/search').expect(200, done);
    })

   
})