import {render, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import List from './List'

describe('List Component', () => {
    it('Should be able to render the title', ()=>{
        const { getByText } = render(<List initialLangs={[]}/>)

        expect(getByText('Programming Languages')).toBeInTheDocument()
    })

    it('Should be able to render list', ()=>{
        const { getByText } = render(<List initialLangs={["JavaScript", "C#", "Python"]}/>)

        expect(getByText('JavaScript')).toBeInTheDocument()
        expect(getByText('C#')).toBeInTheDocument()
        expect(getByText('Python')).toBeInTheDocument()
    })

    it('Should be able to render new list', async ()=>{
        const { getByText, getByPlaceholderText, findByText } = render(<List initialLangs={[]}/>)

        const inputElement = getByPlaceholderText('New language')
        const addButton = getByText('Send');

        await userEvent.type(inputElement, "Java");
        await userEvent.click(addButton);

        expect(await findByText("Java")).toBeInTheDocument()
    })

    it('Should be able to render new list after delete some language', async ()=>{
        const { getAllByText, queryByText } = render(<List initialLangs={["JavaScript"]}/>)

        const delButton = getAllByText('Del');

        await userEvent.click(delButton[0]);

        await waitFor(() => {
            expect(queryByText("JavaScript")).not.toBeInTheDocument()
        })
    })
})