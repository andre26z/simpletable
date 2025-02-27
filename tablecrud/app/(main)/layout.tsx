'use client';

import React from 'react';
import { Layout, Menu, theme } from 'antd';
import type { MenuProps } from 'antd';

const { Content, Sider } = Layout;

// Define simple menu items for Project A and Project B
const sidebarItems: MenuProps['items'] = [
  {
    key: 'projectA',
    label: 'Project A',
  },
  {
    key: 'projectB',
    label: 'Project B',
  }
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout className="min-h-screen">
      <Layout>
        <Sider width={200} style={{ background: colorBgContainer }}>
          <div className="p-4 font-bold text-lg">Projects</div>
          <Menu
            mode="inline"
            defaultSelectedKeys={['projectA']}
            style={{ height: '100%', borderRight: 0 }}
            items={sidebarItems}
          />
        </Sider>
        <Layout className="p-0 px-6 pb-6">
          <Content
            className="p-6 m-0 min-h-[280px] mt-6"
            style={{
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}