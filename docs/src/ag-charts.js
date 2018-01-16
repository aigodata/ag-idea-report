/**
 * ag-charts基类
 */
;(function (gloabal, fun) {
	if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
		module.exports = fun();
	} else if (typeof define === 'function'
		&& (typeof define.amd === 'object' || typeof define.cmd === 'object')) {
		define(fun);
	} else {
		gloabal.agChart = fun();
	}
})(window, function (agChart) {
	'use strict';

	agChart = {
		// 折线图 堆叠区域
		recorded: {},
		// 运输 图表
		transportatin:{},
		// 日常活动 上 图表
		activitiesT:{},
		// 日常活动 下 图表
		activitiesB:{},
		// 每月产量 图表
		monthly:{},
		// 每月谈话 图表
		weekly:{},
		// 每小时短信 图表
		hourly:{},
		// 每月短信 图表
		total:{},
		// 心电图 图表
		electrocardiogram:{},
		// 照片
		photos:{},
		// 旅行
		travel:{}
	};

	agChart.common = {
		init: function () {

		},
		resize: function () {
			this.resize();
		},
		getDom: function (el) {
			if (!el) return;
			if (typeof el === "string") {
				var dom = document.querySelector(el);
				if (!dom) {
					throw new Error("图表: " + this.name + " 图表的选择器名称" + el + "无效");
				}
				return dom;
			} else if (el instanceof HTMLElement) {
				return el;
			}
		}
	};

	return agChart;
});
