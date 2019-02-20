// This file configures a web server for testing the production build
// on your local machine.

import browserSync from "browser-sync";
import historyApiFallback from "connect-history-api-fallback";
import puppeteer from 'puppeteer';
import { chalkProcessing, chalkSuccess, chalkError } from "../tools/chalkConfig";

/* eslint-disable no-console */

console.log(chalkProcessing("Opening production build..."));

// Run Browsersync
browserSync({
  port: 4000,
  ui: {
    port: 4001,
  },
  server: {
    baseDir: "dist",
  },

  files: ["../../src/*.html"],

  middleware: [historyApiFallback()],
});


new Promise(res => setTimeout(res, 1000))
  .then(() => {
    console.log(chalkProcessing("Generating PDF for printable version..."));
    return puppeteer.launch();
  })
  .catch(() => { console.log(chalkError("PDF creation error!!!")); })
  .then(browser => browser.newPage())
  .then(page => page.goto('http://localhost:4000').then(() => page))
  // Wait for browserSync popup to disapear
  .then(page => new Promise(res => setTimeout(res, 3000)).then(() => page))
  .then(page => page.pdf({
    path: 'dist/Resume_Nicolas_Montvernay.pdf',
    format: 'A4',
    margin: { top: 10, bottom: 10, left: 40, right: 40},
    scale: 0.97,
  }).then(() => page))
  .then(page => page.browser().close())
  .then(() => { console.log(chalkSuccess("PDF properly created!")); });
