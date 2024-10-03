import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();

    account;

    constructor() {
        // console.log("appwrite_Url: "+conf.appwriteUrl);
        // console.log("appwrite_project_id: "+conf.appwriteProjectId);
                
        this.client
            .setEndpoint(conf.appwriteUrl) // Your API Endpoint
            .setProject(conf.appwriteProjectId); // Your project ID

        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}) {
        try {
            const userAccount  = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // call the login method
                return this.login({email, password});
            } else {
                throw new Error("Account creation failed");
            }
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
    
    async login({email, password}) {
        try {
            const session = await this.account.createEmailPasswordSession(email, password);
            if (session) {
                return session;
            } else {
                throw new Error("Login failed");
            }
        } catch (error) {
            console.error(error);
            throw error;
        } 
    }

    async getCurrentUser() {
        try {
            const user = await this.account.get();
            if (user) {
                return user;
            } else {
                console.error("User not found");
                return null;
            }
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async logout() {
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

}

const authService = new AuthService();

export default authService;