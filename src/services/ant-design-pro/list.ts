// @ts-ignore
/* eslint-disable */
import { FieldType } from '@/pages/HonestMan-Project';
import { request } from '@umijs/max';


/** 查看查看所有project数据-GetAllProject */
export async function GetAllProject() {
  return request<{
    data: LIST.GetAllProject_Response;
  }>('/api/v1/project/GetAllProject', {
    method: 'GET',
  });
}

/** 根据id查看project-GetAllProject */
export async function GetProjectById(options: { id: number }) {
  return request<{
    data: LIST.GetProjectById_Response;
  }>('/api/v1/project/GetProjectById/', {
    method: 'GET',
    params: options
    // ...(options || {}),
  });
}

/** 根据projectid查找Assets */
export async function GetAssetByProjectId(options: { project_id: number }) {
  return request<{
    data: LIST.GetAssetById_Response;
  }>('/api/v1/asset/GetAssetByProjectId', {
    method: 'GET',
    ...(options || {}),
  });
}



/** 根据ID删除project--DeleteProjectById */
export async function DeleteProjectById(options: { id: number }) {
  return request<{
    data: LIST.GetProjectById_Response;
  }>('/api/v1/project/DeleteProjectById', {
    method: 'GET',
    params: options
  });
}

/** 根据ID删除project--DeleteProjectById */
export async function UpdateProjectById(options: LIST.UpdateProjectById_Options) {
  return request<{
    data: LIST.UpdateProjectById_Response;
  }>('/api/v1/project/UpdateProjectById', {
    method: 'PATCH',
    data: options
  });
}


/** ------------------------------------------------------------   */





/** 查看所有Asset */
export async function GetAllAsset() {
  return request<{
    data: LIST.GetAllAsset_Response;
  }>('/api/v1/asset/GetAllAsset', {
    method: 'GET',
  });
}

/** 根据id查找Asset */
export async function GetAssetById(options: { id: number }) {
  return request<{
    data: LIST.GetAssetById_Response;
  }>('/api/v1/asset/GetAssetById', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 根据动态条件查询project */
export async function GetAssetByParam(options: LIST.GetAssetByParam_Options) {
  return request<{
    data: LIST.GetAllAsset_Response;
  }>('/api/v1/asset/GetAssetByParam/', {
    method: 'GET',
    ...(options || {}),
  });
}






/** 插⼊Project数据-InsertProject */
export async function InsertProject(data: FieldType) {
  return request<{
    data: LIST.InsertProject_Response;
  }>('/api/v1/project/InsertProject', {
    method: 'POST',
    data: data,
  });
}
/** 插⼊Asset数据-InsertAsset */
export async function InsertAsset(options?: { [key: string]: any }) {
  return request<{
    data: LIST.InsertAsset_Response;
  }>('/api/v1/asset/InsertAsset', {
    method: 'POST',
    ...(options || {}),
  });
}


/** 更改 */
export async function UpdateAssetById(options: LIST.UpdateProjectById_Options) {
  return request<{
    data: LIST.UpdateProjectById_Response;
  }>('/api/v1/project/UpdateProjectById', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 根据ID删除project--DeleteProjectById */
export async function DeleteAssetById(options: { id: number }) {
  return request<{
    data: LIST.DeleteAssetById_Response;
  }>('/api/v1/asset/DeleteAssetById', {
    method: 'GET',
    ...(options || {}),
  });
}
