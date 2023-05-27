export const types = {
    damage: {
        text: '输出：{value}%',
        enhance: (value) => value > 100,
    },
    take: {
        text: '承伤{value}%',
        enhance: (value) => value > 100,
    },
    health: {
        text: '治疗：{value}%',
        enhance: (value) => value > 0,
    },
    shield: {
        text: '护盾：{value}%',
        enhance: (value) => value > 0,
    },
    resource: {
        text: '施法资源回复：{value}%',
        enhance: (value) => value > 0,
    },
    tenacity: {
        text: '韧性：{value}%',
        enhance: (value) => value > 0,
    },
    cd: {
        text: '技能急速：{value}',
        enhance: (value) => value > 0,
    },
};

export default [{
    name: '山隐之焰-奥恩',
    avatar: 'ae',
    alias: ['aoen', 'shanyang'],
    info: [{
        type: 'damage',
        value: 90,
    }, {
        type: 'take',
        value: 105,
    }],
    type: '战士',
}, {
    name: '时间奇才-艾克',
    avatar: 'ak',
    alias: ['aike'],
    info: [{
        type: 'damage',
        value: 110,
    }, {
        type: 'tenacity',
        value: 20,
    }],
    type: '刺客',
}];