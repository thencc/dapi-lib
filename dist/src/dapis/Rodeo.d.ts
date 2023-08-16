import { RodeoOrgAddAdminParams, RodeoOrgAddMemberParams, RodeoOrgCreateParams, RodeoOrgEditParams, RodeoOrgFetchAllParams, RodeoOrgFetchParams, RodeoOrgMintParams, RodeoOrgSuperAdminParams, RodeoOrgTestAdminParams, RodeoOrgTestMemberParams } from "../model";
declare class Org {
    create(params: RodeoOrgCreateParams): Promise<any>;
    fetchAll(params: RodeoOrgFetchAllParams): Promise<any>;
    edit(params: RodeoOrgEditParams): Promise<any>;
    get(params: RodeoOrgFetchParams): Promise<any>;
    mint(params: RodeoOrgMintParams): Promise<any>;
    addAdmin(params: RodeoOrgAddAdminParams): Promise<any>;
    testAdmin(params: RodeoOrgTestAdminParams): Promise<any>;
    addMember(params: RodeoOrgAddMemberParams): Promise<any>;
    testMember(params: RodeoOrgTestMemberParams): Promise<any>;
    setSuperAdmin(params: RodeoOrgSuperAdminParams): Promise<any>;
}
export declare class Rodeo {
    org: Org;
    constructor();
}
export {};
