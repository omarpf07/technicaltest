import { IUser } from '../beans';

export class User implements IUser {
    constructor(
        public username: string,
        public name: string,
        public password: string,
        public role: string,
        public country: string,
        public description: string
    ) { }
}
