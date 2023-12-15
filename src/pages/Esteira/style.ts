import { Table } from 'antd';
import styled from 'styled-components';

export const TableAntd = styled(Table)`
  tr td:first-child {
    font-weight: 500;
  }
  .ant-table-cell::before {
    display: none;
  }
`;
