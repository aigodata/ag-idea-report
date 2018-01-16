/*
 * 柱图
 * 描述: 旅行
 */
;(function (global, fun) {
	if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
		module.exports = fun();
	} else if (typeof define === 'function'
		&& (typeof define.amd === 'object' || typeof define.cmd === 'object')) {
		define(fun);
	} else {
		global.agChart.travel.demo = fun();
	}
})(window, function () {
	'use strict';

	function chart() {

		this.name = "travel.demo";

		this.single = null;

		this.option = {
			//标题
			title: {
				text: ''
			},
			//网格
			grid: {
				top: '30',
				left: '20',
				right: '20',
				bottom: '58'
			},
			//图例
			legend: {
				top: 20,
				right: 20,
				data: [''],
				itemGap: 18,
				textStyle: {
					color: '#888',
					fontSize: 12
				},
				itemWidth: 10,
				itemHeight: 3
			},
			//提示框
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'none'
				},
				backgroundColor: 'rgba(0,0,0,.7)',
				transitionDuration: 0.15,
				textStyle: {
					fontSize: 11
				},
				padding: [8, 15]
			},
			//x轴
			xAxis: {
				type: 'category',
				data: null,
				scale: true,
				splitLine: {
					show: false
				},
				axisLine: {
					lineStyle: {
						color: '#eb5a69',
						type: 'solid',
					}
				},
				axisTick: {
					show: false
				},
				axisLabel: {
					show:false,
					textStyle: {
						color: '#eb5a69',
						fontSize: '12'
					}
				}
			},
			//y轴
			yAxis: {
				type: 'value',
				splitLine: {
					show: false,
					lineStyle: {
						type: 'dashed',
						color: '#e7e7e7'
					}
				},
				min: 0,
				axisLine: {
					show: false
				},
				axisTick: {
					show: false
				},
				axisLabel: {
					show: false,
					textStyle: {
						color: '#888',
						fontSize: '12'
					}
				},
				scale: true
			},
			//系列列表
			series: [
				{
					name: '',
					type: 'bar',
					barWidth: 5,
					barGap: 2,
					data: null,
					itemStyle: {
						normal: {
							color: '#b5a977'
						}
					}
				},
				{
					name: '',
					type: 'bar',
					barWidth: 5,
					barGap: 2,
					stack: '旅行',
					data: null,
					itemStyle: {
						normal: {
							color: '#3998ac'
						}
					}
				},
				{
					name: '',
					type: 'bar',
					barWidth: 5,
					barGap: 2,
					stack: '旅行',
					data: null,
					itemStyle: {
						normal: {
							color: '#fff'
						}
					}
				},
				{
					name: '',
					type: 'bar',
					barWidth: 5,
					barGap: 2,
					stack: '旅行',
					data: null,
					itemStyle: {
						normal: {
							color: '#e54843'
						}
					}
				},
				{
					name: '',
					type: 'bar',
					barWidth: 5,
					barGap: 2,
					data: null,
					itemStyle: {
						normal: {
							color: '#b5a977'
						}
					}
				},
				{
					name: '',
					type: 'bar',
					barWidth: 5,
					barGap: 2,
					stack: '旅行2',
					data: null,
					itemStyle: {
						normal: {
							color: '#3998ac'
						}
					}
				},
				{
					name: '',
					type: 'bar',
					barWidth: 5,
					barGap: 2,
					stack: '旅行2',
					data: null,
					itemStyle: {
						normal: {
							color: '#e54843'
						}
					}
				},
				{
					name: '',
					type: 'bar',
					barWidth: 5,
					barGap: 2,
					stack: '旅行2',
					data: null,
					itemStyle: {
						normal: {
							color: '#fff'
						}
					}
				}
			]
		};

		this.init = function (el, style, data) {
			this.single = echarts.init(this.getDom(el));
			this.setData(data);
			this.single.setOption(this.option);
		};

		this.setData = function (data) {

			this.option.series[0].name = data.legend[0];
			this.option.series[0].data = data.data[0];

			this.option.series[1].name = data.legend[1];
			this.option.series[1].data = data.data[1];

			this.option.series[2].name = data.legend[2];
			this.option.series[2].data = data.data[2];

			this.option.series[3].name = data.legend[3];
			this.option.series[3].data = data.data[3];

			this.option.series[4].name = data.legend[4];
			this.option.series[4].data = data.data[4];

			this.option.series[5].name = data.legend[5];
			this.option.series[5].data = data.data[5];

			this.option.series[6].name = data.legend[6];
			this.option.series[6].data = data.data[6];

			this.option.series[7].name = data.legend[7];
			this.option.series[7].data = data.data[7];

			this.option.xAxis.data = data.xAxis;
		};

		this.setStyle = function () {

		};

		this.resize = function () {
			this.single.resize();
		};
	}

	chart.prototype = agChart.common;
	chart.prototype.constructor = chart;

	return new chart();
});
