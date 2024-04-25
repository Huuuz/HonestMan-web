import { GetAllAsset } from '@/services/ant-design-pro/list';
import type { TableColumnsType } from 'antd';
import {
  // Switch,
  Table,
} from 'antd';
import React, { useEffect, useState } from 'react';

type AssetsElementType = LIST.GetAllAsset_Response['asset'][number];

const columns: TableColumnsType<AssetsElementType> = [
  {
    title: 'title',
    width: 200,
    dataIndex: 'title',
    key: 'title',
    fixed: 'left',
  },
  {
    title: 'asOrganization',
    width: 200,
    dataIndex: 'asOrganization',
    key: 'asOrganization',
  },

  {
    title: 'city',
    dataIndex: 'city',
    key: 'city',
    width: 150,
  },
  {
    title: 'country',
    dataIndex: 'country',
    key: 'country',
    width: 150,
  },
  {
    title: 'domain',
    dataIndex: 'domain',
    key: 'domain',
    width: 150,
  },
  {
    title: 'host',
    dataIndex: 'host',
    key: 'host',
    width: 150,
  },
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
    width: 150,
  },
  {
    title: 'inquire',
    dataIndex: 'inquire',
    key: 'inquire',
    width: 150,
  },
  {
    title: 'ip',
    dataIndex: 'ip',
    key: 'ip',
    width: 150,
  },
  {
    title: 'lcp',
    dataIndex: 'lcp',
    key: 'lcp',
    width: 150,
  },
  {
    title: 'link',
    dataIndex: 'link',
    key: 'link',
    width: 150,
  },
  {
    title: 'port',
    dataIndex: 'port',
    key: 'port',
    width: 150,
  },
  {
    title: 'projectId',
    dataIndex: 'projectId',
    key: 'projectId',
    width: 150,
  },
  {
    title: 'protocol',
    dataIndex: 'protocol',
    key: 'protocol',
    width: 150,
  },
  {
    title: 'remark',
    dataIndex: 'remark',
    key: 'remark',
    width: 150,
  },
  {
    title: 'survive',
    dataIndex: 'survive',
    key: 'survive',
    width: 150,
  },

  // {
  //   title: 'timeRecord',
  //   dataIndex: 'timeRecord',
  //   key: 'timeRecord',
  //   width: 150,
  // },

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
  const [data, setData] = useState<AssetsElementType[]>([]);
  useEffect(() => {
    const init = async () => {
      const res = await GetAllAsset();

      setData(res.data.asset);
    };
    init();
  }, []);

  return (
    <div>
      assets列表
      <Table
        columns={columns}
        dataSource={data}
        scroll={{ x: 100 }}
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
