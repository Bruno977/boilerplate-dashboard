import Title from 'antd/es/typography/Title';
import { ContentAntd } from '../../styles/global';

export function Dashboard() {
  return (
    <>
      <Title level={1} style={{ marginBottom: '40px' }}>
        Dashbaord
      </Title>
      <ContentAntd>content</ContentAntd>
    </>
  );
}
