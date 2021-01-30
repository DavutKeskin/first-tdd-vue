import mutations from '@/store/mutations'
import initialState from '@/store/state'
import user from './fixtures/user'

describe('test mutations', function () {
    let state
    beforeEach(()=>{
        state = {...initialState}
    })

    it('should sets new user', function () {
        const expectedUser = user

        mutations.SET_USER(state, expectedUser)

        expect(state.user).toEqual(expectedUser)
        expect(state.user).not.toBe(expectedUser)

    });
});
