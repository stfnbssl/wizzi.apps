/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\ts.react.vite.starter\.wizzi\src\Components\Header\Header.test.tsx.ittf
    utc time: Wed, 19 Jun 2024 15:06:16 GMT
*/
import {render, screen} from '@testing-library/react';
import Header from '.';
describe('Render the Header Component correctly', () => {
    test('should render the Vite logo', async () => {
        render(
        <Header />
        )
        const viteLogo = await screen.findByTestId('vite-logo');
        expect(viteLogo).toBeInTheDocument();
    }
    )
    test('should render the React logo', async () => {
        render(
        <Header />
        )
        const reactLogo = await screen.findByTestId('react-logo');
        expect(reactLogo).toBeInTheDocument();
    }
    )
    test('should render the title', async () => {
        render(
        <Header />
        )
        const header = await screen.findByText(/ViteRC/);
        expect(header).toBeInTheDocument();
    }
    )
}
)