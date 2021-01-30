jest.mock('@/store/actions')

import {createLocalVue, shallowMount} from '@vue/test-utils'
import UserView from '@/views/UserView'
import Vuex from "vuex";
import initialState from '@/store/state'
import VUserSearchForm from '@/components/VUserSearchForm'
import VUserProfile from '@/components/VUserProfile'
import userFixture from './fixtures/user'
import actions from "@/store/actions";


const localVue = createLocalVue();
localVue.use(Vuex)

describe('UserView', () => {

    let state

    const build = () => {
        const wrapper = shallowMount(UserView,{
            localVue,
            store: new Vuex.Store({
                state,
                actions,
            })
        });
        return {
            wrapper,
            userSearchForm : () => wrapper.findComponent(VUserSearchForm),
            userProfile : () => wrapper.findComponent(VUserProfile)
        }
    }

    it('renders the component', () => {
        // arrange
        const {wrapper} = build();
        // assert
        expect(wrapper.html()).toMatchSnapshot()
    })

    it('renders main child components', () => {
        // arrange
        const {userProfile, userSearchForm} = build();

        // assert
        expect(userSearchForm().exists()).toBe(true);
        expect(userProfile().exists()).toBe(true);
    })

    beforeEach(() => {
        jest.resetAllMocks();
        state = {...initialState}
    })

    it('should a passes a binded user profile component', () => {
        const {userProfile} = build();
        state.user = userFixture;
        Object.is(userProfile().vm.user, state.user)
        // expect (Object.userProfile().vm.user).toBe(state.user)
    });

    it('should searches for a user when received submitted', () => {
        const expectedUser = 'davut';
        const {userSearchForm} = build()

        userSearchForm().vm.$emit('submitted', expectedUser)

        expect(actions.SEARCH_USER).toHaveBeenCalled()
        expect(actions.SEARCH_USER.mock.calls[0][1]).toEqual({username: expectedUser})

    });


})
