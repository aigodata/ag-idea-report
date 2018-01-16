/*
 * 折线图
 * 描述: 心电图
 */
;(function (global, fun) {
	if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
		module.exports = fun();
	} else if (typeof define === 'function'
		&& (typeof define.amd === 'object' || typeof define.cmd === 'object')) {
		define(fun);
	} else {
		global.agChart.electrocardiogram.demo = fun();
	}
})(window, function () {
	'use strict';

	function chart() {

		this.name = "electrocardiogram.demo";

		this.single = null;

		this.option = {
			//标题
			title: {
				show: false
			},
			//网格
			grid: {
				top: '60',
				left: '40',
				right: '40',
				bottom: '60'
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
				padding: [8,15]
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
						color: '#fff',
						type: 'solid',
					}
				},
				axisTick: {
					show: false
				},
				axisLabel: {
					textStyle: {
						color: '#fff',
						fontSize: '12'
					}
				}
			},
			//y轴
			yAxis: {
				type: 'value',
				splitLine: {
					show:false
				},
				axisLine: {
					show: false
				},
				axisTick: {
					show: false
				},
				axisLabel: {
					show:false
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
							color: '#fff'
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
