/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.13
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\components\widgets\ContextMenu.tsx.ittf
*/
import {StyleSheet, css} from 'aphrodite';
import classnames from 'classnames';
import * as React from 'react';
import {c, s} from '../ThemeProvider';
import ShortcutLabel from './ShortcutLabel';

export type Action = { 
    label: string;
    handler: () => void;
    disabled?: boolean;
    combo?: number[];
};

export type ContextMenuProps = { 
    innerRef?: React.Ref<HTMLUListElement>;
    visible: boolean;
    actions: (Action | undefined)[];
    position?: { 
        pageX: number;
        pageY: number;
    } | null;
    onHide: () => void;
    className?: string;
};
const BOTTOM_OFFSET = 35;
const MENU_ITEM_HEIGHT = 28;

export class ContextMenu extends React.PureComponent<ContextMenuProps> {
    render() {
        const {
            visible, 
            position, 
            actions, 
            onHide, 
            className, 
            
            // @ts-ignore
            innerRef
         } = this.props;
        if (!visible) {
            return null; 
        }
        const shownActions = actions.filter(action => 
            
                action
            ) as Action[];
        return  (
            <ul
             ref={innerRef} className={classnames(css(styles.menu), className)} style={position ? {
                        position: 'fixed', 
                        top: Math.min(position.pageY, window.innerHeight - BOTTOM_OFFSET - shownActions.length * MENU_ITEM_HEIGHT), 
                        left: position.pageX, 
                        marginTop: -8
                     } : {}}>
                {
                    shownActions.map(({
                        label, 
                        handler, 
                        disabled, 
                        combo
                     }: Action) => 
                    
                         (
                        <li
                         key={label}>
                            <button
                             disabled={disabled} className={css(styles.item, disabled && styles.disabled)} onClick={() => {
                                
                                    handler();
                                    onHide();
                                }
                            }>
                                <div
                                >
                                    {label}
                                </div>
                                {
                                    combo ?  (
                                        <ShortcutLabel
                                         combo={combo} className={css(styles.hint)} />
                                        )
                                     : null
                                }
                            </button>
                        </li>
                        )
                    
                    )
                }
            </ul>
            )
        ;
    }
}
export default React.forwardRef((props: ContextMenuProps, ref: React.Ref<HTMLUListElement>) => 
    
         (
        <ContextMenu
         {...props} innerRef={ref} />
        )
    
    )
const fadeIn = {
    from: {
        opacity: 0
     }, 
    to: {
        opacity: 1
     }
 };
const styles = StyleSheet.create({
    menu: {
        zIndex: 10, 
        listStyle: 'none', 
        padding: 0, 
        borderRadius: 4, 
        borderStyle: 'solid', 
        boxShadow: s('popover'), 
        minWidth: 160, 
        animationName: fadeIn, 
        animationDuration: '0.083s', 
        animationTimingfunction: 'linear', 
        backgroundColor: c('content'), 
        border: `1px solid ${c('border')}`, 
        color: c('text')
     }, 
    item: {
        display: 'flex', 
        justifyContent: 'space-between', 
        appearance: 'none', 
        background: 'none', 
        border: 0, 
        outline: 0, 
        width: '100%', 
        padding: '8px 6px', 
        textAlign: 'left', 
        userSelect: 'none', 
        borderRadius: 2, 
        fontSize: 16, 
        color: c('text'), 
        borderBottom: `1px solid ${c('border')}`, 
        marginBottom: '-1px', 
        ':hover': {
            background: c('hover')
         }
     }, 
    disabled: {
        pointerEvents: 'none', 
        opacity: 0.5
     }, 
    hint: {
        marginLeft: 24, 
        lineHeight: '24px'
     }
 });
