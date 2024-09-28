const baseUrl = "http://localhost:3000";


const loginSchema = {
  API: baseUrl + "/api/auth/login",
  payload: {
    email: "tarun123@gmail.com",
    password: "12345",
  },
  respose: {
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9........",
  },
};

const signUpSchema = {
  API: baseUrl + "/api/auth/signup",
  payload: {
    name: "tarun",
    email: "tarun123@gmail.com",
    password: "12345",
    phone_number: 1234567890,
  },
  respose: {
    message: "User created successfully",
    userId: 6,
  },
};


module.exports = { loginSchema, signUpSchema };
