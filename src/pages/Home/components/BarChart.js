import * as echarts from 'echarts'
import { useEffect, useRef } from 'react'
// 柱状图组件

// 1.把功能代码都放到这个组件中
// 2.把可变的部分抽象成prop参数

const BarChart =({title}) => {
  const chartRef = useRef(null)
  useEffect(() => {
    // 保证dom可用 才进行图表的渲染
    // 1.获取渲染图表的dom节点
    // const chartDom = document.getElementById('main')
    const chartDom = chartRef.current

    // 2.图标初始化生成图表实例对象
    const myChart = echarts.init(chartDom)

    // 3.准备图表参数
    const option = {
      title: {
        text: title
      },
      xAxis: {
        type: 'category',
        data: ['Vue', 'React', 'Angular']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [10, 40, 70],
          type: 'bar'
        }
      ]
    };
    // 4.使用图表参数完成图表的渲染
    option && myChart.setOption(option)
  }, [])
  return <div ref={chartRef} id='main' style={{ width: '500px', height: '400px' }}></div>
}

export default BarChart