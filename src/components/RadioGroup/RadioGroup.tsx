import styled from 'styled-components'
import { Legend } from '../RadioGroup/styles'
import { IInputGroup, IOption, IOption2 } from '../../types/types'
import RadioButton from '../RadioButton/RadioButton'

const Fieldset = styled.fieldset`
    border: none;
`

const Wrapper = styled.div`
    padding: 0.5rem;
    display: grid;
    gap: 1rem;
`

const RadioButtonGroup = ({
    label,
    catagory,
    options,
    onChange,
}: IInputGroup) => {
    function renderOptions() {
        return options.map(({ id, name, disabled }: IOption, index) => {
            const numberToString = String(id)
            const shortenedOptionLabel = numberToString.replace(/\s+/g, '')
            const optionId = `radio-option-${shortenedOptionLabel}`

            return (
                <>
                    <RadioButton
                        value={id}
                        label={name}
                        key={optionId}
                        id={optionId}
                        name={catagory}
                        disabled={disabled}
                        onChange={onChange}
                    />
                </>
            )
        })
    }
    return (
        <Fieldset>
            <Legend>{label}</Legend>
            <Wrapper>{renderOptions()}</Wrapper>
        </Fieldset>
    )
}
export default RadioButtonGroup
