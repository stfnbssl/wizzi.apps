/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.9
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.webapp\.wizzi\src\pages\PageFormDocument.tsx.ittf
    utc time: Thu, 30 Jun 2022 13:11:40 GMT
*/
import jsesc from 'jsesc';
import React from 'react';
const css = String.raw;
const PageCss = css`
              :root {
                --font-normal: 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;
                --font-monospace: 'SF Mono', Monaco, Consolas, 'Liberation Mono', 'Courier New',
                  monospace;
              }

              html {
                box-sizing: border-box;
              }

              *,
              *:before,
              *:after {
                box-sizing: inherit;
              }

              *:focus {
                outline: none;
              }

              *:focus-visible {
                outline: auto;
              }


              body {
                font-family: var(--font-normal);
                font-size: 14px;
                line-height: 1.42857143;
                overscroll-behavior: none;
              }

              div {
                scrollbar-width: thin;
                scrollbar-color: var(--color-disabled) var(--color-background);
              }

              @media (hover) {
                ::-webkit-scrollbar {
                  width: 12px;
                  height: 12px;
                  background: var(--color-background);
                }
                ::-webkit-scrollbar-thumb {
                  background: var(--color-disabled);
                  border-radius: 10px;
                  border: 3px var(--color-background) solid;
                }
              }

              button,
              input,
              select,
              textarea {
                font: inherit;
                color: inherit;
                line-height: inherit;
              }

              button {
                cursor: pointer;
              }

              button[disabled] {
                cursor: default;
              }

              a {
                color: #4099ff;
              }
            `;
type PageFormDocumentProps = { 
    data: object;
    queryParams: object;
    content?: { 
        html: string;
        css: { 
            content: string;
            renderedClassNames: string[];
        };
    };
};

export default function PageFormDocument(props: PageFormDocumentProps) {
    
        const {
            data, 
            queryParams, 
            content
         } = props;
        return  (
            <html
            >
                <head
                >
                    <meta
                     charSet="utf-8" />
                    <meta
                     httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta
                     name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
                    <link
                     rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,300,500,600" />
                    <link
                     rel="stylesheet" href="https://cdn.jsdelivr.net/npm/normalize.css@8.0.1/normalize.min.css" />
                    <link
                     rel="stylesheet" href="/ittf/views/css/main.css.ittf" />
                    <style
                     type="text/css" dangerouslySetInnerHTML={{
                            __html: PageCss
                         }} />
                    <script
                     dangerouslySetInnerHTML={{
                            __html: `  window.__INITIAL_DATA__ = ${jsesc({
                                data, 
                                queryParams
                             }, {
                                quotes: 'double', 
                                isScriptContext: true
                             })}`
                         }} />
                </head>
                <body
                >
                    <div
                     className="flex-row space-between bg-color-header color-header">
                        <div
                         className="flex-row">
                            <div
                             className="flex-column">
                                <a
                                 className="color-header font-x font-w-s" href="/">
                                    <div
                                     style={{width: "80px", marginTop: "5px", marginLeft: "20px"}}>
                                        <svg
                                         viewBox="0 0 660 280" preserve-aspect-ratio="xMidYMid meet">
                                            <rect 
                                                x="0"
                                                y="0"
                                                fill="#434343"
                                                stroke="none"
                                                width="660"
                                                height="280"
                                             />
                                            <polyline 
                                                stroke="#efefef"
                                                fill="#efefef"
                                                points="10 250 45 10 60 10 75 130 120 210 120 130 175 210 175 110 230 210 230 250"
                                                strokeWidth="2"
                                             />
                                            <polyline 
                                                stroke="#efefef"
                                                fill="#efefef"
                                                points="250 250 260 90 290 90 300 250"
                                                strokeWidth="2"
                                             />
                                            <path 
                                                stroke="#efefef"
                                                fill="#efefef"
                                                d="M280, 30 C310,50 250,70 280, 84"
                                                strokeWidth="2"
                                             />
                                            <polyline 
                                                stroke="#efefef"
                                                fill="#efefef"
                                                points="320 250 320 230 420 130 400 110 400 90 450 90 420 230 440 230 440 250"
                                                strokeWidth="2"
                                             />
                                            <polyline 
                                                stroke="#efefef"
                                                fill="#efefef"
                                                points="450 250 450 230 550 130 530 110 530 90 580 90 550 230 570 230 570 250"
                                                strokeWidth="2"
                                             />
                                            <polyline 
                                                stroke="#efefef"
                                                fill="#efefef"
                                                points="590 250 600 90 630 90 640 250"
                                                strokeWidth="2"
                                             />
                                            <path 
                                                stroke="#efefef"
                                                fill="#efefef"
                                                d="M620, 30 C650,50 590,70 620, 84"
                                                strokeWidth="2"
                                             />
                                        </svg>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <section
                     id="root" />
                    <script
                     src="/static/pageforms/main.bundle.js" />
                </body>
            </html>
            )
        ;
    }
