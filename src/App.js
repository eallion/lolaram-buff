import { useState } from 'react';
import { Input, Space, ConfigProvider, theme, Table, Radio, Tag, Typography  } from 'antd';
import config, { types } from './config';
import getDataSource from './getDataSource';

const { Paragraph } = Typography;
const dataSource = getDataSource(config);

export default function Home() {
    const [keywords, setKeywords] = useState('');
    const [position, setPosition] = useState('全部');
    const [attr, setAttr] = useState('全部');

    const renderSingleAttr = (info, type) => {
        const configItem = types[type];
        const infoItem = info.find(item => item.type === type);
        if (infoItem) {
            return infoItem.type === 'qt' ?
                infoItem.value : (
                    <span className={`${configItem.enhance(infoItem.value) ? 'enhance' : 'abate'}`}>
                        {infoItem.value}{infoItem.type !== 'cd' && '%'}
                    </span>
                );
        } else {
            return '-';
        }
    }

    const createSort = (a, b, type) => {
        const aValue = a.info.find(item => item.type === type)?.value || 100;
        const bValue = b.info.find(item => item.type === type)?.value || 100;
        return aValue - bValue;
    }

    const getDataSource = () => {
        return dataSource
            .filter(item => position !== '全部' ? item.type.includes(position) : true)
            .filter(item => {
                return attr === '全部' ||
                    (attr === '增强' && item.status > 0) ||
                    (attr === '平衡' && item.status === 0) ||
                    (attr === '削弱' && item.status < 0) ||
                    (attr === '过分' && item.info.length >= 3)
            })
            .filter(item => {
                if (keywords) {
                    const sections = keywords.replace('，', ',').split(',').filter(i => i);
                    return sections.some(str => item.searchKey.includes(str.replaceAll(' ', '')));
                } else {
                    return true;
                }
            });
    }

    const getCopyText = ({ name, info }) => {
        if (info.length > 0) {
            return `${name}：${info.map(i => {
                const configItem = types[i.type];
                return i.type === 'qt' ? i.value.replace(/(<[\s\S]*?>)/g, '') : configItem.text.replace('value', i.value);
            }).join('，')}`;
        } else {
            return  `${name}：无修改`
        }
    }

    return (
        <ConfigProvider
            theme={{
                algorithm: theme.darkAlgorithm,
            }}
        >
            <div className="author" onClick={() => window.open('https://space.bilibili.com/3957795')}>@一度的豆豆桑</div>
            <div className="header">
                <h1 className="title">英雄联盟极地大乱斗平衡属性一览 (V13.10)</h1>
                <div className="filter">
                    <Input
                        className="filter-search"
                        size="large"
                        value={keywords}
                        onChange={({ target: { value }}) => setKeywords(value)}
                        placeholder="英雄名称/昵称，支持拼音与首字母，支持输入多个以逗号隔开"
                    />
                    <Radio.Group
                        className="filter-position"
                        value={position}
                        onChange={({ target: { value }}) => setPosition(value)}
                        size="large"
                        optionType="button"
                        options={['全部', '战士', '坦克', '辅助', '法师', '刺客', '射手']}
                    />
                    <Radio.Group
                        value={attr}
                        onChange={({ target: { value }}) => setAttr(value)}
                        size="large"
                        optionType="button"
                        options={['全部', '增强', '平衡', '削弱', '过分']}
                    />
                </div>
            </div>
            <div className="list">
                <Table
                    rowKey="name"
                    dataSource={getDataSource()}
                    pagination={false}
                    scroll={{ y: 'calc(100vh - 260px)' }}
                    columns={[{
                        title: '英雄',
                        dataIndex: 'name',
                        width: 250,
                        fixed: 'left',
                        render: (name, { avatar }) => (
                            <div className="column-name">
                                <img className="avatar" src={`${window.location.pathname}avatar/${avatar}.png`} alt={name} />
                                <span className="column-name-text">{name}</span>
                            </div>
                        ),
                    }, {
                        title: '属性',
                        dataIndex: 'status',
                        width: 120,
                        render: status => (
                            <>
                                {status > 0 && <Tag color="green">增强</Tag>}
                                {status === 0 && <Tag>平衡</Tag>}
                                {status < 0 && <Tag color="red">削弱</Tag>}
                            </>
                        ),
                    }, {
                        title: '属性总览',
                        dataIndex: 'info',
                        width: 300,
                        render: (info) => (
                            <Space direction="vertical">
                                {info.length === 0 ? <div>无修改</div> : (
                                    info.map((i, index) => {
                                        const configItem = types[i.type];
                                        return (
                                            <div
                                                key={index}
                                                dangerouslySetInnerHTML={{
                                                    __html: i.type === 'qt' ? i.value : configItem.text.replace('value', `<span class=${configItem.enhance(i.value) ? 'enhance' : 'abate'}>${i.value}</span>`),
                                                }}
                                            >
                                            </div>
                                        );
                                    })
                                )}
                            </Space>
                        ),
                    }, {
                        title: '输出',
                        dataIndex: 'sc',
                        width: 120,
                        defaultSortOrder: 'descend',
                        sorter: (a, b) => createSort(a, b, 'sc'),
                        render: (sc, { info }) => renderSingleAttr(info, 'sc'),
                    }, {
                        title: '承伤',
                        dataIndex: 'cs',
                        width: 120,
                        sorter: (a, b) => createSort(a, b, 'sc'),
                        render: (sc, { info }) => renderSingleAttr(info, 'cs'),
                    }, {
                        title: '一键复制',
                        dataIndex: 'operation',
                        width: 120,
                        fixed: 'right',
                        render: (_c, record) => <Paragraph copyable={{ text: getCopyText(record) }} />
                    }]}
                />
            </div>
       </ConfigProvider>
   )
}
