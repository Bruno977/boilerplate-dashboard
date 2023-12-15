import Title from 'antd/es/typography/Title';
import { ContentAntd } from '../../styles/global';

import { TableAntd } from './style';

export function Simulacao() {
  return (
    <>
      <Title level={1} style={{ marginBottom: '40px' }}>
        Simulação
      </Title>
      <ContentAntd>
        <TableAntd
          bordered={false}
          scroll={{ x: 1300 }}
          columns={[
            {
              title: 'Banco Origem',
              dataIndex: 'originBank',
              key: 'originBank',
            },
            {
              title: 'Banco Operação',
              dataIndex: 'operationBank',
              key: 'operationBank',
            },
            {
              title: 'Contrato',
              dataIndex: 'contract',
              key: 'contract',
            },
            {
              title: 'Parcelas Pagas',
              dataIndex: 'installmentsPaid',
              key: 'installmentsPaid',
            },
            {
              title: 'Prazo',
              dataIndex: 'term',
              key: 'term',
            },
            {
              title: 'Taxa',
              dataIndex: 'rate',
              key: 'rate',
            },
            {
              title: 'Nome',
              dataIndex: 'name',
              key: 'name',
            },
            {
              title: 'Parcela Atual',
              dataIndex: 'currentInstallment',
              key: 'currentInstallment',
            },
            {
              title: 'Bruto',
              dataIndex: 'gross',
              key: 'gross',
            },
            {
              title: 'Saldo Devedor',
              dataIndex: 'outstandingBalance',
              key: 'outstandingBalance',
            },
            {
              title: 'Líquido',
              dataIndex: 'liquid',
              key: 'liquid ',
            },
            {
              title: 'Parcela Reduzida',
              dataIndex: 'reducedInstallment',
              key: 'reducedInstallment ',
            },
          ]}
          dataSource={[
            {
              key: '1',
              originBank: 500,
              operationBank: 0,
              contract: 0,
              installmentsPaid: 0,
              term: 0,
              rate: 0,
              name: 'asd',
              currentInstallment: 'asd',
              gross: 'asd',
              outstandingBalance: 'asd',
              liquid: 'asd',
              reducedInstallment: 'asd',
            },
            {
              key: '2',
              originBank: 500,
              operationBank: 0,
              contract: 0,
              installmentsPaid: 0,
              term: 0,
              rate: 0,
              name: 'asd',
              currentInstallment: 'asd',
              gross: 'asd',
              outstandingBalance: 'asd',
              liquid: 'asd',
              reducedInstallment: 'asd',
            },
            {
              key: '3',
              originBank: 500,
              operationBank: 0,
              contract: 0,
              installmentsPaid: 0,
              term: 0,
              rate: 0,
              name: 'asd',
              currentInstallment: 'asd',
              gross: 'asd',
              outstandingBalance: 'asd',
              liquid: 'asd',
              reducedInstallment: 'asd',
            },
          ]}
        />
      </ContentAntd>
    </>
  );
}
