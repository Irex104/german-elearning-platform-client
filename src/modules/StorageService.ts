export default class StorageService {

    private static TOKEN_DATA = 'TOKEN_DATA';
    private static USER_DATA = 'USER_DATA';
    private static MOVEMENTS_DATA = 'MOVEMENTS_DATA';

    public static setTokenData(data: object) {
        localStorage.setItem(this.TOKEN_DATA, JSON.stringify(data));
    }

    public static getTokenData(): object {
        const tokenData: string | null = localStorage.getItem(this.TOKEN_DATA);
        return tokenData === null ? null : JSON.parse(tokenData as string);
    }

    public static getTokenDataByKey(key: string): string {
        const tokenData: any = this.getTokenData();
        return tokenData === null ? undefined : tokenData[key];
    }

    public static deleteTokenData() {
        localStorage.removeItem(this.TOKEN_DATA);
    }

    static setUserData(user: object) {
        localStorage.setItem(this.USER_DATA, JSON.stringify(user))
    }

    static setPosition(movements: object) {
        localStorage.setItem(this.MOVEMENTS_DATA, JSON.stringify(movements))
    }

}