"use client";

import { createTheme, virtualColor } from "@mantine/core";

/* Put your mantine theme overrides here */
export const zeroDayCyberTheme = createTheme({
    colors: {
        royalBlue: ["#4169E1", "#4169E1", "#4169E1", "#4169E1", "#4169E1", "#4169E1", "#4169E1", "#4169E1", "#4169E1", "#4169E1"],
        darkNavyBlue: ["#18399a", "#18399a", "#18399a", "#18399a", "#18399a", "#18399a", "#18399a", "#18399a", "#18399a", "#18399a"],
        darkGray: ['#272727','#e4e6ed','#c8cad3','#a9adb9','#9093a4','#808496','#767c91','#656a7e','#585e72','#4a5167'],
        snow: ["#f5f5f5","#e7e7e7","#cdcdcd","#b2b2b2","#9a9a9a","#8b8b8b","#848484","#717171","#656565","#575757"],
        virtualColor1: virtualColor({
            name: 'virtualColor1',
            dark: "darkGray",
            light: 'snow',
          })
    },
    primaryColor: "royalBlue",
    primaryShade: 0
})