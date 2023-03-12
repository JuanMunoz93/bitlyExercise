import { faker } from '@faker-js/faker';

export const generateRandomString = (stringLength) =>{
        return faker.random.alphaNumeric(stringLength);
}