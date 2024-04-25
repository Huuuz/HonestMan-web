import SearchPage from '@/components/SearchPage';
import {
  DeleteProjectById,
  GetAllProject,
  GetProjectById,
  InsertProject,
  UpdateProjectById,
} from '@/services/ant-design-pro/list';
import { useIntl } from '@umijs/max';
import type { TableColumnsType } from 'antd';
import { Button, Collapse, Drawer, Form, Input, Modal, Table, message } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import React, { useEffect, useMemo, useState } from 'react';

export type FieldType = {
  projectName: string;
  targetUrl: string;
  targetIp: string;
  remark: string;
};

export type FormType = {
  Add: FieldType;
  Edit: FieldType;
};

type ProjectElementType = LIST.GetAllProject_Response['project'][number];
const { Search } = Input;

const App: React.FC = () => {
  const intl = useIntl();
  const [addForm] = useForm<FormType['Add']>();
  const [editForm] = useForm<FormType['Edit']>();

  const [searchValue, setSearchValue] = useState<string>();
  const [openType, setOpenType] = useState<'edit' | 'view'>();
  const [editDataId, setEditDataId] = useState<number>();
  const [deleteDataId, setDeleteDataId] = useState<number>();
  const [viewDataId, setViewDataId] = useState<number>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false);
  const [tableLoading, setTableLoading] = useState(false);
  // const [fixedTop, setFixedTop] = useState(false);
  const [data, setData] = useState<ProjectElementType[]>([]);
  const onClose = () => {
    setOpenType(undefined);
    addForm.resetFields();
  };

  const columns: TableColumnsType<ProjectElementType> = [
    {
      title: intl.formatMessage({
        id: 'project.order',
        defaultMessage: 'order',
      }),

      width: 100,
      dataIndex: 'order',
      key: 'order',
      fixed: 'left',
      ellipsis: true,
      render(value, record, index) {
        return index + 1;
      },
    },
    {
      title: intl.formatMessage({ id: 'project.projectName', defaultMessage: 'projectName' }),

      width: 200,
      dataIndex: 'projectName',
      key: 'projectName',
      fixed: 'left',
      ellipsis: true,
    },
    {
      title: intl.formatMessage({ id: 'project.targetUrl', defaultMessage: 'targetUrl' }),
      width: 200,
      dataIndex: 'targetUrl',
      key: 'targetUrl',
      ellipsis: true,
    },

    {
      title: intl.formatMessage({ id: 'project.targetIp', defaultMessage: 'targetIp' }),
      dataIndex: 'targetIp',
      key: 'targetIp',
      width: 100,
      ellipsis: true,
    },
    {
      title: intl.formatMessage({ id: 'project.superiorId', defaultMessage: 'superiorId' }),
      dataIndex: 'superiorId',
      key: 'superiorId',
      width: 100,
      ellipsis: true,
    },
    {
      title: intl.formatMessage({ id: 'project.orgName', defaultMessage: 'orgName' }),
      dataIndex: 'orgName',
      key: 'orgName',
      width: 200,
      ellipsis: true,
    },
    {
      title: intl.formatMessage({ id: 'project.remark', defaultMessage: 'remark' }),
      dataIndex: 'remark',
      key: 'remark',
      width: 200,
      ellipsis: true,
    },
    {
      title: intl.formatMessage({ id: 'project.creatTime', defaultMessage: 'creatTime' }),
      dataIndex: 'creatTime',
      key: 'creatTime',
      width: 200,
      ellipsis: true,
    },

    {
      title: intl.formatMessage({ id: 'project.operation', defaultMessage: 'operation' }),
      key: 'operation',
      fixed: 'right',
      // width: 150,
      ellipsis: true,

      render(value, record) {
        return (
          <>
            <Button
              onClick={() => {
                setEditDataId(record.id);
                setOpenType('edit');
                editForm.setFieldsValue(record);
              }}
            >
              {intl.formatMessage({ id: 'project.edit', defaultMessage: 'edit' })}
            </Button>
            <Button
              onClick={() => {
                setDeleteDataId(record.id);
              }}
            >
              {intl.formatMessage({ id: 'project.delete', defaultMessage: 'delete' })}
            </Button>
            <Button
              onClick={() => {
                setViewDataId(record.id);
                setOpenType('view');
              }}
            >
              {intl.formatMessage({ id: 'project.view', defaultMessage: 'view' })}
            </Button>
          </>
        );
      },
    },
  ];
  const init = async () => {
    // const res = await GetAllAsset();
    setTableLoading(true);
    const res1 = await GetAllProject();
    setTableLoading(false);
    console.log(res1);
    setData(res1.data.project);
  };

  const getTableData = async (option: { id: string | undefined }) => {
    setTableLoading(true);
    try {
      let res: { data: LIST.GetProjectById_Response };
      if (option.id === undefined || Number.isNaN(Number(option.id))) {
        return await init();
      } else {
        res = await GetProjectById({ id: Number(option.id) });
      }
      setTableLoading(false);
      setData(res.data.project);
    } catch (error: any) {
      // message.error((error as AxiosError).message);
      setTableLoading(false);
    }
  };

  const onSearch = (e: string) => {
    getTableData({ id: e });
    setSearchValue(e);
  };

  const handleOk = () => {
    addForm
      .validateFields(['Add'])
      .then(async (values) => {
        setBtnLoading(true);
        await InsertProject(values);
        addForm.resetFields();
        setBtnLoading(false);
        setIsModalOpen(false);
        await init();
      })
      .catch((err) => {
        message.info(err?.toString?.());
        setBtnLoading(false);
      });
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onDelete = async () => {
    try {
      setBtnLoading(true);
      if (deleteDataId !== undefined) {
        await DeleteProjectById({ id: deleteDataId });
        await getTableData({ id: searchValue });
      }
      setDeleteDataId(undefined);
      setBtnLoading(false);
    } catch (error) {
      console.log(
        '%c AT-[ error ]-422-「index」',
        'font-size:13px; background:pink; color:#bf2c9f;',
        `${new Date()},`,
        error,
      );
      setDeleteDataId(undefined);
      setBtnLoading(false);
    }
  };

  const editData = useMemo(() => {
    return data.find((i) => i.id === editDataId);
  }, [data, editDataId]);

  useEffect(() => {
    init();
  }, []);

  return (
    <SearchPage
      LeftComponent={
        <div>
          <Button
            onClick={() => {
              setIsModalOpen(true);
            }}
          >
            {intl.formatMessage({
              id: 'project.add',
              defaultMessage: 'add',
            })}
          </Button>

          <Search
            addonBefore={intl.formatMessage({
              id: 'project.projectName',
              defaultMessage: 'projectName',
            })}
            placeholder="input search text"
            onSearch={onSearch}
            style={{ width: 200 }}
          />

          <Modal
            title="Basic Modal"
            confirmLoading={btnLoading}
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <Form
              form={addForm}
              name="Add"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              style={{ maxWidth: 600 }}
              autoComplete="off"
            >
              <Form.Item<FormType['Add']>
                label={intl.formatMessage({
                  id: 'project.projectName',
                  defaultMessage: 'projectName',
                })}
                name={'projectName'}
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item<FormType['Add']>
                label={intl.formatMessage({ id: 'project.targetUrl', defaultMessage: 'targetUrl' })}
                name={'targetUrl'}
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item<FormType['Add']>
                label={intl.formatMessage({ id: 'project.targetIp', defaultMessage: 'targetIp' })}
                name={'targetIp'}
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item<FormType['Add']>
                label={intl.formatMessage({ id: 'project.remark', defaultMessage: 'remark' })}
                name={'remark'}
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input />
              </Form.Item>
            </Form>
          </Modal>
        </div>
      }
      LeftComponentLoading={false}
      RightComponentLoading={false}
      RightComponent={
        <>
          <Table
            loading={tableLoading}
            columns={columns}
            dataSource={data}
            scroll={{
              x: 1800,
              // y: 400
            }}
            // summary={() => (
            //   <Table.Summary fixed={fixedTop ? 'top' : 'bottom'}>
            //     <Table.Summary.Row>
            //       <Table.Summary.Cell index={0} colSpan={2}>
            //         <Switch
            //           checkedChildren="Fixed Top"
            //           unCheckedChildren="Fixed Top"
            //           checked={fixedTop}
            //           onChange={() => {
            //             setFixedTop(!fixedTop);
            //           }}
            //         />
            //       </Table.Summary.Cell>
            //       <Table.Summary.Cell index={2} colSpan={8}>
            //         Scroll Context
            //       </Table.Summary.Cell>
            //       <Table.Summary.Cell index={10}>Fix Right</Table.Summary.Cell>
            //     </Table.Summary.Row>
            //   </Table.Summary>
            // )}
            // antd site header height
            // sticky={{ offsetHeader: 64 }}
          />
          <Drawer
            key={'edit' + editDataId}
            title={editDataId}
            onClose={onClose}
            closable={false}
            open={openType === 'edit'}
          >
            <Form
              form={editForm}
              name="Edit"
              onFinish={async (value) => {
                console.log(
                  '%c AT-[ value ]-429-「index」',
                  'font-size:13px; background:pink; color:#bf2c9f;',
                  `${new Date()},`,
                  value,
                );
                await UpdateProjectById({ ...value, id: editDataId });
                await getTableData({ id: searchValue });
                onClose();
              }}
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              style={{ maxWidth: 600 }}
              autoComplete="off"
              initialValues={editData}
            >
              {columns.map((i, index) => {
                if (['order', 'operation', 'creatTime'].includes(i.key as any)) {
                  return null;
                }
                return (
                  <Form.Item<FormType>
                    key={index}
                    label={intl.formatMessage({
                      id: `project.${i.key}`,
                      defaultMessage: i.key?.toString(),
                    })}
                    name={i.key as any}
                    rules={[{ required: true, message: 'Please input your username!' }]}
                  >
                    <Input />
                  </Form.Item>
                );
              })}
              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  {intl.formatMessage({ id: 'project.save', defaultMessage: 'save' })}
                </Button>
              </Form.Item>
            </Form>
          </Drawer>
          <Drawer
            key={'view' + viewDataId}
            title={viewDataId}
            onClose={onClose}
            closable={false}
            open={openType === 'view'}
          >
            <Collapse
              key={'view' + viewDataId}
              items={columns.map((i) => {
                return {
                  key: i.key,
                  label: `${i.title}`,
                  children: `${i.title}`,
                };
              })}
            />
          </Drawer>
          <Modal
            title="delete"
            confirmLoading={btnLoading}
            open={deleteDataId !== undefined}
            onOk={onDelete}
            onCancel={() => {
              setDeleteDataId(undefined);
            }}
          >
            {intl.formatMessage({ id: 'project.deleteText', defaultMessage: 'deleteText' })}
            {deleteDataId}
          </Modal>
        </>
      }
    />
  );
};

export default App;
