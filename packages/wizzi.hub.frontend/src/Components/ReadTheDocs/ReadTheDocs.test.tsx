/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi.plugins\packages\wizzi.plugin.ts\lib\artifacts\ts\module\gen\main.js
    package: @wizzi/plugin.ts@
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi.apps\packages\wizzi.hub.frontend\.wizzi-override\src\Components\ReadTheDocs\ReadTheDocs.test.tsx.ittf
    utc time: Sat, 20 Jul 2024 16:18:34 GMT
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