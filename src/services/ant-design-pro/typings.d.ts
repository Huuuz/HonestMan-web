// @ts-ignore
/* eslint-disable */

declare namespace API {
  type CurrentUser = {
    name?: string;
    avatar?: string;
    userid?: string;
    email?: string;
    signature?: string;
    title?: string;
    group?: string;
    tags?: { key?: string; label?: string }[];
    notifyCount?: number;
    unreadCount?: number;
    country?: string;
    access?: string;
    geographic?: {
      province?: { label?: string; key?: string };
      city?: { label?: string; key?: string };
    };
    address?: string;
    phone?: string;
  };

  type LoginResult = {
    status?: string;
    type?: string;
    currentAuthority?: string;
  };

  type PageParams = {
    current?: number;
    pageSize?: number;
  };

  type RuleListItem = {
    key?: number;
    disabled?: boolean;
    href?: string;
    avatar?: string;
    name?: string;
    owner?: string;
    desc?: string;
    callNo?: number;
    status?: number;
    updatedAt?: string;
    createdAt?: string;
    progress?: number;
  };

  type RuleList = {
    data?: RuleListItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type FakeCaptcha = {
    code?: number;
    status?: string;
  };

  type LoginParams = {
    username?: string;
    password?: string;
    autoLogin?: boolean;
    type?: string;
  };

  type ErrorResponse = {
    /** 业务约定的错误码 */
    errorCode: string;
    /** 业务上的错误信息 */
    errorMessage?: string;
    /** 业务上的请求是否成功 */
    success?: boolean;
  };

  type NoticeIconList = {
    data?: NoticeIconItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type NoticeIconItemType = 'notification' | 'message' | 'event';

  type NoticeIconItem = {
    id?: string;
    extra?: string;
    key?: string;
    read?: boolean;
    avatar?: string;
    title?: string;
    status?: string;
    datetime?: string;
    description?: string;
    type?: NoticeIconItemType;
  };
}


declare namespace LIST {


  type InsertAsset_Response = null;

  type GetAllProject_Response = {
    project: {
      id: number,
      createdAt: string,
      updatedAt: string,
      superiorId: number,
      projectName: string,
      targetNameUrl: string,
      TargetNameIp: string,
      orgName: string,
      remark: string,
      creatTime: string,
    }[]
    total: number
  };

  type GetProjectById_Response = {
    project: {
      "targetUrl": string,
      "targetIp": string,
      id: number,
      superiorId: number,
      projectName: string,
      orgName: string,
      remark: string,
      creatTime: string,

      // createdAt: string,
      // updatedAt: string,
      // targetNameUrl: string,
      // TargetNameIp: string,
    }[]
    total: number
  };

  type DeleteProjectById_Response = null;




  type UpdateAssetById_Options = {
    id: string
    inquire?: string,
    host?: string,
    ip: string,
    port: string,
    title?: string;
    domain?: string;
    country?: string;
    city?: string;
    link?: string;
    asOrganization?: string;
    survive?: string;
    remark?: string;
    lcp?: string;
  }

  type UpdateProjectById_Options = {
    SuperiorID?: string;
    projectName: string;
    TargetNameUrl?: string;
    TargetNameIp?: string;
    orgName?: string;
    Remark?: string;
  };
  type UpdateProjectById_Response = null;




  type GetAssetByParam_Options = {
    startDate?: string;
    endDate?: string;
    inqure?: string;
    host?: string;
    ip?: string;
    port?: string;
    protocol?: string;
    title?: string;
    domain?: string;
    country?: string;
    city?: string;
    link?: string;
    asOrganization?: string;
    survive?: string;
    lcp?: string;
  };

















  type InsertAsset_Options = {
    projectName: string;
    SuperiorID?: string;
    TargetNameUrl?: string;
    TargetNameIp?: string;
    orgName?: string;
    Remark?: string;
  };

  type GetAllAsset_Response = {
    asset: {

      timeRecord: {
        id: number,
        createdAt: string,
        updatedAt: string,

      },
      id: number,
      projectId: number,
      inquire: string,
      host: string,
      ip: string,
      port: string,
      protocol: string,

      title: string,
      domain: string,
      country: string,
      city: string,
      link: string,
      asOrganization: string,
      survive: string,
      remark: string,
      lcp: string,


    }[]
    total: number
  };
  type GetAssetById_Response = {
    asset: {

      timeRecord: {
        id: number,
        createdAt: string,
        updatedAt: string,

      },
      id: number,
      projectId: number,
      inquire: string,
      host: string,
      ip: string,
      port: string,
      protocol: string,

      title: string,
      domain: string,
      country: string,
      city: string,
      link: string,
      asOrganization: string,
      survive: string,
      remark: string,
      lcp: string,


    }[]
    total: number
  };

  type DeleteAssetById_Response = null

}
