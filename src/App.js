import { Input, Space } from 'antd';
import config from './config';
import Item from './item';

const { Search } = Input;

export default function Home() {
  return (
      <main>
        <div className="header">
          <Search />
        </div>
        <div className="list">
          <Space size={[8, 16]} wrap>
            {config.map(item => <Item key={item.name} {...item} />)}
          </Space>
        </div>
      </main>
  )
}
