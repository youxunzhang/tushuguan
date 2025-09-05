#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
城市标志建筑图片生成器
为每个城市创建独特的标志建筑SVG图片
"""

import os

def create_city_landmark(filename, city_name, landmark_name, landmark_type):
    """创建城市标志建筑的SVG图片"""
    
    # 根据城市和建筑类型选择不同的颜色和图标
    colors = {
        'beijing': ['#e74c3c', '#c0392b', '#a93226'],  # 北京红
        'shanghai': ['#3498db', '#2980b9', '#1f618d'],  # 上海蓝
        'guangzhou': ['#f39c12', '#e67e22', '#d35400'],  # 广州橙
        'shenzhen': ['#27ae60', '#229954', '#1e8449'],  # 深圳绿
        'hangzhou': ['#9b59b6', '#8e44ad', '#7d3c98'],  # 杭州紫
        'nanjing': ['#34495e', '#2c3e50', '#1b2631'],  # 南京深蓝
        'chengdu': ['#e67e22', '#d35400', '#ba4a00'],  # 成都橙红
        'wuhan': ['#e74c3c', '#c0392b', '#a93226'],  # 武汉红
        'xian': ['#f1c40f', '#f39c12', '#e67e22'],  # 西安金黄
        'chongqing': ['#8e44ad', '#7d3c98', '#6c3483'],  # 重庆紫
        'tianjin': ['#16a085', '#138d75', '#117a65']   # 天津青
    }
    
    # 获取城市颜色
    city_key = city_name.lower().replace('市', '').replace('省', '')
    if city_key in colors:
        primary_color = colors[city_key][0]
        secondary_color = colors[city_key][1]
        accent_color = colors[city_key][2]
    else:
        primary_color = '#3498db'
        secondary_color = '#2980b9'
        accent_color = '#1f618d'
    
    # 根据建筑类型选择图标
    icons = {
        'tower': '🗼',      # 塔
        'building': '🏢',   # 建筑
        'bridge': '🌉',     # 桥
        'temple': '🏛️',    # 寺庙
        'museum': '🏛️',    # 博物馆
        'park': '🏞️',      # 公园
        'monument': '🗽',   # 纪念碑
        'palace': '🏰',     # 宫殿
        'gate': '🏛️',      # 城门
        'pagoda': '🗼'      # 宝塔
    }
    
    icon = icons.get(landmark_type, '🏛️')
    
    svg_content = f'''<?xml version="1.0" encoding="UTF-8"?>
<svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:{primary_color};stop-opacity:1" />
      <stop offset="100%" style="stop-color:{secondary_color};stop-opacity:1" />
    </linearGradient>
    <linearGradient id="buildingGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:{accent_color};stop-opacity:1" />
      <stop offset="100%" style="stop-color:{secondary_color};stop-opacity:1" />
    </linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="2" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.3"/>
    </filter>
  </defs>
  
  <!-- 背景 -->
  <rect width="400" height="300" fill="url(#bgGrad)"/>
  
  <!-- 天空装饰 -->
  <circle cx="80" cy="60" r="20" fill="rgba(255,255,255,0.1)"/>
  <circle cx="320" cy="80" r="15" fill="rgba(255,255,255,0.1)"/>
  <circle cx="350" cy="40" r="10" fill="rgba(255,255,255,0.1)"/>
  
  <!-- 主要建筑 -->
  <g filter="url(#shadow)">
    <!-- 建筑主体 -->
    <rect x="150" y="120" width="100" height="120" fill="url(#buildingGrad)" rx="5"/>
    
    <!-- 建筑顶部 -->
    <rect x="140" y="110" width="120" height="20" fill="{accent_color}" rx="10"/>
    
    <!-- 建筑装饰 -->
    <rect x="160" y="140" width="20" height="20" fill="rgba(255,255,255,0.3)" rx="3"/>
    <rect x="190" y="140" width="20" height="20" fill="rgba(255,255,255,0.3)" rx="3"/>
    <rect x="220" y="140" width="20" height="20" fill="rgba(255,255,255,0.3)" rx="3"/>
    
    <rect x="160" y="170" width="20" height="20" fill="rgba(255,255,255,0.3)" rx="3"/>
    <rect x="190" y="170" width="20" height="20" fill="rgba(255,255,255,0.3)" rx="3"/>
    <rect x="220" y="170" width="20" height="20" fill="rgba(255,255,255,0.3)" rx="3"/>
    
    <rect x="160" y="200" width="20" height="20" fill="rgba(255,255,255,0.3)" rx="3"/>
    <rect x="190" y="200" width="20" height="20" fill="rgba(255,255,255,0.3)" rx="3"/>
    <rect x="220" y="200" width="20" height="20" fill="rgba(255,255,255,0.3)" rx="3"/>
    
    <!-- 建筑入口 -->
    <rect x="185" y="220" width="30" height="20" fill="rgba(255,255,255,0.8)" rx="3"/>
  </g>
  
  <!-- 建筑图标 -->
  <text x="200" y="100" font-family="Arial, sans-serif" font-size="40" fill="white" text-anchor="middle">{icon}</text>
  
  <!-- 城市名称 -->
  <text x="200" y="270" font-family="Arial, sans-serif" font-size="18" fill="white" text-anchor="middle" font-weight="bold">{city_name}</text>
  
  <!-- 建筑名称 -->
  <text x="200" y="290" font-family="Arial, sans-serif" font-size="14" fill="rgba(255,255,255,0.8)" text-anchor="middle">{landmark_name}</text>
</svg>'''
    
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(svg_content)
    print(f"创建城市标志建筑图片: {filename}")

def main():
    """主函数 - 为所有城市创建标志建筑图片"""
    
    # 确保images目录存在
    if not os.path.exists('images'):
        os.makedirs('images')
    
    # 城市标志建筑数据
    city_landmarks = [
        # 北京
        ('beijing', '北京', '天安门', 'monument'),
        ('capital', '北京', '故宫', 'palace'),
        ('pku', '北京', '未名湖', 'park'),
        ('tsinghua', '北京', '清华园', 'park'),
        ('ruc', '北京', '人大校园', 'building'),
        ('bnu', '北京', '北师大', 'building'),
        ('bit', '北京', '北理工', 'building'),
        ('buaa', '北京', '北航', 'building'),
        
        # 上海
        ('shanghai', '上海', '东方明珠', 'tower'),
        ('fudan', '上海', '复旦校园', 'building'),
        ('sjtu', '上海', '交大校园', 'building'),
        ('tongji', '上海', '同济校园', 'building'),
        ('ecnu', '上海', '华师大', 'building'),
        
        # 广州
        ('guangzhou', '广州', '广州塔', 'tower'),
        ('sysu', '广州', '中大校园', 'building'),
        ('scut', '广州', '华工校园', 'building'),
        ('jnu', '广州', '暨大校园', 'building'),
        
        # 深圳
        ('shenzhen', '深圳', '平安金融中心', 'building'),
        ('szu', '深圳', '深大校园', 'building'),
        ('sustech', '深圳', '南科大', 'building'),
        
        # 杭州
        ('hangzhou', '杭州', '西湖', 'park'),
        ('zju', '杭州', '浙大校园', 'building'),
        ('zhejiang', '杭州', '浙江图书馆', 'building'),
        
        # 南京
        ('nanjing', '南京', '夫子庙', 'temple'),
        ('nju', '南京', '南大校园', 'building'),
        ('seu', '南京', '东大校园', 'building'),
        ('njnu', '南京', '南师大', 'building'),
        
        # 成都
        ('chengdu', '成都', '宽窄巷子', 'building'),
        ('scu', '成都', '川大校园', 'building'),
        ('uestc', '成都', '电子科大', 'building'),
        ('swjtu', '成都', '西南交大', 'building'),
        
        # 武汉
        ('wuhan', '武汉', '黄鹤楼', 'tower'),
        ('whu', '武汉', '武大校园', 'building'),
        ('hust', '武汉', '华科大', 'building'),
        ('ccnu', '武汉', '华师大', 'building'),
        
        # 西安
        ('xian', '西安', '大雁塔', 'pagoda'),
        ('xjtu', '西安', '交大校园', 'building'),
        ('nwpu', '西安', '西工大', 'building'),
        ('nwu', '西安', '西北大', 'building'),
        
        # 重庆
        ('chongqing', '重庆', '洪崖洞', 'building'),
        ('cqu', '重庆', '重大校园', 'building'),
        ('swu', '重庆', '西南大', 'building'),
        
        # 天津
        ('tianjin', '天津', '天津之眼', 'bridge'),
        ('nankai', '天津', '南开校园', 'building'),
        ('tju', '天津', '天大校园', 'building')
    ]
    
    # 为每个城市创建标志建筑图片
    for landmark_id, city_name, landmark_name, landmark_type in city_landmarks:
        filename = f"images/{landmark_id}-landmark.svg"
        create_city_landmark(filename, city_name, landmark_name, landmark_type)
    
    print(f"\n✅ 成功创建了 {len(city_landmarks)} 个城市标志建筑图片！")
    print("所有图片已保存到 images/ 目录中")

if __name__ == "__main__":
    main()
