/*
 * 折线图
 * 描述: 每月产量
 */
;(function (global, fun) {
	if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
		module.exports = fun();
	} else if (typeof define === 'function'
		&& (typeof define.amd === 'object' || typeof define.cmd === 'object')) {
		define(fun);
	} else {
		global.agChart.weekly.conversation = fun();
	}
})(window, function () {
	'use strict';

	function chart() {

		this.name = "weekly.conversation";

		this.single = null;

		this.option = {
			//标题
			title: {
				show: false
			},
			//网格
			grid: {
				top: '20',
				left: '20',
				right: '20',
				bottom: '20'
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
						color: '#5d556d',
						type: 'solid'
					}
				},
				axisTick: {
					show: false
				},
				axisLabel: {
					textStyle: {
						color: '#655272',
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
							color: '#f48d7e'
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
					smooth: true,
					symbolSize: 5,
					itemStyle: {
						normal: {
							color: '#f48d7e'
						}
					},
					lineStyle: {
						normal: {
							width: 1
						}
					},
					areaStyle: {
						normal: {
							color: '#5d556d'
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
