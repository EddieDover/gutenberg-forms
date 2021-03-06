const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

import calculationEdit from "./edit.js";
import calculationSave from "./save.js";
import { fieldParents } from "../../constants";
import Icon from "../../block/Icon.js";

import blockData from "./block.json";
const { attributes, title } = blockData;

registerBlockType("cwp/form-calculation", {
	title: __(title),
	icon: __(<Icon icon="calculation" />),
	category: "common",
	keywords: [__("gutenberg-forms"), __("forms"), __("calculation")],
	edit: calculationEdit,
	save: calculationSave,
	attributes,
	supports: {
		align: true,
		align: ["wide", "full", "center"],
	},
	parent: fieldParents,
});
