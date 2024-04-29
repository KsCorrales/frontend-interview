// src/services/authService.ts

import { useRouter } from "vue-router";

interface User {
    id: string;
    name: string;
    email: string;
    token: string;
  }
  
  // Simulate a successful login response
  export function mockGoogleLogin(): Promise<User> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: '12345',
          name: 'John Doe',
          email: 'john.doe@example.com',
          token: 'mocktoken123456'
        });
      }, 1000); // Simulate network delay
    });
  }

  // Mock Google's OAuth URLs
  const GOOGLE_AUTH_URL = 'https://fake.google.com/o/oauth2/auth';
  const REDIRECT_URI = 'http://localhost:8080/auth/callback';  // Adjust as necessary for your app
  
  export function initiateGoogleAuth(router) {
    // Redirect to the fake auth page within the app using the router instance passed as a parameter
    router.push('/fake-auth');
  }
  
  export function fakeAuthCallback() {
    // This simulates the callback after Google auth
    // Normally you would extract the access token from the URL here
    const fakeToken = 'mocktoken123456';
  
    // Return fake user details, normally you would use the token to fetch user data
    return {
      id: '12345',
      name: 'John Doe',
      email: 'john.doe@example.com',
      token: fakeToken
    };
  }