// tslint:disable-next-line:no-namespace
export namespace AppModel {

    export interface IUser {
        id: number;
        name: string;
        username: string;
        email: string;
        address: IAdressUser;
        phone: string;
        website: string;
        company: ICompanyUser;
    }

    export interface IAdressUser {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: IGeoUser;
    }

    export interface IGeoUser {
        lat: string;
        lng: string;
    }

    export interface ICompanyUser {
        name: string;
        catchPhrase: string;
        bs: string;
    }

}
