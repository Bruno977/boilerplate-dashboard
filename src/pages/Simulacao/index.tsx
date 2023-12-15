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
              title: 'Proposta',
              dataIndex: 'proposal',
              key: 'proposal',
            },
            {
              title: 'Celular',
              dataIndex: 'phone',
              key: 'phone',
            },
            {
              title: 'Cpf',
              dataIndex: 'cpf',
              key: 'cpf',
            },
            {
              title: 'Data de Cadastro',
              dataIndex: 'dateRegister',
              key: 'dateRegister',
            },
            {
              title: 'Espécie',
              dataIndex: 'species',
              key: 'species',
            },
            {
              title: 'Matrícula',
              dataIndex: 'registration',
              key: 'registration',
            },
            {
              title: 'Nome',
              dataIndex: 'name',
              key: 'name',
            },
            {
              title: 'Parcela',
              dataIndex: 'portion',
              key: 'portion',
            },
            {
              title: 'Status',
              dataIndex: 'status',
              key: 'status',
            },
            {
              title: 'Url de Formalização',
              dataIndex: 'url',
              key: 'url',
            },
            {
              title: 'Valor de Aumento',
              dataIndex: 'value',
              key: 'value ',
            },
            {
              title: 'Resposta',
              dataIndex: 'response',
              key: 'response ',
            },
          ]}
          dataSource={[
            {
              key: '1',
              proposal: 500,
              phone: 0,
              cpf: 0,
              dateRegister: 0,
              species: 0,
              registration: 0,
              name: 'asd',
              portion: 'asd',
              status: 'asd',
              url: 'asd',
              value: 'asd',
              response: 'asd',
            },
            {
              key: '2',
              proposal: 500,
              phone: 0,
              cpf: 0,
              dateRegister: 0,
              species: 0,
              registration: 0,
              name: 'asd',
              portion: 'asd',
              status: 'asd',
              url: 'asd',
              value: 'asd',
              response: 'asd',
            },
            {
              key: '3',
              proposal: 500,
              phone: 0,
              cpf: 0,
              dateRegister: 0,
              species: 0,
              registration: 0,
              name: 'asd',
              portion: 'asd',
              status: 'asd',
              url: 'asd',
              value: 'asd',
              response: 'asd',
            },
          ]}
        />
      </ContentAntd>
    </>
  );
}
