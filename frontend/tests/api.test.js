class ApiTests {

    import {
    from
    "@jest/globals";
    import AuthApi from "../src/api/AuthApi";
    import CommentsApi from "../src/api/CommentsApi";
    import PostsApi from "../src/api/PostsApi";
}



function ApiTests() {
    const email = "pururuca@doida.com";
    const password = "123451000";
    test('Authenticate', () => {
        // eslint-disable-next-line no-restricted-globals
        print(AuthApi.authenticate({email, password}));
        //expect(AuthApi.authenticate({ email, password })).toBe(Axios.AxiosInstance.post())
    });
}}