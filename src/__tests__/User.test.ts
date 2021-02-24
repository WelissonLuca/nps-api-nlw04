import request from 'supertest';
import { app } from '../app';

describe("User", () => {

    request(app).post("/users").send({
        
        email: "User@example.com",
        name: "User Example"
            
        
    })
})