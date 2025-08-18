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
        image: "images/national-library.jpg"
      },
      {
        name: "首都图书馆",
        address: "北京市朝阳区东三环南路88号",
        phone: "010-67358114",
        website: "http://www.clcn.net.cn/",
        description: "北京市重要的公共图书馆，服务广大市民。",
        image: "images/capital-library.jpg"
      },
      {
        name: "北京大学图书馆",
        address: "北京市海淀区颐和园路5号",
        phone: "010-62751051",
        website: "https://lib.pku.edu.cn/",
        description: "北京大学图书馆，历史悠久，馆藏丰富。",
        image: "images/pku-library.jpg"
      },
      {
        name: "清华大学图书馆",
        address: "北京市海淀区清华园1号",
        phone: "010-62782137",
        website: "https://lib.tsinghua.edu.cn/",
        description: "清华大学图书馆，现代化设施完善。",
        image: "images/tsinghua-library.jpg"
      },
      {
        name: "中国人民大学图书馆",
        address: "北京市海淀区中关村大街59号",
        phone: "010-62511373",
        website: "https://lib.ruc.edu.cn/",
        description: "中国人民大学图书馆，人文社科类馆藏丰富。",
        image: "images/ruc-library.jpg"
      },
      {
        name: "北京师范大学图书馆",
        address: "北京市海淀区新街口外大街19号",
        phone: "010-58806113",
        website: "https://lib.bnu.edu.cn/",
        description: "北京师范大学图书馆，教育类文献丰富。",
        image: "images/bnu-library.jpg"
      },
      {
        name: "北京理工大学图书馆",
        address: "北京市海淀区中关村南大街5号",
        phone: "010-68914263",
        website: "https://lib.bit.edu.cn/",
        description: "北京理工大学图书馆，理工科馆藏丰富。",
        image: "images/bit-library.jpg"
      },
      {
        name: "北京航空航天大学图书馆",
        address: "北京市海淀区学院路37号",
        phone: "010-82317024",
        website: "https://lib.buaa.edu.cn/",
        description: "北京航空航天大学图书馆，航空航天类文献特色。",
        image: "images/buaa-library.jpg"
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
        image: "images/shanghai-library.jpg"
      },
      {
        name: "复旦大学图书馆",
        address: "上海市杨浦区邯郸路220号",
        phone: "021-65642222",
        website: "https://www.library.fudan.edu.cn/",
        description: "复旦大学图书馆，综合性大学图书馆。",
        image: "images/fudan-library.jpg"
      },
      {
        name: "上海交通大学图书馆",
        address: "上海市闵行区东川路800号",
        phone: "021-34206460",
        website: "https://www.lib.sjtu.edu.cn/",
        description: "上海交通大学图书馆，理工科馆藏丰富。",
        image: "images/sjtu-library.jpg"
      },
      {
        name: "同济大学图书馆",
        address: "上海市杨浦区四平路1239号",
        phone: "021-65982200",
        website: "https://lib.tongji.edu.cn/",
        description: "同济大学图书馆，建筑类文献特色馆藏。",
        image: "images/tongji-library.jpg"
      },
      {
        name: "华东师范大学图书馆",
        address: "上海市普陀区中山北路3663号",
        phone: "021-62232317",
        website: "https://lib.ecnu.edu.cn/",
        description: "华东师范大学图书馆，教育类文献丰富。",
        image: "images/ecnu-library.jpg"
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
        image: "images/guangzhou-library.jpg"
      },
      {
        name: "中山大学图书馆",
        address: "广州市海珠区新港西路135号",
        phone: "020-84111666",
        website: "https://library.sysu.edu.cn/",
        description: "中山大学图书馆，综合性大学图书馆。",
        image: "images/sysu-library.jpg"
      },
      {
        name: "华南理工大学图书馆",
        address: "广州市天河区五山路381号",
        phone: "020-87111474",
        website: "https://www.lib.scut.edu.cn/",
        description: "华南理工大学图书馆，理工科馆藏丰富。",
        image: "images/scut-library.jpg"
      },
      {
        name: "暨南大学图书馆",
        address: "广州市天河区黄埔大道西601号",
        phone: "020-85220223",
        website: "https://lib.jnu.edu.cn/",
        description: "暨南大学图书馆，华侨华人文献特色馆藏。",
        image: "images/jnu-library.jpg"
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
        image: "images/shenzhen-library.jpg"
      },
      {
        name: "深圳大学图书馆",
        address: "深圳市南山区南海大道3688号",
        phone: "0755-26536114",
        website: "https://lib.szu.edu.cn/",
        description: "深圳大学图书馆，现代化设施完善。",
        image: "images/szu-library.jpg"
      },
      {
        name: "南方科技大学图书馆",
        address: "深圳市南山区学苑大道1088号",
        phone: "0755-88018000",
        website: "https://lib.sustech.edu.cn/",
        description: "南方科技大学图书馆，新型研究型大学图书馆。",
        image: "images/sustech-library.jpg"
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
        image: "images/hangzhou-library.jpg"
      },
      {
        name: "浙江大学图书馆",
        address: "杭州市西湖区余杭塘路866号",
        phone: "0571-87951006",
        website: "https://libweb.zju.edu.cn/",
        description: "浙江大学图书馆，综合性研究型大学图书馆。",
        image: "images/zju-library.jpg"
      },
      {
        name: "浙江图书馆",
        address: "杭州市西湖区曙光路73号",
        phone: "0571-87988500",
        website: "https://www.zjlib.cn/",
        description: "浙江省最大的公共图书馆，历史悠久。",
        image: "images/zhejiang-library.jpg"
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
        image: "images/nanjing-library.jpg"
      },
      {
        name: "南京大学图书馆",
        address: "南京市栖霞区仙林大道163号",
        phone: "025-83593183",
        website: "https://lib.nju.edu.cn/",
        description: "南京大学图书馆，综合性大学图书馆。",
        image: "images/nju-library.jpg"
      },
      {
        name: "东南大学图书馆",
        address: "南京市玄武区四牌楼2号",
        phone: "025-83792301",
        website: "https://lib.seu.edu.cn/",
        description: "东南大学图书馆，建筑类文献特色馆藏。",
        image: "images/seu-library.jpg"
      },
      {
        name: "南京师范大学图书馆",
        address: "南京市栖霞区文苑路1号",
        phone: "025-85891000",
        website: "https://lib.njnu.edu.cn/",
        description: "南京师范大学图书馆，教育类文献丰富。",
        image: "images/njnu-library.jpg"
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
        image: "images/chengdu-library.jpg"
      },
      {
        name: "四川大学图书馆",
        address: "成都市武侯区望江路29号",
        phone: "028-85412334",
        website: "https://lib.scu.edu.cn/",
        description: "四川大学图书馆，综合性大学图书馆。",
        image: "images/scu-library.jpg"
      },
      {
        name: "电子科技大学图书馆",
        address: "成都市成华区建设北路二段4号",
        phone: "028-83202300",
        website: "https://lib.uestc.edu.cn/",
        description: "电子科技大学图书馆，电子信息类馆藏丰富。",
        image: "images/uestc-library.jpg"
      },
      {
        name: "西南交通大学图书馆",
        address: "成都市金牛区二环路北一段111号",
        phone: "028-87600600",
        website: "https://lib.swjtu.edu.cn/",
        description: "西南交通大学图书馆，交通运输类文献特色。",
        image: "images/swjtu-library.jpg"
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
        image: "images/wuhan-library.jpg"
      },
      {
        name: "武汉大学图书馆",
        address: "武汉市武昌区珞珈山",
        phone: "027-68752740",
        website: "https://www.lib.whu.edu.cn/",
        description: "武汉大学图书馆，综合性大学图书馆。",
        image: "images/whu-library.jpg"
      },
      {
        name: "华中科技大学图书馆",
        address: "武汉市洪山区珞瑜路1037号",
        phone: "027-87542230",
        website: "https://lib.hust.edu.cn/",
        description: "华中科技大学图书馆，理工科馆藏丰富。",
        image: "images/hust-library.jpg"
      },
      {
        name: "华中师范大学图书馆",
        address: "武汉市洪山区珞喻路152号",
        phone: "027-67868000",
        website: "https://lib.ccnu.edu.cn/",
        description: "华中师范大学图书馆，教育类文献丰富。",
        image: "images/ccnu-library.jpg"
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
        image: "images/shaanxi-library.jpg"
      },
      {
        name: "西安交通大学图书馆",
        address: "西安市碑林区咸宁西路28号",
        phone: "029-82667853",
        website: "https://lib.xjtu.edu.cn/",
        description: "西安交通大学图书馆，综合性大学图书馆。",
        image: "images/xjtu-library.jpg"
      },
      {
        name: "西北工业大学图书馆",
        address: "西安市碑林区友谊西路127号",
        phone: "029-88492300",
        website: "https://lib.nwpu.edu.cn/",
        description: "西北工业大学图书馆，航空航天类馆藏丰富。",
        image: "images/nwpu-library.jpg"
      },
      {
        name: "西北大学图书馆",
        address: "西安市碑林区太白北路229号",
        phone: "029-88302000",
        website: "https://lib.nwu.edu.cn/",
        description: "西北大学图书馆，综合性大学图书馆。",
        image: "images/nwu-library.jpg"
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
        image: "images/chongqing-library.jpg"
      },
      {
        name: "重庆大学图书馆",
        address: "重庆市沙坪坝区沙正街174号",
        phone: "023-65102300",
        website: "https://lib.cqu.edu.cn/",
        description: "重庆大学图书馆，综合性大学图书馆。",
        image: "images/cqu-library.jpg"
      },
      {
        name: "西南大学图书馆",
        address: "重庆市北碚区天生路2号",
        phone: "023-68252300",
        website: "https://lib.swu.edu.cn/",
        description: "西南大学图书馆，综合性大学图书馆。",
        image: "images/swu-library.jpg"
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
        image: "images/tianjin-library.jpg"
      },
      {
        name: "南开大学图书馆",
        address: "天津市南开区卫津路94号",
        phone: "022-23508176",
        website: "https://lib.nankai.edu.cn/",
        description: "南开大学图书馆，综合性大学图书馆。",
        image: "images/nankai-library.jpg"
      },
      {
        name: "天津大学图书馆",
        address: "天津市南开区卫津路92号",
        phone: "022-27406244",
        website: "https://lib.tju.edu.cn/",
        description: "天津大学图书馆，理工科馆藏丰富。",
        image: "images/tju-library.jpg"
      }
    ]
  },
  {
    city: "青岛",
    libraries: [
      {
        name: "青岛市图书馆",
        address: "青岛市市南区延吉路109号",
        phone: "0532-85013611",
        website: "https://www.qdlib.net/",
        description: "青岛市重要的公共图书馆，环境优美，服务完善。",
        image: "images/qingdao-library.jpg"
      },
      {
        name: "中国海洋大学图书馆",
        address: "青岛市崂山区松岭路238号",
        phone: "0532-66786000",
        website: "https://lib.ouc.edu.cn/",
        description: "中国海洋大学图书馆，海洋类文献特色馆藏。",
        image: "images/ouc-library.jpg"
      }
    ]
  },
  {
    city: "大连",
    libraries: [
      {
        name: "大连图书馆",
        address: "大连市西岗区长白街7号",
        phone: "0411-83633755",
        website: "https://www.dl-library.com.cn/",
        description: "大连市重要的公共图书馆，现代化设施完善。",
        image: "images/dalian-library.jpg"
      },
      {
        name: "大连理工大学图书馆",
        address: "大连市甘井子区凌工路2号",
        phone: "0411-84708600",
        website: "https://lib.dlut.edu.cn/",
        description: "大连理工大学图书馆，理工科馆藏丰富。",
        image: "images/dlut-library.jpg"
      }
    ]
  },
  {
    city: "厦门",
    libraries: [
      {
        name: "厦门市图书馆",
        address: "厦门市思明区体育路95号",
        phone: "0592-5371880",
        website: "https://www.xmlib.net/",
        description: "厦门市重要的公共图书馆，环境优美，服务完善。",
        image: "images/xiamen-library.jpg"
      },
      {
        name: "厦门大学图书馆",
        address: "厦门市思明区思明南路422号",
        phone: "0592-2182360",
        website: "https://library.xmu.edu.cn/",
        description: "厦门大学图书馆，综合性大学图书馆。",
        image: "images/xmu-library.jpg"
      }
    ]
  },
  {
    city: "苏州",
    libraries: [
      {
        name: "苏州图书馆",
        address: "苏州市姑苏区人民路918号",
        phone: "0512-65220089",
        website: "https://www.szlib.com/",
        description: "苏州市重要的公共图书馆，现代化设施完善。",
        image: "images/suzhou-library.jpg"
      },
      {
        name: "苏州大学图书馆",
        address: "苏州市姑苏区十梓街1号",
        phone: "0512-65112884",
        website: "https://lib.suda.edu.cn/",
        description: "苏州大学图书馆，综合性大学图书馆。",
        image: "images/suda-library.jpg"
      }
    ]
  },
  {
    city: "无锡",
    libraries: [
      {
        name: "无锡市图书馆",
        address: "无锡市梁溪区钟书路1号",
        phone: "0510-85757830",
        website: "https://www.wxlib.cn/",
        description: "无锡市重要的公共图书馆，环境优美，服务完善。",
        image: "images/wuxi-library.jpg"
      }
    ]
  },
  {
    city: "宁波",
    libraries: [
      {
        name: "宁波市图书馆",
        address: "宁波市海曙区永丰路135号",
        phone: "0574-87249246",
        website: "https://www.nblib.cn/",
        description: "宁波市重要的公共图书馆，现代化设施完善。",
        image: "images/ningbo-library.jpg"
      }
    ]
  },
  {
    city: "长沙",
    libraries: [
      {
        name: "湖南省图书馆",
        address: "长沙市开福区韶山北路169号",
        phone: "0731-84174166",
        website: "https://www.library.hn.cn/",
        description: "湖南省最大的公共图书馆，历史悠久，馆藏丰富。",
        image: "images/hunan-library.jpg"
      },
      {
        name: "湖南大学图书馆",
        address: "长沙市岳麓区麓山南路2号",
        phone: "0731-88822354",
        website: "https://lib.hnu.edu.cn/",
        description: "湖南大学图书馆，综合性大学图书馆。",
        image: "images/hnu-library.jpg"
      },
      {
        name: "中南大学图书馆",
        address: "长沙市岳麓区麓山南路932号",
        phone: "0731-88879600",
        website: "https://lib.csu.edu.cn/",
        description: "中南大学图书馆，理工科馆藏丰富。",
        image: "images/csu-library.jpg"
      }
    ]
  },
  {
    city: "郑州",
    libraries: [
      {
        name: "河南省图书馆",
        address: "郑州市金水区农业东路8号",
        phone: "0371-67181499",
        website: "https://www.henanlib.gov.cn/",
        description: "河南省最大的公共图书馆，现代化设施完善。",
        image: "images/henan-library.jpg"
      },
      {
        name: "郑州大学图书馆",
        address: "郑州市科学大道100号",
        phone: "0371-67781666",
        website: "https://lib.zzu.edu.cn/",
        description: "郑州大学图书馆，综合性大学图书馆。",
        image: "images/zzu-library.jpg"
      }
    ]
  },
  {
    city: "济南",
    libraries: [
      {
        name: "山东省图书馆",
        address: "济南市历下区二环东路2912号",
        phone: "0531-85590666",
        website: "https://www.sdlib.com/",
        description: "山东省最大的公共图书馆，历史悠久，馆藏丰富。",
        image: "images/shandong-library.jpg"
      },
      {
        name: "山东大学图书馆",
        address: "济南市历城区山大南路27号",
        phone: "0531-88364697",
        website: "https://lib.sdu.edu.cn/",
        description: "山东大学图书馆，综合性大学图书馆。",
        image: "images/sdu-library.jpg"
      }
    ]
  },
  {
    city: "合肥",
    libraries: [
      {
        name: "安徽省图书馆",
        address: "合肥市包河区芜湖路74号",
        phone: "0551-62881000",
        website: "https://www.ahlib.com/",
        description: "安徽省最大的公共图书馆，现代化设施完善。",
        image: "images/anhui-library.jpg"
      },
      {
        name: "中国科学技术大学图书馆",
        address: "合肥市蜀山区黄山路443号",
        phone: "0551-63602130",
        website: "https://lib.ustc.edu.cn/",
        description: "中国科学技术大学图书馆，理工科馆藏丰富。",
        image: "images/ustc-library.jpg"
      },
      {
        name: "合肥工业大学图书馆",
        address: "合肥市包河区屯溪路193号",
        phone: "0551-62901000",
        website: "https://lib.hfut.edu.cn/",
        description: "合肥工业大学图书馆，理工科馆藏丰富。",
        image: "images/hfut-library.jpg"
      }
    ]
  },
  {
    city: "福州",
    libraries: [
      {
        name: "福建省图书馆",
        address: "福州市鼓楼区湖东路227号",
        phone: "0591-87592800",
        website: "https://www.fjlib.net/",
        description: "福建省最大的公共图书馆，历史悠久，馆藏丰富。",
        image: "images/fujian-library.jpg"
      },
      {
        name: "福州大学图书馆",
        address: "福州市闽侯县大学新区学园路2号",
        phone: "0591-22865000",
        website: "https://lib.fzu.edu.cn/",
        description: "福州大学图书馆，综合性大学图书馆。",
        image: "images/fzu-library.jpg"
      }
    ]
  },
  {
    city: "南昌",
    libraries: [
      {
        name: "江西省图书馆",
        address: "南昌市东湖区洪都北大道198号",
        phone: "0791-88508972",
        website: "https://www.jxlib.gov.cn/",
        description: "江西省最大的公共图书馆，现代化设施完善。",
        image: "images/jiangxi-library.jpg"
      },
      {
        name: "南昌大学图书馆",
        address: "南昌市红谷滩新区学府大道999号",
        phone: "0791-83969000",
        website: "https://lib.ncu.edu.cn/",
        description: "南昌大学图书馆，综合性大学图书馆。",
        image: "images/ncu-library.jpg"
      }
    ]
  },
  {
    city: "昆明",
    libraries: [
      {
        name: "云南省图书馆",
        address: "昆明市五华区翠湖南路141号",
        phone: "0871-63161650",
        website: "https://www.ynlib.cn/",
        description: "云南省最大的公共图书馆，环境优美，服务完善。",
        image: "images/yunnan-library.jpg"
      },
      {
        name: "云南大学图书馆",
        address: "昆明市呈贡区大学城东外环南路",
        phone: "0871-65031111",
        website: "https://lib.ynu.edu.cn/",
        description: "云南大学图书馆，综合性大学图书馆。",
        image: "images/ynu-library.jpg"
      }
    ]
  },
  {
    city: "贵阳",
    libraries: [
      {
        name: "贵州省图书馆",
        address: "贵阳市云岩区北京路136号",
        phone: "0851-86831680",
        website: "https://www.gzlib.org.cn/",
        description: "贵州省最大的公共图书馆，现代化设施完善。",
        image: "images/guizhou-library.jpg"
      },
      {
        name: "贵州大学图书馆",
        address: "贵阳市花溪区贵州大学",
        phone: "0851-88292000",
        website: "https://lib.gzu.edu.cn/",
        description: "贵州大学图书馆，综合性大学图书馆。",
        image: "images/gzu-library.jpg"
      }
    ]
  },
  {
    city: "南宁",
    libraries: [
      {
        name: "广西壮族自治区图书馆",
        address: "南宁市青秀区民族大道61号",
        phone: "0771-5860247",
        website: "https://www.gxlib.org.cn/",
        description: "广西壮族自治区最大的公共图书馆，历史悠久，馆藏丰富。",
        image: "images/guangxi-library.jpg"
      },
      {
        name: "广西大学图书馆",
        address: "南宁市西乡塘区大学东路100号",
        phone: "0771-3232200",
        website: "https://lib.gxu.edu.cn/",
        description: "广西大学图书馆，综合性大学图书馆。",
        image: "images/gxu-library.jpg"
      }
    ]
  },
  {
    city: "海口",
    libraries: [
      {
        name: "海南省图书馆",
        address: "海口市美兰区国兴大道36号",
        phone: "0898-65231666",
        website: "https://www.hilib.com/",
        description: "海南省最大的公共图书馆，现代化设施完善。",
        image: "images/hainan-library.jpg"
      },
      {
        name: "海南大学图书馆",
        address: "海口市美兰区人民大道58号",
        phone: "0898-66279200",
        website: "https://lib.hainanu.edu.cn/",
        description: "海南大学图书馆，综合性大学图书馆。",
        image: "images/hainanu-library.jpg"
      }
    ]
  },
  {
    city: "拉萨",
    libraries: [
      {
        name: "西藏自治区图书馆",
        address: "拉萨市城关区北京中路10号",
        phone: "0891-6332954",
        website: "https://www.tibetlib.com/",
        description: "西藏自治区最大的公共图书馆，具有浓郁的民族特色。",
        image: "images/tibet-library.jpg"
      }
    ]
  },
  {
    city: "银川",
    libraries: [
      {
        name: "宁夏回族自治区图书馆",
        address: "银川市兴庆区解放东街102号",
        phone: "0951-6021276",
        website: "https://www.nxlib.org.cn/",
        description: "宁夏回族自治区最大的公共图书馆，现代化设施完善。",
        image: "images/ningxia-library.jpg"
      },
      {
        name: "宁夏大学图书馆",
        address: "银川市西夏区贺兰山西路489号",
        phone: "0951-2061000",
        website: "https://lib.nxu.edu.cn/",
        description: "宁夏大学图书馆，综合性大学图书馆。",
        image: "images/nxu-library.jpg"
      }
    ]
  },
  {
    city: "乌鲁木齐",
    libraries: [
      {
        name: "新疆维吾尔自治区图书馆",
        address: "乌鲁木齐市沙依巴克区北京南路4号",
        phone: "0991-8559000",
        website: "https://www.xjlib.org.cn/",
        description: "新疆维吾尔自治区最大的公共图书馆，具有浓郁的民族特色。",
        image: "images/xinjiang-library.jpg"
      },
      {
        name: "新疆大学图书馆",
        address: "乌鲁木齐市天山区胜利路666号",
        phone: "0991-8582000",
        website: "https://lib.xju.edu.cn/",
        description: "新疆大学图书馆，综合性大学图书馆。",
        image: "images/xju-library.jpg"
      }
    ]
  },
  {
    city: "呼和浩特",
    libraries: [
      {
        name: "内蒙古自治区图书馆",
        address: "呼和浩特市赛罕区乌兰察布东路15号",
        phone: "0471-6293111",
        website: "https://www.nmglib.com/",
        description: "内蒙古自治区最大的公共图书馆，具有浓郁的民族特色。",
        image: "images/neimenggu-library.jpg"
      },
      {
        name: "内蒙古大学图书馆",
        address: "呼和浩特市赛罕区大学西路235号",
        phone: "0471-4992000",
        website: "https://lib.imu.edu.cn/",
        description: "内蒙古大学图书馆，综合性大学图书馆。",
        image: "images/imu-library.jpg"
      }
    ]
  },
  {
    city: "哈尔滨",
    libraries: [
      {
        name: "黑龙江省图书馆",
        address: "哈尔滨市南岗区长江路218号",
        phone: "0451-85990500",
        website: "https://www.hljlib.org.cn/",
        description: "黑龙江省最大的公共图书馆，现代化设施完善。",
        image: "images/heilongjiang-library.jpg"
      },
      {
        name: "哈尔滨工业大学图书馆",
        address: "哈尔滨市南岗区西大直街92号",
        phone: "0451-86414096",
        website: "https://lib.hit.edu.cn/",
        description: "哈尔滨工业大学图书馆，理工科馆藏丰富。",
        image: "images/hit-library.jpg"
      },
      {
        name: "哈尔滨工程大学图书馆",
        address: "哈尔滨市南岗区南通大街145号",
        phone: "0451-82518000",
        website: "https://lib.hrbeu.edu.cn/",
        description: "哈尔滨工程大学图书馆，船舶海洋类文献特色。",
        image: "images/hrbeu-library.jpg"
      }
    ]
  },
  {
    city: "长春",
    libraries: [
      {
        name: "吉林省图书馆",
        address: "长春市南关区人民大街10055号",
        phone: "0431-85672000",
        website: "https://www.jllib.com/",
        description: "吉林省最大的公共图书馆，历史悠久，馆藏丰富。",
        image: "images/jilin-library.jpg"
      },
      {
        name: "吉林大学图书馆",
        address: "长春市朝阳区前进大街2699号",
        phone: "0431-85166000",
        website: "https://lib.jlu.edu.cn/",
        description: "吉林大学图书馆，综合性大学图书馆。",
        image: "images/jlu-library.jpg"
      },
      {
        name: "东北师范大学图书馆",
        address: "长春市南关区人民大街5268号",
        phone: "0431-85098000",
        website: "https://lib.nenu.edu.cn/",
        description: "东北师范大学图书馆，教育类文献丰富。",
        image: "images/nenu-library.jpg"
      }
    ]
  },
  {
    city: "沈阳",
    libraries: [
      {
        name: "辽宁省图书馆",
        address: "沈阳市沈河区万柳塘路111号",
        phone: "024-24822400",
        website: "https://www.lnlib.com/",
        description: "辽宁省最大的公共图书馆，现代化设施完善。",
        image: "images/liaoning-library.jpg"
      },
      {
        name: "东北大学图书馆",
        address: "沈阳市和平区文化路3号巷11号",
        phone: "024-83687700",
        website: "https://lib.neu.edu.cn/",
        description: "东北大学图书馆，理工科馆藏丰富。",
        image: "images/neu-library.jpg"
      },
      {
        name: "辽宁大学图书馆",
        address: "沈阳市皇姑区崇山中路66号",
        phone: "024-62202000",
        website: "https://lib.lnu.edu.cn/",
        description: "辽宁大学图书馆，综合性大学图书馆。",
        image: "images/lnu-library.jpg"
      }
    ]
  },
  {
    city: "石家庄",
    libraries: [
      {
        name: "河北省图书馆",
        address: "石家庄市长安区东大街16号",
        phone: "0311-86088888",
        website: "https://www.helib.net/",
        description: "河北省最大的公共图书馆，现代化设施完善。",
        image: "images/hebei-library.jpg"
      },
      {
        name: "河北大学图书馆",
        address: "保定市莲池区五四东路180号",
        phone: "0312-5079700",
        website: "https://lib.hbu.edu.cn/",
        description: "河北大学图书馆，综合性大学图书馆。",
        image: "images/hbu-library.jpg"
      }
    ]
  },
  {
    city: "太原",
    libraries: [
      {
        name: "山西省图书馆",
        address: "太原市迎泽区文源巷1号",
        phone: "0351-4126444",
        website: "https://lib.sx.cn/",
        description: "山西省最大的公共图书馆，历史悠久，馆藏丰富。",
        image: "images/shanxi-library.jpg"
      },
      {
        name: "山西大学图书馆",
        address: "太原市小店区坞城路92号",
        phone: "0351-7010000",
        website: "https://lib.sxu.edu.cn/",
        description: "山西大学图书馆，综合性大学图书馆。",
        image: "images/sxu-library.jpg"
      }
    ]
  },
  {
    city: "兰州",
    libraries: [
      {
        name: "甘肃省图书馆",
        address: "兰州市城关区南滨河东路488号",
        phone: "0931-8270074",
        website: "https://www.gslib.com.cn/",
        description: "甘肃省最大的公共图书馆，现代化设施完善。",
        image: "images/gansu-library.jpg"
      },
      {
        name: "兰州大学图书馆",
        address: "兰州市城关区天水南路222号",
        phone: "0931-8912468",
        website: "https://lib.lzu.edu.cn/",
        description: "兰州大学图书馆，综合性大学图书馆。",
        image: "images/lzu-library.jpg"
      },
      {
        name: "西北师范大学图书馆",
        address: "兰州市安宁区安宁东路967号",
        phone: "0931-7971000",
        website: "https://lib.nwnu.edu.cn/",
        description: "西北师范大学图书馆，教育类文献丰富。",
        image: "images/nwnu-library.jpg"
      }
    ]
  },
  {
    city: "西宁",
    libraries: [
      {
        name: "青海省图书馆",
        address: "西宁市城西区西关大街66号",
        phone: "0971-6316144",
        website: "https://www.qhlib.org.cn/",
        description: "青海省最大的公共图书馆，现代化设施完善。",
        image: "images/qinghai-library.jpg"
      },
      {
        name: "青海大学图书馆",
        address: "西宁市城北区宁大路251号",
        phone: "0971-5310000",
        website: "https://lib.qhu.edu.cn/",
        description: "青海大学图书馆，综合性大学图书馆。",
        image: "images/qhu-library.jpg"
      }
    ]
  },
  {
    city: "珠海",
    libraries: [
      {
        name: "珠海市图书馆",
        address: "珠海市香洲区迎宾北路3061号",
        phone: "0756-2661900",
        website: "https://www.zhlib.com.cn/",
        description: "珠海市重要的公共图书馆，现代化设施完善。",
        image: "images/zhuhai-library.jpg"
      },
      {
        name: "北京理工大学珠海学院图书馆",
        address: "珠海市唐家湾金凤路6号",
        phone: "0756-3622000",
        website: "https://lib.zhbit.edu.cn/",
        description: "北京理工大学珠海学院图书馆，理工科馆藏丰富。",
        image: "images/zhbit-library.jpg"
      }
    ]
  },
  {
    city: "佛山",
    libraries: [
      {
        name: "佛山市图书馆",
        address: "佛山市禅城区华远东路12号",
        phone: "0757-82220000",
        website: "https://www.fslib.com.cn/",
        description: "佛山市重要的公共图书馆，现代化设施完善。",
        image: "images/foshan-library.jpg"
      }
    ]
  },
  {
    city: "东莞",
    libraries: [
      {
        name: "东莞市图书馆",
        address: "东莞市莞城区鸿福路1号",
        phone: "0769-22834188",
        website: "https://www.dglib.cn/",
        description: "东莞市重要的公共图书馆，现代化设施完善。",
        image: "images/dongguan-library.jpg"
      }
    ]
  },
  {
    city: "中山",
    libraries: [
      {
        name: "中山市图书馆",
        address: "中山市东区兴中道6号",
        phone: "0760-88324567",
        website: "https://www.zslib.com.cn/",
        description: "中山市重要的公共图书馆，现代化设施完善。",
        image: "images/zhongshan-library.jpg"
      }
    ]
  },
  {
    city: "惠州",
    libraries: [
      {
        name: "惠州市图书馆",
        address: "惠州市惠城区江北三新南路15号",
        phone: "0752-2780300",
        website: "https://www.hzlib.com.cn/",
        description: "惠州市重要的公共图书馆，现代化设施完善。",
        image: "images/huizhou-library.jpg"
      }
    ]
  },
  {
    city: "江门",
    libraries: [
      {
        name: "江门市图书馆",
        address: "江门市蓬江区发展大道五邑华侨广场",
        phone: "0750-3502888",
        website: "https://www.jmlib.com.cn/",
        description: "江门市重要的公共图书馆，现代化设施完善。",
        image: "images/jiangmen-library.jpg"
      }
    ]
  },
  {
    city: "肇庆",
    libraries: [
      {
        name: "肇庆市图书馆",
        address: "肇庆市端州区信安大道",
        phone: "0758-2208000",
        website: "https://www.zqlib.com.cn/",
        description: "肇庆市重要的公共图书馆，现代化设施完善。",
        image: "images/zhaoqing-library.jpg"
      }
    ]
  },
  {
    city: "清远",
    libraries: [
      {
        name: "清远市图书馆",
        address: "清远市清城区银泉北路",
        phone: "0763-3370000",
        website: "https://www.qylib.com.cn/",
        description: "清远市重要的公共图书馆，现代化设施完善。",
        image: "images/qingyuan-library.jpg"
      }
    ]
  },
  {
    city: "韶关",
    libraries: [
      {
        name: "韶关市图书馆",
        address: "韶关市浈江区风度北路",
        phone: "0751-8888000",
        website: "https://www.sglib.com.cn/",
        description: "韶关市重要的公共图书馆，现代化设施完善。",
        image: "images/shaoguan-library.jpg"
      }
    ]
  },
  {
    city: "河源",
    libraries: [
      {
        name: "河源市图书馆",
        address: "河源市源城区沿江路",
        phone: "0762-3330000",
        website: "https://www.hylib.com.cn/",
        description: "河源市重要的公共图书馆，现代化设施完善。",
        image: "images/heyuan-library.jpg"
      }
    ]
  },
  {
    city: "梅州",
    libraries: [
      {
        name: "梅州市图书馆",
        address: "梅州市梅江区江南路",
        phone: "0753-2240000",
        website: "https://www.mzlib.com.cn/",
        description: "梅州市重要的公共图书馆，现代化设施完善。",
        image: "images/meizhou-library.jpg"
      }
    ]
  },
  {
    city: "汕尾",
    libraries: [
      {
        name: "汕尾市图书馆",
        address: "汕尾市城区汕尾大道",
        phone: "0660-3360000",
        website: "https://www.swlib.com.cn/",
        description: "汕尾市重要的公共图书馆，现代化设施完善。",
        image: "images/shanwei-library.jpg"
      }
    ]
  },
  {
    city: "揭阳",
    libraries: [
      {
        name: "揭阳市图书馆",
        address: "揭阳市榕城区进贤门大道",
        phone: "0663-8760000",
        website: "https://www.jylib.com.cn/",
        description: "揭阳市重要的公共图书馆，现代化设施完善。",
        image: "images/jieyang-library.jpg"
      }
    ]
  },
  {
    city: "潮州",
    libraries: [
      {
        name: "潮州市图书馆",
        address: "潮州市湘桥区潮州大道",
        phone: "0768-2260000",
        website: "https://www.czlib.com.cn/",
        description: "潮州市重要的公共图书馆，现代化设施完善。",
        image: "images/chaozhou-library.jpg"
      }
    ]
  },
  {
    city: "汕头",
    libraries: [
      {
        name: "汕头市图书馆",
        address: "汕头市金平区金砂路",
        phone: "0754-8810000",
        website: "https://www.stlib.com.cn/",
        description: "汕头市重要的公共图书馆，现代化设施完善。",
        image: "images/shantou-library.jpg"
      }
    ]
  }
]; 