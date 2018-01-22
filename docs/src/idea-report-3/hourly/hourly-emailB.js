/*
 * 柱图
 * 描述: 每小时邮件 下
 */
;(function (global, fun) {
	if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
		module.exports = fun();
	} else if (typeof define === 'function'
		&& (typeof define.amd === 'object' || typeof define.cmd === 'object')) {
		define(fun);
	} else {
		global.agChart.hourly.emailB = fun();
	}
})(window, function () {
	'use strict';

	function chart() {

		this.name = "hourly.emailB";

		this.single = null;

		this.option = {
			//标题
			title: {
				text: ''
			},
			//网格
			grid: {
				top: '20',
				left: '10',
				right: '10',
				bottom: '1'
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
				itemWidth: 8,
				itemHeight: 8
			},
			//提示框
			tooltip: {
				trigger: 'item',
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
						color: '#6b6e7f',
						type: 'solid',
					}
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
				}
			},
			//y轴
			yAxis: {
				type: 'value',
				splitLine: {
					lineStyle: {
						type: 'dashed',
						color: '#6b6e7f'
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
			color:['#6b6e7f'],
			//系列列表
			series: [
				{
					name: '',
					type: 'line',
					symbol: 'circle',
					symbolSize: 0,
					lineStyle: {
						width: 1
					},
					step: 'start',
					data: null
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
