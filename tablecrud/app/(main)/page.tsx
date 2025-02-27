'use client';

import React from 'react';
import { Button, Card, Space, message } from 'antd';
import { ReloadOutlined } from '@ant-design/icons';
import DataTable from '@/app/components/DataTable';
import { useDataService } from '@/app/services/dataServices';

export default function HomePage() {
  const { data, loading, error, refreshData } = useDataService();
  
  // Show error message if fetch fails
  React.useEffect(() => {
    if (error) {
      message.error(`Failed to load data: ${error.message}`);
    }
  }, [error]);

  return (
    <div className="space-y-6">
      
      
      <Card>
        <DataTable data={data} loading={loading} />
      </Card>
    </div>
  );
}