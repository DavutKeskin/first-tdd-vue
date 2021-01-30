jest.mock('@/api')

import actions from "@/store/actions";
import flushPromises from "flush-promises";
import api from '@/api';
import userFixture from './fixtures/user'

describe('store actions', function () {
    let commit

    beforeEach(() => {
        commit = jest.fn()
    })

    it('should search for users', async () => {
        const expectedUser = 'davut'

        await actions.SEARCH_USER({commit},{username:expectedUser})
        await flushPromises()

        expect(api.searchUser).toHaveBeenCalledWith(expectedUser)
        expect(commit).toHaveBeenCalledWith('SET_USER', userFixture)

    });
});
