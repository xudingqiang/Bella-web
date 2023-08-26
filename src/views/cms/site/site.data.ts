import { BasicColumn, FormSchema } from '/@/components/Table';

/**
 * 查询条件
 */
export const searchFormSchema: FormSchema[] = [
  {
    field: 'name',
    label: '名称',
    component: 'Input',
  },
  {
    field: 'domainName',
    label: '域名',
    component: 'Input',
  },
  {
    field: 'deploymentPath',
    label: '部署路径',
    component: 'Input',
  },
];

// 表格列数据
export const columns: BasicColumn[] = [
  {
    title: '名称',
    dataIndex: 'name',
    width: 300,
  },
  {
    title: '域名',
    dataIndex: 'domainName',
    width: 200,
  },
  {
    title: '部署路径',
    dataIndex: 'deploymentPath',
    width: 300,
  },
  {
    title: '主题名称',
    dataIndex: 'theme',
    width: 160,
  },
  {
    title: '状态',
    dataIndex: 'status',
    width: 120,
    format: 'dict|commonStatus',
    filters: 'dict|commonStatus',
  },
  {
    title: '更新人',
    dataIndex: 'editUser',
    width: 120,
  },
  {
    title: '更新时间',
    dataIndex: 'editDate',
    width: 160,
    format: 'date|YYYY-MM-DD HH:mm',
  },
];
