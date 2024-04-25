import { Skeleton, Space, Spin } from 'antd';
import React from 'react';
import Styles from './index.less';
const SearchPage: React.FC<{
  LeftComponent: any;
  RightComponent: any;
  LeftComponentLoading: boolean;
  RightComponentLoading: boolean;
}> = ({ LeftComponent, RightComponent, RightComponentLoading, LeftComponentLoading }) => {
  return (
    <div className={Styles.Main}>
      <div className={Styles.left}>
        {LeftComponentLoading ? (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
            }}
          >
            <div style={{ flex: 1 }}>
              <br />
              <Space size={'large'}>
                <Skeleton.Button active={true} size={'small'} shape={'default'} block={true} />
                <Skeleton.Button active={true} size={'small'} shape={'default'} block={true} />
              </Space>
              <br />
              <br />
              <Space>
                <Skeleton.Button active={true} size={'small'} shape={'default'} block={true} />
                <Skeleton.Input active={true} size={'small'} />
              </Space>
              <br />
              <br />
              <Space>
                <Skeleton.Button active={true} size={'small'} shape={'default'} block={true} />
                <Skeleton.Input active={true} size={'small'} />
              </Space>
              <br />
              <br />
              <Space>
                <Skeleton.Button active={true} size={'small'} shape={'default'} block={true} />
                <Skeleton.Input active={true} size={'small'} />
              </Space>
              <br />
              <br />
              <Space>
                <Skeleton.Button active={true} size={'small'} shape={'default'} block={true} />
                <Skeleton.Input active={true} size={'small'} />
              </Space>
              <br />
              <br />
              <Space>
                <Skeleton.Button active={true} size={'small'} shape={'default'} block={true} />
                <Skeleton.Input active={true} size={'small'} />
              </Space>
              <br />
              <br />
              <Space>
                <Skeleton.Button active={true} size={'small'} shape={'default'} block={true} />
                <Skeleton.Input active={true} size={'small'} />
              </Space>
              <br />
              <br />
              <Space>
                <Skeleton.Button active={true} size={'small'} shape={'default'} block={true} />
                <Skeleton.Input active={true} size={'small'} />
              </Space>
              <br />
              <br />
              <Space>
                <Skeleton.Button active={true} size={'small'} shape={'default'} block={true} />
                <Skeleton.Input active={true} size={'small'} />
              </Space>
              <br />
              <br />
              <Space>
                <Skeleton.Button active={true} size={'small'} shape={'default'} block={true} />
                <Skeleton.Input active={true} size={'small'} />
              </Space>
              <br />
              <br />
              <Space>
                <Skeleton.Button active={true} size={'small'} shape={'default'} block={true} />
                <Skeleton.Input active={true} size={'small'} />
              </Space>
              <br />
              <br />
              <Space>
                <Skeleton.Button active={true} size={'small'} shape={'default'} block={true} />
                <Skeleton.Input active={true} size={'small'} />
              </Space>
              <br />
            </div>
            <div style={{ height: 'auto' }}>
              <br />
              <Skeleton.Input active={true} size={'small'} />
              <br />
              <br />
            </div>
          </div>
        ) : (
          LeftComponent
        )}
      </div>
      {RightComponentLoading ? <Spin /> : <div className={Styles.right}>{RightComponent}</div>}
    </div>
  );
};

export default SearchPage;
