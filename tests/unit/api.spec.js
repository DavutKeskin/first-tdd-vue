import userFixture from './fixtures/user'
import nock from "nock";
import api from '@/api'
import flushPromises from "flush-promises";

describe('api tests', function () {
    it('should search for the user', async function () {
        const expectedUser = 'davut'
        const request = nock('https://api.github.com')
            .get(`/users/${expectedUser}`)
            .reply(200,userFixture)

        const result = await api.searchUser(expectedUser)
        await flushPromises()

        expect(result).toEqual(userFixture)
        expect(request.isDone()).toBe(true)
    });
});
