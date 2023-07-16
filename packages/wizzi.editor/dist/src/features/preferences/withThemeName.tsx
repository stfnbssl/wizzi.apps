/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.v07\packages\wizzi-js\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.14
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.editor\.wizzi\src\features\preferences\withThemeName.tsx.ittf
*/
import hoistNonReactStatics from 'hoist-non-react-statics';
import * as React from 'react';
import {$Subtract} from '../../types';
import {ThemeName, PreferencesContext} from './types';

// These properties ( 'theme' ) are injected in the component
// enhanced by withThemeName
type InjectedProps = { 
    theme: ThemeName;
};

export default function withThemeName<P extends InjectedProps>(Comp: React.ComponentType<P>):  React.ComponentType<$Subtract<P, InjectedProps>> {
    
        class ThemedComponent extends React.Component<$Subtract<P, InjectedProps>> {
            static displayName = `withTheme(${Comp.displayName ?? Comp.name})`;
            render() {
                
                // @ts-ignore
                const { __forwardedRef,  ...rest  } = this.props; 
                return  (
                    <PreferencesContext.Consumer
                    >
                        {
                            (props) => {
                            
                                return  (
                                    
                                    // @ts-ignore
                                    <Comp
                                     ref={__forwardedRef} theme={props && props.preferences.theme} {...rest} />
                                    )
                                ;
                            }
                            
                        }
                    </PreferencesContext.Consumer>
                    )
                ;
            }
        }
        const Result = React.forwardRef((props, ref) => 
        
             (
            <ThemedComponent
             {...props}
            // @ts-ignore
             __forwardedRef={ref} />
            )
        
        );
        hoistNonReactStatics(Result, Comp);
        return Result as any; 
    }
    // react-redux doesn't work with forwardRef: https://github.com/reduxjs/react-redux/issues/914
    // so this HOC always needs wrap a connect call, and a connect call cannot wrap this
