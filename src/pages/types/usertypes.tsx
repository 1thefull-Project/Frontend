export interface User{
    _id: string;
    googleId: string;
    userId : number;
    name: string;
    email: string;
    phone: string;
    deal: number;
    follower: number;
    following: number;
    resentProduct: number[];
    ongoingProduct: number[];
    address: string;
    lobbyAlarm: any;
    dobbyAlarm: any;
    createdAt: string;
    __v: number;

}