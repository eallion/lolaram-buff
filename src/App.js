import { useState } from 'react';
import { Input, Space, ConfigProvider, theme, Table, Radio, Tag, Typography, Select, Modal, Badge } from 'antd';
import config, { types } from './config';
import updateConfig from './update/14.10';
import getDataSource from './getDataSource';

const { Paragraph } = Typography;
const dataSource = getDataSource(config);

export default function Home() {
    const isMobile = window.innerWidth <= 800;
    const [keywords, setKeywords] = useState('');
    const [position, setPosition] = useState('全部');
    const [attr, setAttr] = useState('全部');
    const [isOpen, setIsOpen] = useState(false);

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
                    const sections = keywords.toLowerCase()
                        .replace('，', ',')
                        .replace(' ', ',')
                        .split(',')
                        .filter(i => i);
                    return sections.some(str => item.searchKey.includes(str.replaceAll(' ', '')));
                } else {
                    return true;
                }
            });
    }

    const getCopyText = (name, info) => {
        if (info.length > 0) {
            return `${name}：${info.map(i => {
                const configItem = types[i.type];
                return i.type === 'qt' ? i.value.replace(/(<[\s\S]*?>)/g, '') : configItem.text.replace('value', i.value);
            }).join('，')}`;
        } else {
            return  `${name}：无修改`
        }
    }

    const renderStatus = status => (
        <>
            {status > 0 && <Tag color="green">增强</Tag>}
            {status === 0 && <Tag>平衡</Tag>}
            {status < 0 && <Tag color="red">削弱</Tag>}
        </>
    );

    const renderInfo = info => (
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
    );

    const renderCopy = (name, info) => <Paragraph copyable={{ text: getCopyText(name, info) }} />;

    const positionDataSource = ['全部', '战士', '坦克', '辅助', '法师', '刺客', '射手'];
    const statusDataSource = ['全部', '增强', '平衡', '削弱', '过分'];

    return (
        <ConfigProvider
            theme={{
                algorithm: theme.darkAlgorithm,
            }}
        >
            <div className="update" onClick={() => setIsOpen(true)}>
                <Badge dot>14.10版本更新内容</Badge>
            </div>
            <div className="header">
                <h1 className="title">英雄联盟极地大乱斗平衡属性一览 (V14.10)</h1>
                <div className="filter">
                    <Input
                        className="filter-search"
                        size="large"
                        value={keywords}
                        onChange={({ target: { value }}) => setKeywords(value)}
                        placeholder="英雄名称/昵称，支持拼音与首字母，支持输入多个以逗号隔开"
                    />
                    {isMobile ? (
                        <div className="mobile-filter">
                            <Select
                                className="mobile-filter-position"
                                value={position}
                                onChange={value => setPosition(value)}
                                size="large"
                                options={positionDataSource.map(item => ({ label: item === '全部' ? '全部定位' : item, value: item }))}
                            />
                            <Select
                                value={attr}
                                onChange={value => setAttr(value)}
                                size="large"
                                options={statusDataSource.map(item => ({ label: item === '全部' ? '全部属性' : item, value: item }))}
                            />
                        </div>
                    ) : (
                        <>
                            <Radio.Group
                                className="filter-position"
                                value={position}
                                onChange={({ target: { value }}) => setPosition(value)}
                                size="large"
                                optionType="button"
                                options={positionDataSource}
                            />
                            <Radio.Group
                                value={attr}
                                onChange={({ target: { value }}) => setAttr(value)}
                                size="large"
                                optionType="button"
                                options={['全部', '增强', '平衡', '削弱', '过分']}
                            />
                        </>
                    )}
                </div>
            </div>
            <div className="list">
                <Table
                    size={isMobile ? 'small' : 'middle'}
                    rowKey="name"
                    dataSource={getDataSource()}
                    pagination={false}
                    scroll={{ y: isMobile ? 'calc(100vh - 320px)' : 'calc(100vh - 260px)' }}
                    columns={isMobile ? [{
                        title: '英雄',
                        dataIndex: 'name',
                        render: (name, { avatar, status, info }) => (
                            <div>
                                <div className="column-name">
                                    <img className="avatar" src={`${window.location.pathname}avatar/${avatar}.png`} alt={name} />
                                    <span className="column-name-text">{name}</span>
                                    &nbsp;
                                    {renderStatus(status)}
                                </div>
                                {renderInfo(info)}
                            </div>
                        ),
                    }] : [{
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
                        render: renderStatus,
                    }, {
                        title: '属性总览',
                        dataIndex: 'info',
                        width: 300,
                        render: renderInfo,
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
                        sorter: (a, b) => createSort(a, b, 'cs'),
                        render: (sc, { info }) => renderSingleAttr(info, 'cs'),
                    }, {
                        title: '一键复制',
                        dataIndex: 'operation',
                        width: 120,
                        fixed: 'right',
                        render: (_c, { name, info }) => renderCopy(name, info),
                    }]}
                />
            </div>
            <div className="time">更新时间：2024/05/15&nbsp;22:00:00</div>
            <Modal
                title="版本更新"
                open={isOpen}
                onCancel={() => setIsOpen(false)}
                footer={false}
            >
                <Table
                    size="small"
                    rowKey="avatar"
                    dataSource={updateConfig}
                    scroll={{ y: '60vh' }}
                    pagination={false}
                    columns={[{
                        title: '英雄',
                        dataIndex: 'avatar',
                        render: (avatar, { info }) => {
                            const name = config.find(item => item.avatar === avatar).name;
                            return (
                                <div>
                                    <div className="column-name">
                                        <img className="avatar" src={`${window.location.pathname}avatar/${avatar}.png`} alt={name} />
                                        <span className="column-name-text">{name}</span>
                                        &nbsp;
                                        {renderStatus(info.reduce((total, item) => item.status + total, 0))}
                                    </div>
                                    {info.map(({ type, from, to, status, text }) => {
                                        const configItem = types[type];
                                        return (
                                            <div
                                                dangerouslySetInnerHTML={{
                                                    __html: type === 'qt' ? text : (
                                                        configItem.text.replace('value', `<span class='info'>${from}</span>`) +
                                                        `→<span class='${status > 0 ? 'enhance' : 'abate'}'>${to}</span>${type === 'cd' ? '' : '%'}`
                                                    ),
                                                }}
                                            >
                                            </div>
                                        );
                                    })}
                                </div>
                            );
                        },
                    }]}
                />
            </Modal>
        </ConfigProvider>
   );
}
