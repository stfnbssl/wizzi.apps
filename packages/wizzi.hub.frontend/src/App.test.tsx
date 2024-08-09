/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.hub.frontend\.wizzi-override\src\App.test.tsx.ittf
    utc time: Wed, 07 Aug 2024 13:02:16 GMT
*/
import {render, screen} from '@testing-library/react';
import user from '@testing-library/user-event';
import App from './App';
describe('Render the app correctly', () => {
    test('should render the title', async () => {
        render(
        <App />
        )
        const header = await screen.findByText(/ViteRC/);
        expect(header).toBeInTheDocument();
    }
    )
    test('should render the button and counter', async () => {
        render(
        <App />
        )
        const button = await screen.findByRole('button');
        expect(button).toBeInTheDocument();
        expect(button.innerHTML).toBe('count is 0');
        await user.click(button);
        await user.click(button);
        await user.click(button);
        expect(button.innerHTML).toBe('count is 3');
    }
    )
    test('should render the `read the docs` row', async () => {
        render(
        <App />
        )
        const readTheDocs = await screen.findByTestId('read-the-docs');
        expect(readTheDocs).toBeInTheDocument();
    }
    )
}
)