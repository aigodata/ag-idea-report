/*
 * 折线图
 * 描述: 日常活动
 */
;(function (global, fun) {
	if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
		module.exports = fun();
	} else if (typeof define === 'function'
		&& (typeof define.amd === 'object' || typeof define.cmd === 'object')) {
		define(fun);
	} else {
		global.agChart.activitiesB.daily = fun();
	}
})(window, function () {
	'use strict';

	function chart() {

		this.name = "activitiesB.daily";

		this.single = null;

		this.option = {
			//标题
			title: {
				show: false
			},
			//网格
			grid: {
				top: '40',
				left: '20',
				right: '20',
				bottom: '1'
			},
			//图例
			legend: {
				show: false
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
				boundaryGap: false,
				data: null,
				scale: true,
				splitLine: {
					show: false
				},
				axisLine: {
					lineStyle: {
						color: '#efefef',
						type: 'solid'
					}
				},
				axisTick: {
					show: false
				},
				axisLabel: {
					show:false,
					textStyle: {
						color: '#888',
						fontSize: '12'
					}
				}
			},
			//y轴
			yAxis: {
				type: 'value',
				splitLine: {
					show: false
				},
				axisLine: {
					show: false
				},
				axisTick: {
					show: false
				},
				axisLabel: {
					show: false
				},
				scale: true
			},
			//系列列表
			series: [
				{
					name: '',
					data: null,
					type: 'line',
					symbol: 'circle',
					symbolSize: 5,
					itemStyle: {
						normal: {
							color: '#655272'
						}
					},
					lineStyle: {
						normal: {
							width: 1
						}
					}
				},
				{
					name: '',
					data: null,
					type: 'line',
					symbol: 'circle',
					symbolSize: 5,
					itemStyle: {
						normal: {
							color: '#fff'
						}
					},
					lineStyle: {
						normal: {
							width: 1
						}
					}
				}]
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
