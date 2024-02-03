// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 此处后端没有提供注释 POST /chart/add */
export async function addChart(body: API.ChartAddRequest, options?: { [key: string]: any }) {
  return request<API.BaseResponseLong>('/chart/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /chart/delete */
export async function deleteChart(body: API.DeleteRequest, options?: { [key: string]: any }) {
  return request<API.BaseResponseBoolean>('/chart/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /chart/edit */
export async function editChart(body: API.ChartEditRequest, options?: { [key: string]: any }) {
  return request<API.BaseResponseBoolean>('/chart/edit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /chart/gen */
export async function genChartByAi(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.genChartByAiParams,
  body: {},
  file?: File,
  options?: { [key: string]: any },
) {

  const formData = new FormData();

  if (file) {
    formData.append('file', file);
  }

  Object.keys(body).forEach((ele) => {
    const item = (body as any)[ele];

    if (item !== undefined && item !== null) {
      formData.append(
        ele,
        typeof item === 'object' && !(item instanceof File) ? JSON.stringify(item) : item,
      );
    }
  });
  return request<API.BaseResponseBiResponse>('/chart/gen', {
    method: 'POST',
    params: {
      ...params,
    },
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /chart/gen/async/bigAi */
export async function genChartByBigAiAsyncMq(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.genChartByBigAiAsyncMqParams,
  body: {},
  file?: File,
  options?: { [key: string]: any },
) {

  const formData = new FormData();

  if (file) {
    formData.append('file', file);
  }

  Object.keys(body).forEach((ele) => {
    const item = (body as any)[ele];

    if (item !== undefined && item !== null) {
      formData.append(
        ele,
        typeof item === 'object' && !(item instanceof File) ? JSON.stringify(item) : item,
      );
    }
  });

  return request<API.BaseResponseBiResponse>('/chart/gen/async/bigAi', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      ...params,
    },
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /chart/gen/async/mq */
export async function genChartByAiAsyncMq(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.genChartByAiAsyncMqParams,
  body: {},
  file?: File,
  options?: { [key: string]: any },
) {

  const formData = new FormData();

  if (file) {
    formData.append('file', file);
  }

  Object.keys(body).forEach((ele) => {
    const item = (body as any)[ele];

    if (item !== undefined && item !== null) {
      formData.append(
        ele,
        typeof item === 'object' && !(item instanceof File) ? JSON.stringify(item) : item,
      );
    }
  });

  return request<API.BaseResponseBiResponse>('/chart/gen/async/mq', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      ...params,
    },
    data: formData,
    requestType: 'form',
    ...(options || {}),
  });
}


/** 此处后端没有提供注释 GET /chart/get */
export async function getChartById(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getChartByIdParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseChart>('/chart/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /chart/list/page */
export async function listChartByPage(
  body: API.ChartQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageChart>('/chart/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /chart/my/list/page */
export async function listMyChartByPage(
  body: API.ChartQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageChart>('/chart/my/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /chart/update */
export async function updateChart(body: API.ChartUpdateRequest, options?: { [key: string]: any }) {
  return request<API.BaseResponseBoolean>('/chart/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
