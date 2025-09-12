// 中国城市数据
const citiesData = {
  // 直辖市
  "直辖市": [
    {
      name: "北京",
      fullName: "北京市",
      province: "直辖市",
      population: "2188万",
      area: "16410平方公里",
      gdp: "4.03万亿元",
      description: "中华人民共和国的首都，全国政治、文化、国际交往、科技创新中心。",
      landmarks: ["故宫", "天安门", "长城", "天坛", "颐和园"],
      universities: ["北京大学", "清华大学", "中国人民大学", "北京师范大学"],
      libraries: [] // 将在后面填充
    },
    {
      name: "上海",
      fullName: "上海市",
      province: "直辖市",
      population: "2428万",
      area: "6340平方公里",
      gdp: "4.32万亿元",
      description: "中国最大的经济中心城市，国际经济、金融、贸易、航运、科技创新中心。",
      landmarks: ["外滩", "东方明珠", "豫园", "南京路", "迪士尼乐园"],
      universities: ["复旦大学", "上海交通大学", "同济大学", "华东师范大学"],
      libraries: []
    },
    {
      name: "天津",
      fullName: "天津市",
      province: "直辖市",
      population: "1387万",
      area: "11946平方公里",
      gdp: "1.41万亿元",
      description: "中国北方重要的经济中心和港口城市，京津冀协同发展的重要节点。",
      landmarks: ["古文化街", "天津之眼", "五大道", "意式风情区"],
      universities: ["南开大学", "天津大学", "天津医科大学"],
      libraries: []
    },
    {
      name: "重庆",
      fullName: "重庆市",
      province: "直辖市",
      population: "3213万",
      area: "82402平方公里",
      gdp: "2.78万亿元",
      description: "中国西南地区重要的中心城市，长江上游地区的经济、金融、科创、航运和商贸物流中心。",
      landmarks: ["洪崖洞", "解放碑", "长江索道", "大足石刻"],
      universities: ["重庆大学", "西南大学", "重庆医科大学"],
      libraries: []
    }
  ],

  // 省会城市
  "省会城市": [
    {
      name: "广州",
      fullName: "广州市",
      province: "广东省",
      population: "1881万",
      area: "7434平方公里",
      gdp: "2.82万亿元",
      description: "广东省省会，国家中心城市，国际商贸中心和综合交通枢纽。",
      landmarks: ["广州塔", "陈家祠", "白云山", "珠江夜游"],
      universities: ["中山大学", "华南理工大学", "暨南大学"],
      libraries: []
    },
    {
      name: "深圳",
      fullName: "深圳市",
      province: "广东省",
      population: "1756万",
      area: "1997平方公里",
      gdp: "3.07万亿元",
      description: "中国第一个经济特区，科技创新中心和现代化国际化城市。",
      landmarks: ["世界之窗", "欢乐谷", "东部华侨城", "深圳湾公园"],
      universities: ["深圳大学", "南方科技大学", "香港中文大学(深圳)"],
      libraries: []
    },
    {
      name: "杭州",
      fullName: "杭州市",
      province: "浙江省",
      population: "1196万",
      area: "16850平方公里",
      gdp: "1.81万亿元",
      description: "浙江省省会，历史文化名城，电子商务和数字经济中心。",
      landmarks: ["西湖", "雷峰塔", "灵隐寺", "千岛湖"],
      universities: ["浙江大学", "杭州电子科技大学", "浙江工业大学"],
      libraries: []
    },
    {
      name: "南京",
      fullName: "南京市",
      province: "江苏省",
      population: "942万",
      area: "6587平方公里",
      gdp: "1.48万亿元",
      description: "江苏省省会，六朝古都，国家重要的科研教育基地和综合交通枢纽。",
      landmarks: ["中山陵", "夫子庙", "明城墙", "总统府"],
      universities: ["南京大学", "东南大学", "南京师范大学"],
      libraries: []
    },
    {
      name: "成都",
      fullName: "成都市",
      province: "四川省",
      population: "2094万",
      area: "14335平方公里",
      gdp: "1.99万亿元",
      description: "四川省省会，国家中心城市，西部重要的经济、科技、文创、对外交往中心。",
      landmarks: ["大熊猫基地", "宽窄巷子", "锦里", "都江堰"],
      universities: ["四川大学", "电子科技大学", "西南交通大学"],
      libraries: []
    },
    {
      name: "武汉",
      fullName: "武汉市",
      province: "湖北省",
      population: "1232万",
      area: "8569平方公里",
      gdp: "1.77万亿元",
      description: "湖北省省会，中部地区中心城市，重要的工业基地和科教基地。",
      landmarks: ["黄鹤楼", "东湖", "户部巷", "武汉大学"],
      universities: ["武汉大学", "华中科技大学", "华中师范大学"],
      libraries: []
    },
    {
      name: "西安",
      fullName: "西安市",
      province: "陕西省",
      population: "1295万",
      area: "10752平方公里",
      gdp: "1.06万亿元",
      description: "陕西省省会，十三朝古都，西部地区重要的中心城市。",
      landmarks: ["兵马俑", "大雁塔", "钟楼", "华清池"],
      universities: ["西安交通大学", "西北工业大学", "西安电子科技大学"],
      libraries: []
    },
    {
      name: "济南",
      fullName: "济南市",
      province: "山东省",
      population: "920万",
      area: "10244平方公里",
      gdp: "1.01万亿元",
      description: "山东省省会，泉城，重要的工业城市和交通枢纽。",
      landmarks: ["趵突泉", "大明湖", "千佛山", "芙蓉街"],
      universities: ["山东大学", "济南大学", "山东师范大学"],
      libraries: []
    },
    {
      name: "青岛",
      fullName: "青岛市",
      province: "山东省",
      population: "1007万",
      area: "11293平方公里",
      gdp: "1.24万亿元",
      description: "山东省副省级市，重要的港口城市和海洋经济发展示范区。",
      landmarks: ["栈桥", "八大关", "崂山", "青岛啤酒博物馆"],
      universities: ["中国海洋大学", "青岛大学", "山东科技大学"],
      libraries: []
    },
    {
      name: "郑州",
      fullName: "郑州市",
      province: "河南省",
      population: "1260万",
      area: "7446平方公里",
      gdp: "1.2万亿元",
      description: "河南省省会，国家中心城市，重要的综合交通枢纽和现代物流中心。",
      landmarks: ["少林寺", "黄河风景区", "二七纪念塔"],
      universities: ["郑州大学", "河南大学", "河南工业大学"],
      libraries: []
    },
    {
      name: "长沙",
      fullName: "长沙市",
      province: "湖南省",
      population: "1005万",
      area: "11819平方公里",
      gdp: "1.32万亿元",
      description: "湖南省省会，重要的制造业基地和文化创意产业中心。",
      landmarks: ["岳麓山", "橘子洲", "湖南省博物馆", "火宫殿"],
      universities: ["中南大学", "湖南大学", "湖南师范大学"],
      libraries: []
    },
    {
      name: "福州",
      fullName: "福州市",
      province: "福建省",
      population: "829万",
      area: "11968平方公里",
      gdp: "1.08万亿元",
      description: "福建省省会，海峡西岸经济区中心城市，重要的制造业基地。",
      landmarks: ["三坊七巷", "鼓山", "西湖公园", "林则徐纪念馆"],
      universities: ["福州大学", "福建师范大学", "福建农林大学"],
      libraries: []
    },
    {
      name: "厦门",
      fullName: "厦门市",
      province: "福建省",
      population: "518万",
      area: "1700平方公里",
      gdp: "7034亿元",
      description: "福建省副省级市，经济特区，重要的港口风景旅游城市。",
      landmarks: ["鼓浪屿", "南普陀寺", "厦门大学", "环岛路"],
      universities: ["厦门大学", "集美大学", "华侨大学"],
      libraries: []
    },
    {
      name: "合肥",
      fullName: "合肥市",
      province: "安徽省",
      population: "946万",
      area: "11445平方公里",
      gdp: "1.14万亿元",
      description: "安徽省省会，长三角城市群副中心，重要的科研教育基地。",
      landmarks: ["包公园", "李鸿章故居", "逍遥津", "三河古镇"],
      universities: ["中国科学技术大学", "合肥工业大学", "安徽大学"],
      libraries: []
    },
    {
      name: "南昌",
      fullName: "南昌市",
      province: "江西省",
      population: "625万",
      area: "7195平方公里",
      gdp: "5745亿元",
      description: "江西省省会，重要的制造业基地和综合交通枢纽。",
      landmarks: ["滕王阁", "八一起义纪念馆", "鄱阳湖", "梅岭"],
      universities: ["南昌大学", "江西财经大学", "华东交通大学"],
      libraries: []
    },
    {
      name: "石家庄",
      fullName: "石家庄市",
      province: "河北省",
      population: "1120万",
      area: "15848平方公里",
      gdp: "5935亿元",
      description: "河北省省会，重要的交通枢纽和制造业基地。",
      landmarks: ["正定古城", "赵州桥", "柏林禅寺"],
      universities: ["河北大学", "河北师范大学", "石家庄铁道大学"],
      libraries: []
    },
    {
      name: "太原",
      fullName: "太原市",
      province: "山西省",
      population: "530万",
      area: "6988平方公里",
      gdp: "4153亿元",
      description: "山西省省会，重要的能源基地和制造业中心。",
      landmarks: ["晋祠", "双塔寺", "天龙山", "煤炭博物馆"],
      universities: ["山西大学", "太原理工大学", "中北大学"],
      libraries: []
    },
    {
      name: "呼和浩特",
      fullName: "呼和浩特市",
      province: "内蒙古自治区",
      population: "344万",
      area: "17224平方公里",
      gdp: "2800亿元",
      description: "内蒙古自治区首府，重要的能源基地和畜牧业中心。",
      landmarks: ["大召寺", "昭君墓", "内蒙古博物馆", "希拉穆仁草原"],
      universities: ["内蒙古大学", "内蒙古师范大学", "内蒙古农业大学"],
      libraries: []
    },
    {
      name: "沈阳",
      fullName: "沈阳市",
      province: "辽宁省",
      population: "907万",
      area: "12860平方公里",
      gdp: "7249亿元",
      description: "辽宁省省会，重要的工业基地和综合交通枢纽。",
      landmarks: ["故宫", "张氏帅府", "北陵公园", "中街"],
      universities: ["东北大学", "辽宁大学", "沈阳工业大学"],
      libraries: []
    },
    {
      name: "大连",
      fullName: "大连市",
      province: "辽宁省",
      population: "745万",
      area: "12574平方公里",
      gdp: "7030亿元",
      description: "辽宁省副省级市，重要的港口城市和旅游城市。",
      landmarks: ["星海广场", "老虎滩", "金石滩", "发现王国"],
      universities: ["大连理工大学", "大连海事大学", "东北财经大学"],
      libraries: []
    },
    {
      name: "长春",
      fullName: "长春市",
      province: "吉林省",
      population: "906万",
      area: "20565平方公里",
      gdp: "6638亿元",
      description: "吉林省省会，重要的汽车工业基地和科教文化中心。",
      landmarks: ["伪满皇宫", "净月潭", "长影世纪城", "南湖公园"],
      universities: ["吉林大学", "东北师范大学", "长春理工大学"],
      libraries: []
    },
    {
      name: "哈尔滨",
      fullName: "哈尔滨市",
      province: "黑龙江省",
      population: "1001万",
      area: "53100平方公里",
      gdp: "5183亿元",
      description: "黑龙江省省会，重要的工业基地和冰雪旅游城市。",
      landmarks: ["中央大街", "索菲亚教堂", "冰雪大世界", "太阳岛"],
      universities: ["哈尔滨工业大学", "哈尔滨工程大学", "东北林业大学"],
      libraries: []
    },
    {
      name: "南宁",
      fullName: "南宁市",
      province: "广西壮族自治区",
      population: "874万",
      area: "22112平方公里",
      gdp: "5120亿元",
      description: "广西壮族自治区首府，中国-东盟博览会永久举办地。",
      landmarks: ["青秀山", "南湖公园", "民族博物馆", "邕江夜游"],
      universities: ["广西大学", "广西师范大学", "广西医科大学"],
      libraries: []
    },
    {
      name: "海口",
      fullName: "海口市",
      province: "海南省",
      population: "287万",
      area: "3145平方公里",
      gdp: "1791亿元",
      description: "海南省省会，重要的港口城市和旅游城市。",
      landmarks: ["骑楼老街", "五公祠", "假日海滩", "万绿园"],
      universities: ["海南大学", "海南师范大学", "海南医学院"],
      libraries: []
    },
    {
      name: "昆明",
      fullName: "昆明市",
      province: "云南省",
      population: "846万",
      area: "21473平方公里",
      gdp: "6733亿元",
      description: "云南省省会，春城，重要的旅游城市和花卉产业中心。",
      landmarks: ["石林", "滇池", "翠湖", "西山"],
      universities: ["云南大学", "昆明理工大学", "云南师范大学"],
      libraries: []
    },
    {
      name: "贵阳",
      fullName: "贵阳市",
      province: "贵州省",
      population: "598万",
      area: "8043平方公里",
      gdp: "4311亿元",
      description: "贵州省省会，重要的生态城市和避暑胜地。",
      landmarks: ["甲秀楼", "黔灵山", "青岩古镇", "花溪公园"],
      universities: ["贵州大学", "贵州师范大学", "贵州财经大学"],
      libraries: []
    },
    {
      name: "拉萨",
      fullName: "拉萨市",
      province: "西藏自治区",
      population: "87万",
      area: "29518平方公里",
      gdp: "678亿元",
      description: "西藏自治区首府，世界屋脊上的圣城。",
      landmarks: ["布达拉宫", "大昭寺", "八廓街", "纳木错"],
      universities: ["西藏大学", "西藏民族大学"],
      libraries: []
    },
    {
      name: "兰州",
      fullName: "兰州市",
      province: "甘肃省",
      population: "438万",
      area: "13085平方公里",
      gdp: "2886亿元",
      description: "甘肃省省会，重要的工业基地和交通枢纽。",
      landmarks: ["黄河铁桥", "白塔山", "五泉山", "甘肃省博物馆"],
      universities: ["兰州大学", "西北师范大学", "兰州理工大学"],
      libraries: []
    },
    {
      name: "西宁",
      fullName: "西宁市",
      province: "青海省",
      population: "247万",
      area: "7660平方公里",
      gdp: "1548亿元",
      description: "青海省省会，重要的生态城市和旅游城市。",
      landmarks: ["塔尔寺", "青海湖", "东关清真大寺", "北禅寺"],
      universities: ["青海大学", "青海师范大学", "青海民族大学"],
      libraries: []
    },
    {
      name: "银川",
      fullName: "银川市",
      province: "宁夏回族自治区",
      population: "285万",
      area: "9025平方公里",
      gdp: "1964亿元",
      description: "宁夏回族自治区首府，重要的农业基地和旅游城市。",
      landmarks: ["西夏王陵", "沙湖", "镇北堡西部影城", "贺兰山"],
      universities: ["宁夏大学", "北方民族大学", "宁夏医科大学"],
      libraries: []
    },
    {
      name: "乌鲁木齐",
      fullName: "乌鲁木齐市",
      province: "新疆维吾尔自治区",
      population: "405万",
      area: "14216平方公里",
      gdp: "3337亿元",
      description: "新疆维吾尔自治区首府，重要的工业基地和交通枢纽。",
      landmarks: ["天山天池", "红山公园", "国际大巴扎", "新疆博物馆"],
      universities: ["新疆大学", "新疆师范大学", "新疆医科大学"],
      libraries: []
    }
  ],

  // 地级市
  "地级市": [
    {
      name: "苏州",
      fullName: "苏州市",
      province: "江苏省",
      population: "1275万",
      area: "8657平方公里",
      gdp: "2.27万亿元",
      description: "重要的制造业基地和历史文化名城，江南水乡的代表。",
      landmarks: ["拙政园", "虎丘", "周庄", "同里"],
      universities: ["苏州大学", "苏州科技大学", "常熟理工学院"],
      libraries: []
    },
    {
      name: "无锡",
      fullName: "无锡市",
      province: "江苏省",
      population: "746万",
      area: "4628平方公里",
      gdp: "1.23万亿元",
      description: "重要的制造业基地和旅游城市，太湖明珠。",
      landmarks: ["鼋头渚", "灵山大佛", "蠡园", "梅园"],
      universities: ["江南大学", "无锡太湖学院"],
      libraries: []
    },
    {
      name: "宁波",
      fullName: "宁波市",
      province: "浙江省",
      population: "954万",
      area: "9816平方公里",
      gdp: "1.24万亿元",
      description: "重要的港口城市和制造业基地，计划单列市。",
      landmarks: ["天一阁", "溪口", "雪窦山", "东钱湖"],
      universities: ["宁波大学", "宁波诺丁汉大学"],
      libraries: []
    },
    {
      name: "温州",
      fullName: "温州市",
      province: "浙江省",
      population: "957万",
      area: "12065平方公里",
      gdp: "6870亿元",
      description: "重要的民营经济中心和制造业基地。",
      landmarks: ["雁荡山", "楠溪江", "江心屿", "南麂列岛"],
      universities: ["温州医科大学", "温州大学"],
      libraries: []
    },
    {
      name: "佛山",
      fullName: "佛山市",
      province: "广东省",
      population: "949万",
      area: "3798平方公里",
      gdp: "1.08万亿元",
      description: "重要的制造业基地和武术之乡。",
      landmarks: ["祖庙", "西樵山", "清晖园", "梁园"],
      universities: ["佛山科学技术学院"],
      libraries: []
    },
    {
      name: "东莞",
      fullName: "东莞市",
      province: "广东省",
      population: "1047万",
      area: "2460平方公里",
      gdp: "9650亿元",
      description: "重要的制造业基地和外贸城市。",
      landmarks: ["可园", "鸦片战争博物馆", "威远炮台"],
      universities: ["东莞理工学院"],
      libraries: []
    },
    {
      name: "珠海",
      fullName: "珠海市",
      province: "广东省",
      population: "244万",
      area: "1711平方公里",
      gdp: "3481亿元",
      description: "经济特区，重要的旅游城市和制造业基地。",
      landmarks: ["长隆海洋王国", "情侣路", "圆明新园", "东澳岛"],
      universities: ["北京理工大学珠海学院"],
      libraries: []
    },
    {
      name: "中山",
      fullName: "中山市",
      province: "广东省",
      population: "441万",
      area: "1784平方公里",
      gdp: "3151亿元",
      description: "孙中山先生的故乡，重要的制造业基地。",
      landmarks: ["孙中山故居", "中山公园", "詹园"],
      universities: ["电子科技大学中山学院"],
      libraries: []
    },
    {
      name: "江门",
      fullName: "江门市",
      province: "广东省",
      population: "479万",
      area: "9506平方公里",
      gdp: "3201亿元",
      description: "重要的制造业基地和侨乡。",
      landmarks: ["开平碉楼", "立园", "小鸟天堂"],
      universities: ["五邑大学"],
      libraries: []
    },
    {
      name: "湛江",
      fullName: "湛江市",
      province: "广东省",
      population: "703万",
      area: "13263平方公里",
      gdp: "3100亿元",
      description: "重要的港口城市和制造业基地。",
      landmarks: ["湖光岩", "东海岛", "硇洲岛"],
      universities: ["广东海洋大学", "广东医科大学"],
      libraries: []
    }
  ]
};

// 图书馆分类数据
const libraryCategories = {
  "公共图书馆": {
    description: "面向公众开放的图书馆，提供免费的图书借阅和阅读服务",
    icon: "🏛️",
    libraries: []
  },
  "大学图书馆": {
    description: "高等院校的图书馆，主要服务于师生教学科研",
    icon: "🎓",
    libraries: []
  },
  "专业图书馆": {
    description: "专门服务于特定领域或行业的图书馆",
    icon: "🔬",
    libraries: []
  },
  "少儿图书馆": {
    description: "专门为儿童和青少年提供服务的图书馆",
    icon: "📚",
    libraries: []
  },
  "数字图书馆": {
    description: "以数字化资源为主的现代化图书馆",
    icon: "💻",
    libraries: []
  }
};

// 导出数据
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { citiesData, libraryCategories };
}
