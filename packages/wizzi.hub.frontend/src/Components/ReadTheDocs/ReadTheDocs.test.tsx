/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.demo\packages\ts.react.vite.starter\.wizzi\src\Components\ReadTheDocs\ReadTheDocs.test.tsx.ittf
    utc time: Wed, 19 Jun 2024 15:06:16 GMT
*/
import {render, screen} from '@testing-library/react';
import ReadTheDocs from '.';
describe('Render the ReadTheDocs Component correctly', () => 
    test('should render the `p` correctly', async () => {
        render(
        <ReadTheDocs />
        )
        expect(await screen.findByTestId('read-the-docs')).toBeInTheDocument()
    }
    )
)