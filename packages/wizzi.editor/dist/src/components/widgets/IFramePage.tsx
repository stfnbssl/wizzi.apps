/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: wizzi.plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\components\widgets\IFramePage.tsx.ittf
    utc time: Thu, 22 Feb 2024 17:41:44 GMT
*/
import React from 'react';
import {connect} from 'react-redux';
export type IFramePageProps = { 
    content?: string;
    css?: string;
    styleSheets?: string[];
};
export class IFramePage extends React.Component<IFramePageProps> {
    ifr: any;
    styleEl: any;
    cssNode: any;
    componentDidMount() {
        const prevSS = this.props.styleSheets || [];
        this._updateStylesheets(prevSS);
        if (this.props.css) {
            this._updateCss(this.props.css);
        }
        if (this.props.content) {
            this._updateContent(this.props.content);
        }
    }
    componentWillReceiveProps(nextProps: Props) {
        const prevSS = this.props.styleSheets || [];
        const nextSS = nextProps.styleSheets || [];
        if (nextSS.join('') !== prevSS.join('')) {
            this._updateStylesheets(nextSS);
        }
        if (nextProps.css !== this.props.css) {
            this._updateCss(nextProps.css);
        }
        if (nextProps.content !== this.props.content) {
            this._updateContent(nextProps.content);
        }
    }
    shouldComponentUpdate() {
        return false;
    }
    _updateContent = (content?: string) => 
    
        /**
            // 
            // const document = this.ifr.contentDocument;
            // const head = document.getElementsByTagName('head')[0];
            // document.body.innerHTML = this.props.content;
            // 
        */
        this.ifr.setAttribute('srcdoc', content)
    ;
    _updateStylesheets = (styleSheets: any) => {
    
        const document = this.ifr.contentDocument;
        if (document) {
            const head = document.getElementsByTagName('head')[0];
            const links = head.querySelectorAll('link');
            for (let i = 0, l = links.length; i < l; i++) {
                const link = links[i];
                link.parentNode.removeChild(link);
            }
            if (styleSheets && styleSheets.length) {
                styleSheets.forEach((href: string) => {
                
                    const link = document.createElement('link');
                    link.setAttribute('rel', 'stylesheet');
                    link.setAttribute('type', 'text/css');
                    link.setAttribute('href', href);
                    head.appendChild(link);
                }
                )
            }
        }
    }
    ;
    _updateCss = (css?: string) => {
    
        const document = this.ifr.contentDocument;
        if (document) {
            const head = document.getElementsByTagName('head')[0];
            if (!this.styleEl) {
                const el = document.createElement('style');
                el.type = 'text/css';
                head.appendChild(el);
                this.styleEl = el;
            }
            const el = this.styleEl;
            if (el.styleSheet) {
                el.styleSheet.cssText = css;
            }
            else {
                const cssNode = document.createTextNode(css);
                if (this.cssNode) {
                    el.removeChild(this.cssNode);
                }
                el.appendChild(cssNode);
                this.cssNode = cssNode;
            }
        }
    }
    ;
    render() {
        return  (
            <div
             style={{
                    width: '100%', 
                    height: '100%'
                 }}>
                <iframe 
                    frameBorder={0}
                    sandbox="allow-scripts"
                    style={{
                            width: '100%', 
                            height: '100%'
                         }}
                    ref={f => 
                        
                            this.ifr = f
                    }
                 />
            </div>
            )
        ;
    }
}
export default IFramePage;
