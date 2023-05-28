export const types = {
    sc: {
        text: '输出：value%',
        enhance: (value) => value > 100,
    },
    cs: {
        text: '承伤：value%',
        enhance: (value) => value < 100,
    },
    zl: {
        text: '治疗：value%',
        enhance: (value) => value.startsWith('+'),
    },
    hd: {
        text: '护盾：value%',
        enhance: (value) => value.startsWith('+'),
    },
    zy: {
        text: '施法资源回复：value%',
        enhance: (value) => value.startsWith('+'),
    },
    rx: {
        text: '韧性：value%',
        enhance: (value) => value.startsWith('+'),
    },
    cd: {
        text: '技能急速：value',
        enhance: (value) => value.startsWith('+'),
    },
    gx: {
        text: '攻速收益：value%',
        enhance: (value) => value.startsWith('+'),
    },
};

export default [{
    name: '山隐之焰-奥恩',
    avatar: 'ae',
    alias: ['山羊'],
    info: [{
        type: 'sc',
        value: 90,
    }, {
        type: 'cs',
        value: 105,
    }],
    type: ['战士', '坦克'],
}, {
    name: '时间刺客-艾克',
    avatar: 'ak',
    alias: [],
    info: [{
        type: 'sc',
        value: 110,
    }, {
        type: 'rx',
        value: '+20',
    }],
    type: ['刺客'],
}, {
    name: '离群之刺-阿卡丽',
    avatar: 'akl',
    alias: [],
    info: [{
        type: 'sc',
        value: 110,
    }, {
        type: 'cs',
        value: 85,
    }, {
        type: 'rx',
        value: '+20',
    }, {
        type: 'zy',
        value: '+20',
    }],
    type: ['刺客'],
}, {
    name: '影哨-阿克尚',
    avatar: 'aks',
    alias: ['阿克曼'],
    info: [{
        type: 'sc',
        value: 105,
    }, {
        type: 'cs',
        value: 95,
    }],
    type: ['射手', '刺客'],
}, {
    name: '狂战士-奥拉夫',
    avatar: 'alf',
    alias: [],
    info: [{
        type: 'sc',
        value: 95,
    }, {
        type: 'zl',
        value: '+20',
    }],
    type: ['战士'],
}, {
    name: '殇之木乃伊-阿木木',
    avatar: 'amm',
    alias: [],
    info: [{
        type: 'cs',
        value: 95,
    }],
    type: ['坦克'],
}, {
    name: '黑暗之女-安妮',
    avatar: 'an',
    alias: [],
    info: [{
        type: 'sc',
        value: 95,
    }, {
        type: 'cs',
        value: 105,
    }, {
        type: 'hd',
        value: '-20',
    }],
    type: ['法师'],
}, {
    name: '翠神-艾翁',
    avatar: 'aw',
    alias: ['蔡徐坤', '坤坤'],
    info: [{
        type: 'sc',
        value: 95,
    }],
    type: ['辅助'],
}, {
    name: '愁云使者-薇古丝',
    avatar: 'aybb',
    alias: ['熬夜波比'],
    info: [],
    type: ['法师'],
}, {
    name: '圣锤之毅-波比',
    avatar: 'bb',
    alias: [],
    info: [],
    type: ['战士', '坦克'],
}, {
    name: '弗雷尔卓德之心-布隆',
    avatar: 'bl',
    alias: [],
    info: [],
    type: ['坦克', '辅助'],
}, {
    name: '狂野女猎手-奈德丽',
    avatar: 'bn',
    alias: ['豹女'],
    info: [{
        type: 'sc',
        value: 110,
    }],
    type: ['法师'],
}, {
    name: '冰霜女巫-丽桑卓',
    avatar: 'bn2',
    alias: ['冰女'],
    info: [{
        type: 'sc',
        value: 95,
    }],
    type: ['法师'],
}, {
    name: '魂锁典狱长-锤石',
    avatar: 'cs',
    alias: [],
    info: [],
    type: ['辅助', '坦克'],
}, {
    name: '海洋之灾-普朗克',
    avatar: 'cz',
    alias: ['船长'],
    info: [],
    type: ['刺客', '战士'],
}, {
    name: '远古恐惧-费德提克',
    avatar: 'dcr',
    alias: ['稻草人'],
    info: [],
    type: ['刺客', '法师'],
}, {
    name: '虚空恐惧-科加斯',
    avatar: 'dcz',
    alias: ['大虫子'],
    info: [],
    type: ['坦克', '法师'],
}, {
    name: '荣耀行刑官-德莱文',
    avatar: 'dlw',
    alias: ['文森特'],
    info: [{
        type: 'sc',
        value: 105,
    }, {
        type: 'cs',
        value: 95,
    }],
    type: ['射手'],
}, {
    name: '刀锋舞者-艾瑞莉娅',
    avatar: 'dm',
    alias: ['刀妹'],
    info: [],
    type: ['战士'],
}, {
    name: '扭曲树精-茂凯',
    avatar: 'ds',
    alias: ['大树', '老树'],
    info: [{
        type: 'sc',
        value: 80,
    }, {
        type: 'cs',
        value: 105,
    }],
    type: ['法师', '坦克'],
}, {
    name: '大发明家-黑默丁格',
    avatar: 'dt',
    alias: ['大头', '炮台'],
    info: [{
        type: 'sc',
        value: 91,
    }, {
        type: 'cs',
        value: 110,
    }],
    type: ['法师'],
}, {
    name: '虚空之眼-维克兹',
    avatar: 'dy',
    alias: ['大眼'],
    info: [{
        type: 'sc',
        value: 95,
    }, {
        type: 'cs',
        value: 105,
    }],
    type: ['法师'],
}, {
    name: '深渊巨口-克格莫',
    avatar: 'dz',
    alias: ['大嘴'],
    info: [{
        type: 'sc',
        value: 88,
    }, {
        type: 'cs',
        value: 110,
    }],
    type: ['射手', '法师'],
}, {
    name: '无畏战车-厄加特',
    avatar: 'ejt',
    alias: ['老徐'],
    info: [{
        type: 'cs',
        value: 110,
    }],
    type: ['战士'],
}, {
    name: '荒漠屠夫-雷克顿',
    avatar: 'ey',
    alias: ['鳄鱼'],
    info: [{
        type: 'sc',
        value: 105,
    }, {
        type: 'zl',
        value: '+20',
    }],
    type: ['战士'],
}, {
    name: '探险家-伊泽瑞尔',
    avatar: 'ez',
    alias: ['EZ', '黄毛'],
    info: [{
        type: 'sc',
        value: 95,
    }],
    type: ['射手', '法师'],
}, {
    name: '冰晶凤凰-艾尼维亚',
    avatar: 'fh',
    alias: ['冰鸟'],
    info: [],
    type: ['法师'],
}, {
    name: '英勇投弹手-库奇',
    avatar: 'fj',
    alias: ['飞机'],
    info: [{
        type: 'cs',
        value: 95,
    }],
    type: ['法师', '射手'],
}, {
    name: '风暴之怒-迦娜',
    avatar: 'fn',
    alias: ['风女'],
    info: [{
        type: 'sc',
        value: 95,
    }, {
        type: 'cs',
        value: 105,
    }, {
        type: 'hd',
        value: '-10',
    }],
    type: ['法师', '辅助'],
}, {
    name: '发条魔灵-奥莉安娜',
    avatar: 'ft',
    alias: [],
    info: [],
    type: ['法师'],
}, {
    name: '破败之王-佛耶戈',
    avatar: 'fyg',
    alias: ['痛男'],
    info: [{
        type: 'sc',
        value: 105,
    }, {
        type: 'cs',
        value: 95,
    }],
    type: ['战士'],
}, {
    name: '寡妇制造者-伊芙琳',
    avatar: 'gf',
    alias: [],
    info: [{
        type: 'sc',
        value: 110,
    }, {
        type: 'cs',
        value: 85,
    }, {
        type: 'rx',
        value: '+20',
    }],
    type: ['刺客'],
},  {
    name: '光辉女郎-拉克丝',
    avatar: 'gh',
    alias: ['光女'],
    info: [{
        type: 'sc',
        value: 85,
    }, {
        type: 'cs',
        value: 110,
    }],
    type: ['法师'],
},  {
    name: '德玛西亚之力-盖伦',
    avatar: 'gl',
    alias: [],
    info: [{
        type: 'cs',
        value: 95,
    }, {
        type: 'qt',
        value: '<span class="info">W</span>技能叠加抗性速度<span class="enhance">+100%</span>',
        enhance: true,
    }],
    type: ['战士'],
},  {
    name: '沙漠死神-内瑟斯',
    avatar: 'gt',
    alias: ['狗头'],
    info: [{
        type: 'sc',
        value: 95,
    }, {
        type: 'cs',
        value: 105,
    }],
    type: ['战士', '法师'],
},  {
    name: '不灭狂雷-沃利贝尔',
    avatar: 'gx',
    alias: ['狗熊'],
    info: [],
    type: ['战士', '法师'],
},  {
    name: '齐天大圣-孙悟空',
    avatar: 'h',
    alias: ['猴'],
    info: [],
    type: ['战士', '刺客'],
},  {
    name: '寒冰射手-艾希',
    avatar: 'hb',
    alias: ['刮痧'],
    info: [{
        type: 'sc',
        value: 85,
    }, {
        type: 'cs',
        value: 105,
    }, {
        type: 'cd',
        value: '-20',
    }, {
        type: 'gx',
        value: '+2.5',
    }, {
        type: 'qt',
        value: '<span class="info">W</span>冷却时间18-4秒削弱到<span class="abate">21-9秒</span>',
        enhance: false,
    }],
    type: ['射手', '辅助'],
},  {
    name: '复仇之矛-卡莉斯塔',
    avatar: 'hbx',
    alias: ['滑板鞋'],
    info: [{
        type: 'sc',
        value: 110,
    }, {
        type: 'cs',
        value: 90,
    }],
    type: ['射手'],
},  {
    name: '沙漠皇帝-阿兹尔',
    avatar: 'hj',
    alias: ['黄鸡'],
    info: [{
        type: 'sc',
        value: 105,
    }, {
        type: 'cs',
        value: 95,
    }, {
        type: 'cd',
        value: '+20',
    }, {
        type: 'gx',
        value: '+2.5',
    }],
    type: ['法师'],
},  {
    name: '九尾妖狐-阿狸',
    avatar: 'hl',
    alias: ['狐狸'],
    info: [],
    type: ['法师'],
},  {
    name: '复仇焰魂-布兰德',
    avatar: 'hn',
    alias: ['火男'],
    info: [{
        type: 'sc',
        value: 90,
    }, {
        type: 'cs',
        value: 105,
    }],
    type: ['法师'],
},  {
    name: '德玛西亚皇子-嘉文四世',
    avatar: 'hz',
    alias: [],
    info: [{
        type: 'cs',
        value: 95,
    }],
    type: ['战士', '刺客'],
},  {
    name: '影流之主-劫',
    avatar: 'j',
    alias: [],
    info: [{
        type: 'cs',
        value: 90,
    }, {
        type: 'rx',
        value: '+20',
    }, {
        type: 'zy',
        value: '+20',
    }],
    type: ['战士', '刺客'],
},  {
    name: '戏命师-烬',
    avatar: 'j2',
    alias: [],
    info: [{
        type: 'sc',
        value: 90,
    }],
    type: ['射手'],
},  {
    name: '灵罗娃娃-格温',
    avatar: 'jd',
    alias: ['剪刀'],
    info: [{
        type: 'sc',
        value: 105,
    }],
    type: ['战士'],
},  {
    name: '无双剑姬-菲奥娜',
    avatar: 'jj',
    alias: [],
    info: [{
        type: 'cs',
        value: 95,
    }],
    type: ['战士'],
},  {
    name: '武器大师-贾克斯',
    avatar: 'jks',
    alias: [],
    info: [{
        type: 'cs',
        value: 97,
    }],
    type: ['战士'],
},  {
    name: '暴走萝莉-金克丝',
    avatar: 'jks2',
    alias: [],
    info: [{
        type: 'sc',
        value: 90,
    }, {
        type: 'cs',
        value: 105,
    }],
    type: ['射手'],
},  {
    name: '瓦罗兰之盾-塔里克',
    avatar: 'jl',
    alias: ['宝石', '基佬'],
    info: [{
        type: 'cs',
        value: 105,
    }],
    type: ['辅助', '坦克'],
},  {
    name: '荆棘之兴-婕拉',
    avatar: 'jl2',
    alias: [],
    info: [{
        type: 'sc',
        value: 90,
    }, {
        type: 'cs',
        value: 105,
    }],
    type: ['法师'],
}, {
    name: '正义巨像-加里奥',
    avatar: 'jla',
    alias: [],
    info: [{
        type: 'sc',
        value: 95,
    }, {
        type: 'cs',
        value: 105,
    }],
    type: ['法师',  '坦克'],
}, {
    name: '巨魔之王-特朗德尔',
    avatar: 'jm',
    alias: [],
    info: [{
        type: 'cs',
        value: 105,
    }, {
        type: 'zl',
        value: '-5',
    }],
    type: ['战士',  '辅助'],
}, {
    name: '暗裔剑魔-亚托克斯',
    avatar: 'jm2',
    alias: [],
    info: [{
        type: 'cs',
        value: 95,
    }, {
        type: 'rx',
        value: '+20',
    }],
    type: ['战士'],
}, {
    name: '牧魂人-约里克',
    avatar: 'jmr',
    alias: ['掘墓'],
    info: [],
    type: ['战士'],
}, {
    name: '蒸汽机器人-布里茨',
    avatar: 'jqr',
    alias: [],
    info: [],
    type: ['辅助'],
}, {
    name: '无极剑圣-易',
    avatar: 'js',
    alias: [],
    info: [{
        type: 'cs',
        value: 95,
    }],
    type: ['刺客', '战士'],
}, {
    name: '未来守护者-杰斯',
    avatar: 'js2',
    alias: [],
    info: [],
    type: ['刺客', '战士'],
}, {
    name: '酒桶-古拉加斯',
    avatar: 'jt',
    alias: [],
    info: [{
        type: 'cs',
        value: 95,
    }],
    type: ['法师', '战士', '坦克'],
}, {
    name: '皎月女神-戴安娜',
    avatar: 'jy',
    alias: [],
    info: [],
    type: ['法师', '战士'],
}, {
    name: '暴怒骑士-克烈',
    avatar: 'kl',
    alias: [],
    info: [],
    type: ['战士'],
}, {
    name: '狂暴之心-凯南',
    avatar: 'kn',
    alias: ['闪电松鼠'],
    info: [{
        type: 'cs',
        value: 95,
    }, {
        type: 'zy',
        value: '+20',
    }],
    type: ['法师', '刺客'],
}, {
    name: '卡牌大师-崔斯特',
    avatar: 'kp',
    alias: [],
    info: [],
    type: ['法师', '射手'],
}, {
    name: '虚空之女-卡莎',
    avatar: 'ks',
    alias: [],
    info: [{
        type: 'cs',
        value: 95,
    }],
    type: ['法师', '射手'],
}, {
    name: '虚空行者-卡萨丁',
    avatar: 'ksd',
    alias: [],
    info: [],
    type: ['法师', '战士'],
}, {
    name: '纳祖玛之傲-奎桑提',
    avatar: 'kst',
    alias: ['黑哥', '黑人亚索'],
    info: [{
        type: 'cs',
        value: 90,
    }],
    type: ['战士', '坦克'],
}, {
    name: '不祥之刃-卡特琳娜',
    avatar: 'kt',
    alias: [],
    info: [{
        type: 'rx',
        value: '+20',
    }, {
        type: 'cd',
        value: '+10',
    }],
    type: ['法师', '刺客'],
}, {
    name: '德玛西亚之翼-奎因',
    avatar: 'ky',
    alias: ['鸟人'],
    info: [{
        type: 'sc',
        value: 110,
    }, {
        type: 'cs',
        value: 90,
    }],
    type: ['射手', '刺客'],
}, {
    name: '影流之镰-凯隐',
    avatar: 'ky2',
    alias: [],
    info: [{
        type: 'sc',
        value: 105,
    }],
    type: ['战士', '刺客'],
}, {
    name: '幻翎-洛',
    avatar: 'l',
    alias: [],
    info: [],
    type: ['辅助'],
}, {
    name: '机械公敌-兰博',
    avatar: 'lb',
    alias: [],
    info: [{
        type: 'sc',
        value: 105,
    }, {
        type: 'cs',
        value: 95,
    }],
    type: ['法师', '战士'],
}, {
    name: '披甲龙龟-拉莫斯',
    avatar: 'lg',
    alias: [],
    info: [],
    type: ['坦克', '战士'],
}, {
    name: '炼金术师-辛吉德',
    avatar: 'lj',
    alias: [],
    info: [{
        type: 'sc',
        value: 90,
    }, {
        type: 'cs',
        value: 105,
    }],
    type: ['坦克', '战士'],
}, {
    name: '仙灵女巫-露露',
    avatar: 'll',
    alias: [],
    info: [{
        type: 'sc',
        value: 105
    }],
    type: ['辅助'],
}, {
    name: '龙血武姬-希瓦娜',
    avatar: 'ln',
    alias: ['龙女'],
    info: [{
        type: 'sc',
        value: 95
    }, {
        type: 'cs',
        value: 95,
    }],
    type: ['法师', '战士'],
}, {
    name: '炼金男爵-烈娜塔',
    avatar: 'lnt',
    alias: [],
    info: [{
        type: 'sc',
        value: 95
    }, {
        type: 'cs',
        value: 105,
    }, {
        type: 'hd',
        value: '-20',
    }],
    type: ['辅助'],
}, {
    name: '祖安怒兽-沃里克',
    avatar: 'lr',
    alias: ['狼人'],
    info: [{
        type: 'sc',
        value: 105
    }, {
        type: 'cs',
        value: 95,
    }],
    type: ['战士'],
}, {
    name: '瘟疫之源-图奇',
    avatar: 'ls',
    alias: ['老鼠'],
    info: [],
    type: ['射手', '法师'],
}, {
    name: '亡灵战神-塞恩',
    avatar: 'lsj',
    alias: ['老司机'],
    info: [{
        type: 'sc',
        value: 90
    }, {
        type: 'cs',
        value: 110,
    }, {
        type: 'cd',
        value: '-20',
    }, {
        type: 'rx',
        value: '-20',
    }, {
        type: 'hd',
        value: '-20',
    }, {
        type: 'qt',
        value: '被动形态的生命偷取： 100% → <span class="abate">50%</span>',
        enhance: false,
    }],
    type: ['战士', '坦克'],
}, {
    name: '铸星龙王-奥瑞利安·索尔',
    avatar: 'lw',
    alias: [],
    info: [{
        type: 'qt',
        value: '<span class="info">E</span>冷却时间12秒削弱至<span  class="abate">16秒</span>',
        enhance: false,
    }],
    type: ['法师'],
}, {
    name: '圣枪游侠-卢锡安',
    avatar: 'lxa',
    alias: ['奥巴马', '双枪'],
    info: [{
        type: 'sc',
        value: 105,
    }, {
        type: 'cs',
        value: 95,
    }, {
        type: 'rx',
        value: '+20',
    }],
    type: ['射手'],
}, {
    name: '战争女神-希维尔',
    avatar: 'lzm',
    alias: ['轮子妈',],
    info: [{
        type: 'sc',
        value: 85,
    }, {
        type: 'cs',
        value: 105,
    }],
    type: ['射手'],
}, {
    name: '祖安狂人-蒙多',
    avatar: 'md',
    alias: [],
    info: [{
        type: 'sc',
        value: 90,
    }, {
        type: 'cs',
        value: 110,
    }, {
        type: 'zl',
        value: '-10',
    }],
    type: ['战士', '坦克'],
}, {
    name: '虚空先知-马尔扎哈',
    avatar: 'mezh',
    alias: [],
    info: [{
        type: 'sc',
        value: 92,
    }, {
        type: 'cs',
        value: 108,
    }],
    type: ['法师'],
}, {
    name: '堕落天使-莫甘娜',
    avatar: 'mgn',
    alias: [],
    info: [{
        type: 'sc',
        value: 94,
    }, {
        type: 'cs',
        value: 105,
    }],
    type: ['法师', '辅助'],
}, {
    name: '魔法猫咪-悠米',
    avatar: 'mm',
    alias: [],
    info: [{
        type: 'sc',
        value: 105,
    }],
    type: ['辅助'],
}, {
    name: '盲僧-李青',
    avatar: 'ms',
    alias: ['瞎子'],
    info: [{
        type: 'sc',
        value: 105,
    }, {
        type: 'cs',
        value: 95,
    }, {
        type: 'zl',
        value: '+20',
    }, {
        type: 'zy',
        value: '+20',
    }],
    type: ['战士'],
}, {
    name: '永恒梦魇-魔腾',
    avatar: 'my',
    alias: [],
    info: [{
        type: 'sc',
        value: 110,
    }, {
        type: 'cs',
        value: 85,
    }, {
        type: 'zl',
        value: '+20',
    }],
    type: ['战士', '刺客'],
}, {
    name: '蛮族之王-泰达米尔',
    avatar: 'mz',
    alias: ['蛮子'],
    info: [{
        type: 'sc',
        value: 115,
    }, {
        type: 'cs',
        value: 85,
    }, {
        type: 'zl',
        value: '+40',
    }],
    type: ['战士', '刺客'],
}, {
    name: '刀锋之影-泰隆',
    avatar: 'nd',
    alias: ['男刀'],
    info: [{
        type: 'sc',
        value: 105,
    }, {
        type: 'cs',
        value: 95,
    }, {
        type: 'rx',
        value: '+20',
    }],
    type: ['战士', '刺客'],
}, {
    name: '迷失之牙-纳尔',
    avatar: 'ne',
    alias: [],
    info: [{
        type: 'cs',
        value: 95,
    }],
    type: ['战士'],
}, {
    name: '皮城女警-凯特琳',
    avatar: 'nj',
    alias: [],
    info: [{
        type: 'sc',
        value: 95,
    }, {
        type: 'cs',
        value: 105,
    }],
    type: ['射手'],
}, {
    name: '万花通灵-妮蔻',
    avatar: 'nk',
    alias: [],
    info: [],
    type: ['法师'],
}, {
    name: '不羁之悦-尼菈',
    avatar: 'nl',
    alias: [],
    info: [{
        type: 'sc',
        value: 95,
    }],
    type: ['射手'],
}, {
    name: '唤潮鲛姬-娜美',
    avatar: 'nm',
    alias: [],
    info: [{
        type: 'cs',
        value: 105,
    }, {
        type: 'zl',
        value: '-5',
    }],
    type: ['辅助'],
}, {
    name: '赏金猎人-厄运小姐',
    avatar: 'nq',
    alias: ['女枪', '哈哈哈'],
    info: [{
        type: 'sc',
        value: 90,
    }, {
        type: 'cs',
        value: 115,
    }],
    type: ['射手', '法师'],
}, {
    name: '法外狂徒-格雷福斯',
    avatar: 'nq2',
    alias: ['男枪'],
    info: [],
    type: ['射手', '战士'],
}, {
    name: '诺克萨斯之手-德莱厄斯',
    avatar: 'ns',
    alias: ['诺手'],
    info: [],
    type: ['战士'],
}, {
    name: '牛头酋长-阿利斯塔',
    avatar: 'nt',
    alias: [],
    info: [{
        type: 'sc',
        value: 95,
    }, {
        type: 'cs',
        value: 110,
    }, {
        type: 'zl',
        value: '-20',
    }],
    type: ['辅助', '坦克'],
}, {
    name: '血港鬼影-派克',
    avatar: 'pk',
    alias: [],
    info: [{
        type: 'sc',
        value: 110,
    }, {
        type: 'cs',
        value: 85,
    }],
    type: ['辅助', '刺客'],
}, {
    name: '不屈之枪-潘森',
    avatar: 'ps',
    alias: ['哦哦哦'],
    info: [],
    type: ['战士', '刺客'],
}, {
    name: '青钢影-卡密尔',
    avatar: 'qgy',
    alias: [],
    info: [{
        type: 'sc',
        value: 105,
    }, {
        type: 'cs',
        value: 95,
    }, {
        type: 'hd',
        value: '+20',
    }],
    type: ['战士'],
}, {
    name: '永猎双子-千珏',
    avatar: 'qj',
    alias: [],
    info: [{
        type: 'sc',
        value: 110,
    }, {
        type: 'cs',
        value: 90,
    }],
    type: ['射手'],
}, {
    name: '琴瑟仙女-娑娜',
    avatar: 'qn',
    alias: ['琴女'],
    info: [{
        type: 'sc',
        value: 95,
    }, {
        type: 'cs',
        value: 110,
    }, {
        type: 'cd',
        value: '-20',
    }, {
        type: 'hd',
        value: '-10',
    }],
    type: ['辅助'],
}, {
    name: '元素女皇-奇亚娜',
    avatar: 'qyn',
    alias: ['草履虫'],
    info: [{
        type: 'sc',
        value: 115,
    }, {
        type: 'cs',
        value: 80,
    }, {
        type: 'rx',
        value: '+20',
    }],
    type: ['刺客'],
}, {
    name: '熔铁少女-芮尔',
    avatar: 're',
    alias: [],
    info: [{
        type: 'sc',
        value: 95,
    }, {
        type: 'cs',
        value: 105,
    }, {
        type: 'zl',
        value: '-10',
    }, {
        type: 'hd',
        value: '-10',
    }],
    type: ['辅助'],
}, {
    name: '战争之影-赫卡里姆',
    avatar: 'rm',
    alias: ['人马'],
    info: [{
        type: 'sc',
        value: 105,
    }, {
        type: 'cs',
        value: 95,
    }, {
        type: 'zl',
        value: '+20',
    }],
    type: ['战士'],
}, {
    name: '曙光女神-蕾欧娜',
    avatar: 'rn',
    alias: ['日女'],
    info: [{
        type: 'sc',
        value: 90,
    }, {
        type: 'cs',
        value: 105,
    }],
    type: ['辅助', '坦克'],
}, {
    name: '放逐之刃-锐雯',
    avatar: 'rw',
    alias: [],
    info: [{
        type: 'sc',
        value: 105,
    }, {
        type: 'cs',
        value: 92,
    }],
    type: ['战士'],
}, {
    name: '流浪法师-瑞兹',
    avatar: 'rz',
    alias: ['光头'],
    info: [{
        type: 'sc',
        value: 105,
    }, {
        type: 'cs',
        value: 90,
    }],
    type: ['法师'],
}, {
    name: '暮光之眼-慎',
    avatar: 's',
    alias: [],
    info: [],
    type: ['坦克', '战士'],
}, {
    name: '死亡颂唱者-卡尔萨斯',
    avatar: 'sg',
    alias: ['死哥'],
    info: [{
        type: 'sc',
        value: 90,
    }, {
        type: 'cs',
        value: 105,
    }, {
        type: 'qt',
        value: '被动持续时长：7秒→<span class="abate">5秒</span>',
        enhance: false,
    }],
    type: ['法师'],
}, {
    name: '时光守护者-基兰',
    avatar: 'sglt',
    alias: ['时光老头'],
    info: [{
        type: 'cs',
        value: 95,
    }],
    type: ['法师', '辅助'],
}, {
    name: '星籁歌姬-萨勒芬妮',
    avatar: 'slfn',
    alias: [],
    info: [{
        type: 'sc',
        value: 85,
    }, {
        type: 'cs',
        value: 120,
    }, {
        type: 'cd',
        value: '-20',
    }, {
        type: 'zl',
        value: '-20',
    }, {
        type: 'hd',
        value: '-20',
    }],
    type: ['辅助'],
}, {
    name: '解脱者-塞拉斯',
    avatar: 'sls',
    alias: ['蒜男', '偷男'],
    info: [{
        type: 'sc',
        value: 105,
    }, {
        type: 'cs',
        value: 95,
    }],
    type: ['法师', '战士'],
}, {
    name: '沙漠玫瑰-莎弥拉',
    avatar: 'sml',
    alias: [],
    info: [{
        type: 'sc',
        value: 95,
    }, {
        type: 'cs',
        value: 105,
    }],
    type: ['射手'],
}, {
    name: '涤魂圣枪-塞娜',
    avatar: 'sn',
    alias: [],
    info: [{
        type: 'sc',
        value: 94,
    }, {
        type: 'cs',
        value: 105,
    }],
    type: ['射手'],
}, {
    name: '熔岩巨兽-墨菲特',
    avatar: 'str',
    alias: ['石头人'],
    info: [],
    type: ['法师', '战士', '坦克'],
}, {
    name: '魔蛇之拥-卡西奥佩娅',
    avatar: 'sn',
    alias: ['蛇女'],
    info: [],
    type: ['法师'],
}, {
    name: '傲之追猎者-雷恩加尔',
    avatar: 'szg',
    alias: ['狮子狗'],
    info: [{
        type: 'cs',
        value: 92,
    }, {
        type: 'rx',
        value: '+20',
    }],
    type: ['刺客', '战士'],
}, {
    name: '天启者-卡尔玛',
    avatar: 'szm',
    alias: ['扇子妈'],
    info: [{
        type: 'cs',
        value: 95,
    }],
    type: ['法师', '辅助'],
}, {
    name: '机械先驱-维克托',
    avatar: 'szs',
    alias: ['三只手'],
    info: [{
        type: 'sc',
        value: 95,
    }, {
        type: 'cs',
        value: 105,
    }],
    type: ['法师'],
}, {
    name: '虚空掠夺者-卡兹克',
    avatar: 'tl',
    alias: ['螳螂'],
    info: [{
        type: 'sc',
        value: 105,
    }, {
        type: 'cs',
        value: 90,
    }, {
        type: 'rx',
        value: '+20',
    }, {
        type: 'zl',
        value: '+20',
    }],
    type: ['刺客'],
}, {
    name: '迅捷斥候-提莫',
    avatar: 'tm',
    alias: ['蘑菇'],
    info: [{
        type: 'sc',
        value: 90,
    }, {
        type: 'cs',
        value: 110,
    }, {
        type: 'cd',
        value: '-20',
    }],
    type: ['法师'],
}, {
    name: '河流之主-塔姆',
    avatar: 'tm2',
    alias: [],
    info: [{
        type: 'cs',
        value: 95,
    }],
    type: ['战士', '坦克'],
}, {
    name: '铁铠冥魂-莫德凯撒',
    avatar: 'tn',
    alias: ['铁男'],
    info: [{
        type: 'sc',
        value: 95,
    }, {
        type: 'cs',
        value: 105,
    }],
    type: ['战士'],
}, {
    name: '正义天使-凯尔',
    avatar: 'ts',
    alias: [],
    info: [{
        type: 'sc',
        value: 95,
    }, {
        type: 'cs',
        value: 103,
    }],
    type: ['射手'],
}, {
    name: '深海泰坦-诺提勒斯',
    avatar: 'tt',
    alias: [],
    info: [{
        type: 'sc',
        value: 95,
    }, {
        type: 'cs',
        value: 108,
    }],
    type: ['坦克', '辅助'],
}, {
    name: '暗夜猎手-薇恩',
    avatar: 'vn',
    alias: ['VN'],
    info: [{
        type: 'cs',
        value: 95,
    }],
    type: ['射手'],
}, {
    name: '皮城执法官-蔚',
    avatar: 'w',
    alias: [],
    info: [{
        type: 'sc',
        value: 105,
    }, {
        type: 'cs',
        value: 95,
    }],
    type: ['刺客', '战士'],
}, {
    name: '兽灵行者-乌迪尔',
    avatar: 'wde',
    alias: [],
    info: [{
        type: 'rx',
        value: '+20',
    }],
    type: ['法师', '战士'],
}, {
    name: '腕豪-瑟提',
    avatar: 'wh',
    alias: ['劲夫'],
    info: [{
        type: 'sc',
        value: 90,
    }, {
        type: 'cs',
        value: 105,
    }, {
        type: 'cd',
        value: '-20',
    }, {
        type: 'hd',
        value: '-20',
    }],
    type: ['战士'],
}, {
    name: '虚空遁地兽-雷克塞',
    avatar: 'wjj',
    alias: ['挖掘机'],
    info: [{
        type: 'cs',
        value: 85,
    }, {
        type: 'rx',
        value: '+20',
    }, {
        type: 'zl',
        value: '+20',
    }],
    type: ['刺客', '战士'],
}, {
    name: '惩戒之箭-韦鲁斯',
    avatar: 'wls',
    alias: [],
    info: [{
        type: 'sc',
        value: 95,
    }, {
        type: 'cs',
        value: 105,
    }],
    type: ['射手', '法师'],
}, {
    name: '诺克萨斯统领-斯维因',
    avatar: 'wy',
    alias: ['乌鸦'],
    info: [{
        type: 'sc',
        value: 90,
    }, {
        type: 'cs',
        value: 115,
    }, {
        type: 'zl',
        value: '-10',
    }],
    type: ['战士', '法师'],
}, {
    name: '逆羽-霞',
    avatar: 'x',
    alias: [],
    info: [],
    type: ['射手'],
}, {
    name: '恶魔小丑-萨科',
    avatar: 'xc',
    alias: [],
    info: [{
        type: 'sc',
        value: 105,
    }],
    type: ['刺客', '法师'],
}, {
    name: '暗黑元首-辛德拉',
    avatar: 'xdl',
    alias: ['球女'],
    info: [{
        type: 'sc',
        value: 105,
    }, {
        type: 'cs',
        value: 95,
    }],
    type: ['法师'],
}, {
    name: '邪恶小法师-维嘉',
    avatar: 'xfs',
    alias: [],
    info: [{
        type: 'sc',
        value: 95
    }, {
        type: 'cs',
        value: 105,
    }, {
        type: 'qt',
        value: '<span class="info">E</span>技能冷却时间：20/18.5/17/15.5/14秒→<span class="abate">23/21.5/20/18.5/17秒</span>',
        enhance: false,
    }],
    type: ['法师'],
}, {
    name: '虚空女皇-卑尔维斯',
    avatar: 'xknh',
    alias: [],
    info: [],
    type: ['战士'],
}, {
    name: '含羞蓓蕾-莉莉娅',
    avatar: 'xl',
    alias: ['小鹿'],
    info: [{
        type: 'sc',
        value: 90
    }, {
        type: 'cs',
        value: 105,
    }],
    type: ['战士', '法师'],
}, {
    name: '众星之子-索拉卡',
    avatar: 'xm',
    alias: ['星妈', '奶妈'],
    info: [],
    type: ['辅助'],
}, {
    name: '麦林炮手-崔丝塔娜',
    avatar: 'xp',
    alias: ['小炮'],
    info: [],
    type: ['射手'],
}, {
    name: '雪人骑士-努努',
    avatar: 'xr',
    alias: [],
    info: [{
        type: 'sc',
        value: 110
    }, {
        type: 'cs',
        value: 90,
    }, {
        type: 'rx',
        value: '+20',
    }, {
        type: 'zl',
        value: '+20',
    }],
    type: ['法师', '战士'],
}, {
    name: '猩红收割者-弗拉基米尔',
    avatar: 'xxg',
    alias: ['吸血鬼'],
    info: [],
    type: ['法师', '战士'],
}, {
    name: '潮汐海灵-菲兹',
    avatar: 'xyr',
    alias: ['小鱼人'],
    info: [{
        type: 'sc',
        value: 105
    }, {
        type: 'cs',
        value: 95,
    }, {
        type: 'rx',
        value: '+20',
    }],
    type: ['法师', '战士'],
}, {
    name: '水晶先锋-斯卡纳',
    avatar: 'xz',
    alias: ['蝎子'],
    info: [],
    type: ['战士'],
}, {
    name: '封魔剑魂-永恩',
    avatar: 'ye',
    alias: [],
    info: [{
        type: 'sc',
        value: 103
    }, {
        type: 'cs',
        value: 97,
    }],
    type: ['战士', '刺客'],
}, {
    name: '诡术妖姬-乐芙兰',
    avatar: 'yj',
    alias: [],
    info: [{
        type: 'sc',
        value: 110
    }, {
        type: 'cs',
        value: 90
    }, {
        type: 'rx',
        value: '+20'
    }, {
        type: 'cd',
        value: '+20'
    }],
    type: ['法师', '刺客'],
}, {
    name: '残月之肃-厄斐琉斯',
    avatar: 'yn',
    alias: ['月男', '吴亦凡'],
    info: [],
    type: ['射手'],
}, {
    name: '岩雀-塔利亚',
    avatar: 'yq',
    alias: [],
    info: [{
        type: 'sc',
        value: 105
    }],
    type: ['法师'],
}, {
    name: '疾风剑豪-亚索',
    avatar: 'ys',
    alias: ['快乐风男'],
    info: [],
    type: ['战士', '刺客'],
}, {
    name: '爆破鬼才-吉格斯',
    avatar: 'zdr',
    alias: ['炸弹人'],
    info: [{
        type: 'sc',
        value: 80
    }, {
        type: 'cs',
        value: 120
    }, {
        type: 'cd',
        value: '-20'
    }],
    type: ['法师'],
}, {
    name: '生化魔人-扎克',
    avatar: 'zk',
    alias: ['翔战士'],
    info: [{
        type: 'cs',
        value: 96
    }],
    type: ['战士'],
}, {
    name: '祖安花火-泽丽',
    avatar: 'zl',
    alias: [],
    info: [{
        type: 'sc',
        value: 105
    }, {
        type: 'cs',
        value: 90
    }],
    type: ['射手'],
}, {
    name: '远古巫灵-泽拉斯',
    avatar: 'zls',
    alias: ['三炮'],
    info: [{
        type: 'sc',
        value: 90
    }],
    type: ['法师'],
}, {
    name: '北地之怒-瑟庄妮',
    avatar: 'zm',
    alias: ['猪妹'],
    info: [{
        type: 'sc',
        value: 105
    }, {
        type: 'cs',
        value: 92
    }],
    type: ['战士', '坦克'],
}, {
    name: '德邦总管-赵信',
    avatar: 'zx',
    alias: ['菊花信'],
    info: [],
    type: ['战士', '刺客'],
}, {
    name: '暮光星灵-佐伊',
    avatar: 'zy',
    alias: [],
    info: [{
        type: 'sc',
        value: 110
    }, {
        type: 'cs',
        value: 95
    }],
    type: ['法师'],
}, {
    name: '蜘蛛女皇-伊莉丝',
    avatar: 'zz',
    alias: [],
    info: [{
        type: 'sc',
        value: 105
    }, {
        type: 'cs',
        value: 90
    }],
    type: ['法师', '刺客'],
}, {
    name: '星界游神-巴德',
    avatar: 'bd',
    alias: [],
    info: [{
        type: 'sc',
        value: 115
    }, {
        type: 'cs',
        value: 80
    }, {
        type: 'zl',
        value: '+20'
    }],
    type: ['辅助', '射手'],
}];