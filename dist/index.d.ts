import NCCHappyDapi from './dapis/NCCHappyDapi';
import NCCEndUser from './end-user/NCCEndUser';
import { NCCDapiConfig } from './types';
export * from './types';
export default class dapiLib {
    dapis: NCCHappyDapi | null;
    endUser: NCCEndUser | null;
    constructor(config: NCCDapiConfig);
}
