import { GetAllProject } from '@/services/ant-design-pro/list';
import type { TableColumnsType } from 'antd';
import {
  // Switch,
  Table,
} from 'antd';
import React, { useEffect, useState } from 'react';

type ProjectElementType = LIST.GetAllProject_Response['project'][number];

const columns: TableColumnsType<ProjectElementType> = [
  {
    title: 'projectName',
    width: 200,
    dataIndex: 'projectName',
    key: 'projectName',
    fixed: 'left',
  },
  {
    title: 'targetUrl',
    width: 200,
    dataIndex: 'targetUrl',
    key: 'targetUrl',
  },

  {
    title: 'targetIp',
    dataIndex: 'targetIp',
    key: 'targetIp',
    width: 150,
  },
  {
    title: 'superiorId',
    dataIndex: 'superiorId',
    key: 'superiorId',
    width: 150,
  },
  {
    title: 'orgName',
    dataIndex: 'orgName',
    key: 'orgName',
    width: 150,
  },
  {
    title: 'remark',
    dataIndex: 'remark',
    key: 'remark',
    width: 150,
  },
  {
    title: 'creatTime',
    dataIndex: 'creatTime',
    key: 'creatTime',
    width: 250,
  },

  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 250,
    render: () => <a>action</a>,
  },
];

const App: React.FC = () => {
  // const [fixedTop, setFixedTop] = useState(false);
  const [data, setData] = useState<ProjectElementType[]>([]);
  useEffect(() => {
    const init = async () => {
      // const res = await GetAllAsset();
      const res1 = await GetAllProject();
      console.log(
        '%c AT-[ res1 ]-248-「index」',
        'font-size:13px; background:pink; color:#bf2c9f;',
        `${new Date()},`,
        res1,
      );
      setData(res1.data.project);
    };
    init();
  }, []);

  return (
    <div>
      Project列表
      <Table
        columns={columns}
        dataSource={data}
        scroll={{ x: 1500 }}
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
    </div>
  );
};

export default App;
