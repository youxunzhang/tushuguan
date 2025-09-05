const libraryData = [
  {
    city: "北京",
    libraries: [
      {
        name: "国家图书馆",
        address: "北京市海淀区中关村南大街33号",
        phone: "010-88545426",
        website: "http://www.nlc.cn/",
        description: "中国最大的图书馆，拥有丰富的馆藏和现代化的服务设施。",
        image: "images/national-library.svg"
      },
      {
        name: "首都图书馆",
        address: "北京市朝阳区东三环南路88号",
        phone: "010-67358114",
        website: "http://www.clcn.net.cn/",
        description: "北京市重要的公共图书馆，服务广大市民。",
        image: "images/capital-library.svg"
      },
      {
        name: "北京大学图书馆",
        address: "北京市海淀区颐和园路5号",
        phone: "010-62751051",
        website: "https://lib.pku.edu.cn/",
        description: "北京大学图书馆，历史悠久，馆藏丰富。",
        image: "images/pku-library.svg"
      },
      {
        name: "清华大学图书馆",
        address: "北京市海淀区清华园1号",
        phone: "010-62782137",
        website: "https://lib.tsinghua.edu.cn/",
        description: "清华大学图书馆，现代化设施完善。",
        image: "images/tsinghua-library.svg"
      },
      {
        name: "中国人民大学图书馆",
        address: "北京市海淀区中关村大街59号",
        phone: "010-62511373",
        website: "https://lib.ruc.edu.cn/",
        description: "中国人民大学图书馆，人文社科类馆藏丰富。",
        image: "images/ruc-library.svg"
      },
      {
        name: "北京师范大学图书馆",
        address: "北京市海淀区新街口外大街19号",
        phone: "010-58806113",
        website: "https://lib.bnu.edu.cn/",
        description: "北京师范大学图书馆，教育类文献丰富。",
        image: "images/bnu-library.svg"
      },
      {
        name: "北京理工大学图书馆",
        address: "北京市海淀区中关村南大街5号",
        phone: "010-68914263",
        website: "https://lib.bit.edu.cn/",
        description: "北京理工大学图书馆，理工科馆藏丰富。",
        image: "images/bit-library.svg"
      },
      {
        name: "北京航空航天大学图书馆",
        address: "北京市海淀区学院路37号",
        phone: "010-82317024",
        website: "https://lib.buaa.edu.cn/",
        description: "北京航空航天大学图书馆，航空航天类文献特色。",
        image: "images/buaa-library.svg"
      }
    ]
  },
  {
    city: "上海",
    libraries: [
      {
        name: "上海图书馆",
        address: "上海市徐汇区淮海中路1555号",
        phone: "021-64455555",
        website: "https://www.library.sh.cn/",
        description: "中国著名的现代化大型图书馆。",
        image: "images/shanghai-library.svg"
      },
      {
        name: "复旦大学图书馆",
        address: "上海市杨浦区邯郸路220号",
        phone: "021-65642222",
        website: "https://www.library.fudan.edu.cn/",
        description: "复旦大学图书馆，综合性大学图书馆。",
        image: "images/fudan-library.svg"
      },
      {
        name: "上海交通大学图书馆",
        address: "上海市闵行区东川路800号",
        phone: "021-34206460",
        website: "https://www.lib.sjtu.edu.cn/",
        description: "上海交通大学图书馆，理工科馆藏丰富。",
        image: "images/sjtu-library.svg"
      },
      {
        name: "同济大学图书馆",
        address: "上海市杨浦区四平路1239号",
        phone: "021-65982200",
        website: "https://lib.tongji.edu.cn/",
        description: "同济大学图书馆，建筑类文献特色馆藏。",
        image: "images/tongji-library.svg"
      },
      {
        name: "华东师范大学图书馆",
        address: "上海市普陀区中山北路3663号",
        phone: "021-62232317",
        website: "https://lib.ecnu.edu.cn/",
        description: "华东师范大学图书馆，教育类文献丰富。",
        image: "images/ecnu-library.svg"
      }
    ]
  },
  {
    city: "广州",
    libraries: [
      {
        name: "广州图书馆",
        address: "广州市珠江东路4号",
        phone: "020-83836666",
        website: "https://www.gzlib.org.cn/",
        description: "位于珠江新城的现代化图书馆，建筑风格独特。",
        image: "images/guangzhou-library.svg"
      },
      {
        name: "中山大学图书馆",
        address: "广州市海珠区新港西路135号",
        phone: "020-84111666",
        website: "https://library.sysu.edu.cn/",
        description: "中山大学图书馆，综合性大学图书馆。",
        image: "images/sysu-library.svg"
      },
      {
        name: "华南理工大学图书馆",
        address: "广州市天河区五山路381号",
        phone: "020-87111474",
        website: "https://www.lib.scut.edu.cn/",
        description: "华南理工大学图书馆，理工科馆藏丰富。",
        image: "images/scut-library.svg"
      },
      {
        name: "暨南大学图书馆",
        address: "广州市天河区黄埔大道西601号",
        phone: "020-85220223",
        website: "https://lib.jnu.edu.cn/",
        description: "暨南大学图书馆，华侨华人文献特色馆藏。",
        image: "images/jnu-library.svg"
      }
    ]
  },
  {
    city: "深圳",
    libraries: [
      {
        name: "深圳图书馆",
        address: "深圳市福田区福中路2014号",
        phone: "0755-82841200",
        website: "https://www.szlib.org.cn/",
        description: "深圳市标志性文化设施之一。",
        image: "images/shenzhen-library.svg"
      },
      {
        name: "深圳大学图书馆",
        address: "深圳市南山区南海大道3688号",
        phone: "0755-26536114",
        website: "https://lib.szu.edu.cn/",
        description: "深圳大学图书馆，现代化设施完善。",
        image: "images/szu-library.svg"
      },
      {
        name: "南方科技大学图书馆",
        address: "深圳市南山区学苑大道1088号",
        phone: "0755-88018000",
        website: "https://lib.sustech.edu.cn/",
        description: "南方科技大学图书馆，新型研究型大学图书馆。",
        image: "images/sustech-library.svg"
      }
    ]
  },
  {
    city: "杭州",
    libraries: [
      {
        name: "杭州图书馆",
        address: "杭州市江干区解放东路58号",
        phone: "0571-86535000",
        website: "https://www.hzlib.net/",
        description: "杭州市重要的公共图书馆，环境优美，服务完善。",
        image: "images/hangzhou-library.svg"
      },
      {
        name: "浙江大学图书馆",
        address: "杭州市西湖区余杭塘路866号",
        phone: "0571-87951006",
        website: "https://libweb.zju.edu.cn/",
        description: "浙江大学图书馆，综合性研究型大学图书馆。",
        image: "images/zju-library.svg"
      },
      {
        name: "浙江图书馆",
        address: "杭州市西湖区曙光路73号",
        phone: "0571-87988500",
        website: "https://www.zjlib.cn/",
        description: "浙江省最大的公共图书馆，历史悠久。",
        image: "images/zhejiang-library.svg"
      }
    ]
  },
  {
    city: "南京",
    libraries: [
      {
        name: "南京图书馆",
        address: "南京市玄武区中山东路189号",
        phone: "025-84356000",
        website: "https://www.jslib.org.cn/",
        description: "江苏省最大的公共图书馆，历史悠久，馆藏丰富。",
        image: "images/nanjing-library.svg"
      },
      {
        name: "南京大学图书馆",
        address: "南京市栖霞区仙林大道163号",
        phone: "025-83593183",
        website: "https://lib.nju.edu.cn/",
        description: "南京大学图书馆，综合性大学图书馆。",
        image: "images/nju-library.svg"
      },
      {
        name: "东南大学图书馆",
        address: "南京市玄武区四牌楼2号",
        phone: "025-83792301",
        website: "https://lib.seu.edu.cn/",
        description: "东南大学图书馆，建筑类文献特色馆藏。",
        image: "images/seu-library.svg"
      },
      {
        name: "南京师范大学图书馆",
        address: "南京市栖霞区文苑路1号",
        phone: "025-85891000",
        website: "https://lib.njnu.edu.cn/",
        description: "南京师范大学图书馆，教育类文献丰富。",
        image: "images/njnu-library.svg"
      }
    ]
  },
  {
    city: "成都",
    libraries: [
      {
        name: "成都图书馆",
        address: "成都市青羊区文翁路98号",
        phone: "028-86126155",
        website: "https://www.cdclib.org/",
        description: "成都市重要的文化设施，为市民提供优质的阅读服务。",
        image: "images/chengdu-library.svg"
      },
      {
        name: "四川大学图书馆",
        address: "成都市武侯区望江路29号",
        phone: "028-85412334",
        website: "https://lib.scu.edu.cn/",
        description: "四川大学图书馆，综合性大学图书馆。",
        image: "images/scu-library.svg"
      },
      {
        name: "电子科技大学图书馆",
        address: "成都市成华区建设北路二段4号",
        phone: "028-83202300",
        website: "https://lib.uestc.edu.cn/",
        description: "电子科技大学图书馆，电子信息类馆藏丰富。",
        image: "images/uestc-library.svg"
      },
      {
        name: "西南交通大学图书馆",
        address: "成都市金牛区二环路北一段111号",
        phone: "028-87600600",
        website: "https://lib.swjtu.edu.cn/",
        description: "西南交通大学图书馆，交通运输类文献特色。",
        image: "images/swjtu-library.svg"
      }
    ]
  },
  {
    city: "武汉",
    libraries: [
      {
        name: "武汉图书馆",
        address: "武汉市江汉区建设大道861号",
        phone: "027-85718003",
        website: "https://www.whlib.org.cn/",
        description: "武汉市重要的公共图书馆，现代化设施完善。",
        image: "images/wuhan-library.svg"
      },
      {
        name: "武汉大学图书馆",
        address: "武汉市武昌区珞珈山",
        phone: "027-68752740",
        website: "https://www.lib.whu.edu.cn/",
        description: "武汉大学图书馆，综合性大学图书馆。",
        image: "images/whu-library.svg"
      },
      {
        name: "华中科技大学图书馆",
        address: "武汉市洪山区珞瑜路1037号",
        phone: "027-87542230",
        website: "https://lib.hust.edu.cn/",
        description: "华中科技大学图书馆，理工科馆藏丰富。",
        image: "images/hust-library.svg"
      },
      {
        name: "华中师范大学图书馆",
        address: "武汉市洪山区珞喻路152号",
        phone: "027-67868000",
        website: "https://lib.ccnu.edu.cn/",
        description: "华中师范大学图书馆，教育类文献丰富。",
        image: "images/ccnu-library.svg"
      }
    ]
  },
  {
    city: "西安",
    libraries: [
      {
        name: "陕西省图书馆",
        address: "西安市碑林区长安北路18号",
        phone: "029-85360000",
        website: "https://www.sxlib.org.cn/",
        description: "陕西省最大的公共图书馆，历史悠久，馆藏丰富。",
        image: "images/shaanxi-library.svg"
      },
      {
        name: "西安交通大学图书馆",
        address: "西安市碑林区咸宁西路28号",
        phone: "029-82667853",
        website: "https://lib.xjtu.edu.cn/",
        description: "西安交通大学图书馆，综合性大学图书馆。",
        image: "images/xjtu-library.svg"
      },
      {
        name: "西北工业大学图书馆",
        address: "西安市碑林区友谊西路127号",
        phone: "029-88492300",
        website: "https://lib.nwpu.edu.cn/",
        description: "西北工业大学图书馆，航空航天类馆藏丰富。",
        image: "images/nwpu-library.svg"
      },
      {
        name: "西北大学图书馆",
        address: "西安市碑林区太白北路229号",
        phone: "029-88302000",
        website: "https://lib.nwu.edu.cn/",
        description: "西北大学图书馆，综合性大学图书馆。",
        image: "images/nwu-library.svg"
      }
    ]
  },
  {
    city: "重庆",
    libraries: [
      {
        name: "重庆图书馆",
        address: "重庆市渝中区长江一路11号",
        phone: "023-63850361",
        website: "https://www.cqlib.cn/",
        description: "重庆市重要的公共图书馆，服务山城人民。",
        image: "images/chongqing-library.svg"
      },
      {
        name: "重庆大学图书馆",
        address: "重庆市沙坪坝区沙正街174号",
        phone: "023-65102300",
        website: "https://lib.cqu.edu.cn/",
        description: "重庆大学图书馆，综合性大学图书馆。",
        image: "images/cqu-library.svg"
      },
      {
        name: "西南大学图书馆",
        address: "重庆市北碚区天生路2号",
        phone: "023-68252300",
        website: "https://lib.swu.edu.cn/",
        description: "西南大学图书馆，综合性大学图书馆。",
        image: "images/swu-library.svg"
      }
    ]
  },
  {
    city: "天津",
    libraries: [
      {
        name: "天津图书馆",
        address: "天津市河西区平江道58号",
        phone: "022-83883600",
        website: "https://www.tjl.tj.cn/",
        description: "天津市重要的公共图书馆，现代化设施完善。",
        image: "images/tianjin-library.svg"
      },
      {
        name: "南开大学图书馆",
        address: "天津市南开区卫津路94号",
        phone: "022-23508176",
        website: "https://lib.nankai.edu.cn/",
        description: "南开大学图书馆，综合性大学图书馆。",
        image: "images/nankai-library.svg"
      },
      {
        name: "天津大学图书馆",
        address: "天津市南开区卫津路92号",
        phone: "022-27406244",
        website: "https://lib.tju.edu.cn/",
        description: "天津大学图书馆，理工科馆藏丰富。",
        image: "images/tju-library.svg"
      }
    ]
  }
]; 
