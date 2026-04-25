/**
 * Default options for chart configuration.
 * These values are used when no explicit options are provided by the user.
 */

import { DeepPartial } from '../../helpers/strict-type-checks';
import { ChartOptions } from './chart-options';

/**
 * Default chart options that provide sensible defaults for all chart configurations.
 * Users can override any of these values when creating a chart.
 */
export const chartOptionsDefaults: ChartOptions = {
	width: 0,
	height: 0,
	autoSize: false,
	layout: {
		background: {
			type: 'solid',
			color: '#ffffff',
		},
		textColor: '#191919',
		fontSize: 12,
		fontFamily: `'Trebuchet MS', Roboto, Ubuntu, sans-serif`,
		attributionLogo: true,
	},
	crosshair: {
		vertLine: {
			color: '#758696',
			width: 1,
			style: 3,
			visible: true,
			labelVisible: true,
			labelBackgroundColor: '#4c525e',
		},
		horzLine: {
			color: '#758696',
			width: 1,
			style: 3,
			visible: true,
			labelVisible: true,
			labelBackgroundColor: '#4c525e',
		},
		mode: 1,
	},
	grid: {
		vertLines: {
			color: '#D6DCDE',
			style: 0,
			visible: true,
		},
		horzLines: {
			color: '#D6DCDE',
			style: 0,
			visible: true,
		},
	},
	overlayPriceScales: {
		mode: 0,
		invertScale: false,
		autoScale: true,
		scaleMargins: {
			top: 0.1,
			bottom: 0.1,
		},
		borderVisible: false,
		borderColor: '#2B2B43',
		entireTextOnly: false,
		visible: false,
		ticksVisible: false,
		alignLabels: true,
		minimumWidth: 0,
	},
	leftPriceScale: {
		mode: 0,
		invertScale: false,
		autoScale: true,
		scaleMargins: {
			top: 0.2,
			bottom: 0.1,
		},
		borderVisible: true,
		borderColor: '#2B2B43',
		entireTextOnly: false,
		visible: false,
		ticksVisible: false,
		alignLabels: true,
		minimumWidth: 0,
	},
	rightPriceScale: {
		mode: 0,
		invertScale: false,
		autoScale: true,
		scaleMargins: {
			top: 0.2,
			bottom: 0.1,
		},
		borderVisible: true,
		borderColor: '#2B2B43',
		entireTextOnly: false,
		visible: true,
		ticksVisible: false,
		alignLabels: true,
		minimumWidth: 0,
	},
	timeScale: {
		rightOffset: 0,
		barSpacing: 6,
		minBarSpacing: 0.5,
		fixLeftEdge: false,
		fixRightEdge: false,
		lockVisibleTimeRangeOnResize: false,
		rightBarStaysOnScroll: false,
		borderVisible: true,
		borderColor: '#2B2B43',
		visible: true,
		timeVisible: false,
		secondVisible: true,
		shiftVisibleRangeOnNewBar: true,
		allowShiftVisibleRangeOnWhitespaceReplacement: false,
		ticksVisible: false,
		ticksMargin: 0,
		uniformDistribution: false,
		minimumHeight: 0,
		allowBoldLabels: true,
	},
	trackingMode: {
		exitMode: 1,
	},
	handleScroll: {
		mouseWheel: true,
		pressedMouseMove: true,
		horzTouchDrag: true,
		vertTouchDrag: true,
	},
	handleScale: {
		mouseWheel: true,
		pinch: true,
		axisDoubleClickReset: {
			time: true,
			price: true,
		},
		axisPressedMouseMove: {
			time: true,
			price: true,
		},
	},
	kineticScroll: {
		touch: false,
		mouse: false,
	},
};

/**
 * Merges user-provided options with the default chart options.
 *
 * @param options - Partial options provided by the user
 * @returns Merged options with defaults applied for any missing values
 */
export function mergeOptionsWithDefaults(
	options: DeepPartial<ChartOptions>
): ChartOptions {
	return {
		...chartOptionsDefaults,
		...options,
	};
}
